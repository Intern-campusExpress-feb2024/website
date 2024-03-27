const express = require("express");

const connection = require("./database/connection");
const routes = require("./routes/routes");
require("dotenv").config();

const app = express();
const cors = require("cors");
const PORT = 6005;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;

const googledb = require("./model/googleSchema");

app.use(
  cors({
    origin: "http://localhost:4000",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);
// Middleware
app.use(express.json());
//setup session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await googledb.findOne({ googleId: profile.id });

        if (!user) {
          user = new googledb({
            googleId: profile.id,
            googleName: profile.displayName,
            email: profile.emails[0].value,
            registered: false,
          });

          await user.save();
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// initial google ouath login
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/api/createOrder",
    failureRedirect: "http://localhost:3000/*",
  })
);

app.get("/login/success", async (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "user Login", user: req.user });
  } else {
    res.status(400).json({ message: "Not Authorized" });
  }
});

app.get("/updated-user-data/:id", async (req, res) => {
  try {
    const result = await userdb.findById(req.params.id);

    if (!result) {
      return res.status(404).json({ message: "Document not found" });
    }
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:3000");
  });
});

app.patch("/update-google-data/:id", async (req, res) => {
  try {
    const registered = await googledb.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(registered);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

// Routes
app.use("/api", routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
