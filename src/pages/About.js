import React, { useState } from "react";
import "./About.css";

// (Optionally import your real image instead of this placeholder)
import heroImage from "../assets/About_TeamPicture.jpg";

const About = () => {
  const [flipped, setFlipped] = useState(Array(10).fill(false));

  const handleFlip = (idx) => {
    setFlipped((prev) =>
      prev.map((f, i) => (i === idx ? !f : f))
    );
  };

  return (
    <div className="about-container">
      {/* ====== Hero / Intro Section ====== */}
      <div className="about-hero">
        <div className="about-hero-text">
          <h2>Project Management Club</h2>
          <p>
            The purpose of the Product Management Club at the University of Washington
            is to assist members and undergraduate students in their pursuit of associate
            product management roles. Our mission is to provide opportunities for students
            to gain practical experience in product management through resume-building activities
            such as product management projects and interview preparation.
          </p>
          <p>
            We aim to foster a community of product management enthusiasts who are committed to
            learning and sharing knowledge about the product management field. By offering networking
            events, interview preparation, project workshops, and other resources, we strive to provide
            a comprehensive and supportive environment for members to develop their skills and pursue
            their career goals in product management.
          </p>
        </div>
        <div className="about-hero-image">
          <img src={heroImage} alt="Students collaborating" />
        </div>
      </div>

      {/* ====== Our Team Section ====== */}
      <h1 className="about-title">Our Team</h1>
      <div className="team-grid">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`team-card ${flipped[i] ? "flipped" : ""} ${
              i === 9 ? "last" : ""
            }`}
            onClick={() => handleFlip(i)}
          >
            <div className="card-face front">
              <div className="photo-placeholder" />
              <div className="card-footer">
                <p className="member-name">Name</p>
                <p className="member-pos">Position</p>
              </div>
            </div>
            <div className="card-face back">
              <p>More info about this person</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
