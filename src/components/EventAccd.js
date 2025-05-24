import React, { useState } from 'react';
import "./EventAccd.css";
import sanityClient from "../client";

const Accordion = ({ key, event }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div key={key} className="accordion">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{event.eventName}</div>
          <div>{event.dayAndDates[0].date}</div>
          <div>{event.eventDuration[0].start}{event.eventDuration[0].timeOfDay1}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && 
          <>
          <div className="accordion-content">
            <div style={{textAlign:"left"}}>Description <br/>{event.desc}</div>
            <div style={{textAlign:"left"}}>Featuring <br/>{event.featured}</div>
            <div style={{textAlign:"left"}}>Location <br/>{event.location ? event.location:"N/A"}</div>
          </div>

          </>
        }
      </div>
    </>

  );
};

export default Accordion;