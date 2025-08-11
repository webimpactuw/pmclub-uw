import React, { useState } from 'react';
import "./EventAccd.css";
import minion from "../assets/icons/Announcement.svg";
import {
  getSVG
} from "../assets/icons/icons"
import sanityClient from "../client";

const Accordion = ({ slug, event }) => {
  const [isActive, setIsActive] = useState(false);
  const img = getSVG(event.icon, 50);
  return (
    <>
      <div key={slug} className="accordion">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <span>{img}</span>
          <p style={{fontWeight: "600"}}>{event.eventName}</p>
          <p><i>{event.dayAndDates[0].date}</i></p>
          <p><i>{event.eventDuration[0].start}{event.eventDuration[0].timeOfDay1}</i></p>
          <p style={{fontSize:"17px"}}><b>{isActive ? '-' : '+'}</b></p>
        </div>
        {isActive && 
          <>
          <div className="accordion-content">
            <div style={{textAlign:"left", width:"90%"}}><h4>Description</h4>{event.desc}</div>
            <div style={{textAlign:"left"}}>
              <h4>Featuring</h4>
              <ul style={{margin:"14px", padding:"0"}}>
              {event.featured?
                event.featured.map((person, index) => (
                  <li key={index}>{person.name} - <b>{person.affiliation}</b></li>
                )) : <li key="NA">N/A</li>}
              </ul>
            </div>
            <div style={{textAlign:"left"}}><h4>Location</h4>{event.location ? event.location:"N/A"}</div>
          </div>

          </>
        }
      </div>
    </>

  );
};

export default Accordion;