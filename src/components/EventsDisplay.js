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
  events && events.splice(2);
	return (
		<div style={{display:"flex", flexDirection:"column", marginBottom:"70px"}}>
			<h2>
				Upcoming Events
			</h2>
			<div style={{display:"flex", height: "700px", flexDirection:"row", marginLeft:"100px", marginRight:"100px"}}>
				{events &&
					events.map((event, slug) => (
						<EventCard key={event.slug} event={event} />
					))}
			</div>
		</div>
	);

};

export default EventsDisplay;