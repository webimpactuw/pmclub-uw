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
      } | order(orderRank)`
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
			<div style={{alignItems:"center"}}>
				{events &&
					events.map((event, slug) => (
						<Accordion key={slug} event={event} />
					))}
			</div>
		</div>
    </div>
  );
};

export default Calendar;