import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import EventCard from "./EventCard";

const EventsDisplay = () => {
	const [events, setEvents] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
			`*[_type == "eventInfo"]{
      	eventName,
				slug,
      	desc,
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

	return (
		<div style={{display:"flex", flexDirection:"column", marginBottom:"70px"}}>
			<h2>
				Upcoming Events
			</h2>
			<div style={{display:"flex", flexDirection:"row", marginLeft:"70px", marginRight:"70px"}}>
				{events &&
					events.map((event) => (
						<EventCard key={event._id} event={event} />
					))}
			</div>
		</div>
	);

};

export default EventsDisplay;