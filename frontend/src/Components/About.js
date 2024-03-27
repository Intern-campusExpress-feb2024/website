import React from 'react';
import './About.css';
import backgroundImage from './background7.jpg';

const About = () => {
  return (
    <div className="about-us-container">
      <div className="background-image"></div>
      <div className="contentabout">
        <h1>About Us</h1>
      </div>
      <div className="mission-vision-value-container">
        <div className="mission">
          <h2>MISSION</h2>
  <ul>
    <li>Empowering institutions, businesses, and students with cutting-edge logistics and packers &amp; movers solutions.</li>
    <li>A commitment to revolutionizing the industry.</li>
    <li>A mission to simplify the complexities of transportation and supply chain management.</li>
    <li>Unparalleled service quality and customer satisfaction.</li>
    <li>An innovative approach and global reach to create a seamless experience for all clients.</li>
    <li>Excellence in every aspect of our operations.</li>
  </ul>

        </div>
        <div className="vision">
          <h2>VISION</h2>
          <ul>
  <li>At Campus Express, we envision a world where logistics and packers &amp; movers services are synonymous with efficiency and reliability.</li>
  <li>Our vision is to be the foremost choice for institutions, companies, and students seeking hassle-free, tailored logistics solutions.</li>
  <li>By leveraging technology and our team's expertise, we aim to set new industry standards.</li>
  <li>We are committed to continually expanding our global presence.</li>
  <li>We strive to enhance the lives of our customers.</li>
</ul>

        </div>
        <div className="value">
          <h2>VALUE</h2>
          <ul>
  <li>Campus Express is a 3-year-old Logistics and Packers &amp; Movers company.</li>
  <li>We help Institutions, Companies &amp; Universities simplify their logistics challenges.</li>
  <li>Till date, we have successfully served several domestic &amp; international clients.</li>
  <li>We have served more than 15,000+ students from 300+ colleges with a record success rate.</li>
  <li>We are spread across companies, HEIs (Higher Education Institutions), and extend our service for both domestic &amp; international logistics alongside custom consultation.</li>
</ul>

        </div>
      </div>
    </div>
  );
};

export default About;
