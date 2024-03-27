/*import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import image from "./slide01.jpg";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_05zxeml",
        "template_6qsu1eg",
        {
          name,
          email,
          phone,
          message,
        },
        "NW6kq5_J7f8caO61b"
      )
      .then(
        (result) => {
          console.log("Email sent successfully");
          
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email", error);
          
        }
      );
  };

  return (
    <div
      className="contact-us-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;*

import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import image from "./slide01.jpg";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false); // New state variable for tracking email status

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_05zxeml",
        "template_6qsu1eg",
        {
          name,
          email,
          phone,
          message,
        },
        "NW6kq5_J7f8caO61b"
      )
      .then(
        (result) => {
          console.log("Email sent successfully");
          setEmailSent(true); // Set the state variable to true when email is sent
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email", error);
        }
      );
  };

  return (
    <div
      className="contact-us-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      {emailSent ? ( // Conditional rendering based on the emailSent state variable
        <div className="form-container thanks-container">
          <h2 style={{ fontFamily: "Robot", fontSize: "24px" }}>
            Thank You We have received your Query,
            Our team will get back to you.
          </h2>
        </div>
      ) : (
        <div className="form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactUs;*/

import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import image from "./slide01.jpg";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fxa96cd",
        "template_3ablmi4",
        {
          name,
          email,
          phone,
          message,
        },
        "ltW0YKF9coYUonpV2"
      )
      .then(
        (result) => {
          console.log("Email sent successfully");
          setEmailSent(true);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email", error);
        }
      );
  };

  return (
    <div
      className="contact-us-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      {emailSent ? (
        <div className="form-container thanks-container">
          <h2>Thank You We have received your Query, Our team will get back to you Soon.</h2>
        </div>
      ) : (
        <div className="form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactUs;

