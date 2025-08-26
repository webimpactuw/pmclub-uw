import React, { useState, useEffect } from "react";
import "./About.css";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Placeholder from "../assets/placeholder.png";

// (Optionally import your real image instead of this placeholder)
import heroImage from "../assets/About_TeamPicture.jpg";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

const About = () => {
  const [flipped, setFlipped] = useState(Array(10).fill(false));
  const [officers, setOfficers] = useState(null);

  const handleFlip = (idx) => {
    setFlipped((prev) =>
      prev.map((f, i) => (i === idx ? !f : f))
    );
  };

  useEffect(() => {
    sanityClient
      .fetch(
      `*[_type == "clubOfficer"] | order(orderRank){
        fname,
        lname,
        pos,
        bio,
        photo,
        slug,
      }`
      )
      .then((data) => setOfficers(data))
      .catch(console.error);
  }, []);

  return (
    <>
    <div className="non-gradient-section">
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
    </div>
      {/* ====== Our Team Section ====== */}
    <div className="gradient-section">
      <h2 className="about-title">Our Team</h2>
      <div className="team-grid">
        {officers && Array.from({ length: officers.length }).map((_, i) => (
          <div
            key={i}
            className={`team-card ${flipped[i] ? "flipped" : ""}`}
            onClick={() => handleFlip(i)}
          >
            <div className="card-face front">
              <div className="officer-photo">
                <img src={officers[i].photo? urlFor(officers[i].photo).url() : Placeholder} alt={officers[i].fname} style={{height: "100%"}}/>
              </div>
              <div className="card-footer">
                <p className="member-name">{officers[i].fname} {officers[i].lname}</p>
                <p className="member-pos">{officers[i].pos}</p>
              </div>
            </div>
            <div className="card-face back">
              <p>{officers[i].bio}</p>
            </div>
          </div>
        ))}
      </div>
      <section style={{height: "40px"}}></section>
      </div>
    </>
  );
};

export default About;
