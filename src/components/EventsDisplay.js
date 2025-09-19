import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import EventCard from "./EventCard";
import './EventCard.css';

const EventsDisplay = () => {
	const [events, setEvents] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
			`*[_type == "eventInfo"]|order(orderRank){
      	eventName,
				slug,
      	image{
        asset->{
          	_id,
          	url
        	},
      	},
      	dayAndDates,
				eventDuration,
				socialMediaLink,
				location,
    	}`
			)
			.then((data) => setEvents(data))
			.catch(console.error);
	}, []);
  events && events.splice(2);
	return (
		<div style={{display:"flex", flexDirection:"column", marginBottom:"70px"}}>
			<h2>
				Upcoming Events
			</h2>
      <section style={{height: "30px"}}></section>
				<div className="card-section">
					{events &&
						events.map((event, slug) => (
							<EventCard key={slug} event={event} />
						))}
				</div>

		</div>
	);

};

export default EventsDisplay;