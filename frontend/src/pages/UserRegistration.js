import React, { useState } from "react";
import "../App.css";

function UserRegistration() {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    phoneNo: "",
    collegeName: "",
  });

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      const data = await response.json();
      console.log(data);
      // Handle success response if needed
    } catch (error) {
      console.error("Error:", error);
      // Handle error response if needed
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="container">
      <h1>User Registration</h1>
      <form onSubmit={handleUserSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <label htmlFor="phoneNo">Phone Number:</label>
        <input
          type="text"
          id="phoneNo"
          name="phoneNo"
          value={userData.phoneNo}
          onChange={handleChange}
        />
        <label htmlFor="phoneNo">College Name:</label>
        <input
          type="text"
          id="collegeName"
          name="collegeName"
          value={userData.collegeName}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default UserRegistration;
