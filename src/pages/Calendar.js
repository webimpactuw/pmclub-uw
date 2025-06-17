import Accordion from '../components/EventAccd';
import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import "./Calendar.css";

const Calendar = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
      `*[_type == "eventInfo"]{
        eventName,
        desc,
        icon,
        dayAndDates,
        eventDuration,
        location,
        featured,
        socialMediaLink,
        slug,
      }`
      )
      .then((data) => setEvents(data))
      .catch(console.error);
  }, []);

  return(
		<div className="gradient-section">
		<div className="main">
			<h2>
				Calendar
			</h2>
			<div style={{alignItems:"center", marginTop:"20px"}}>
				{events &&
					events.map((event) => (
						<Accordion key={event._id} event={event} />
					))}
			</div>
		</div>
    </div>
  );
};

export default Calendar;