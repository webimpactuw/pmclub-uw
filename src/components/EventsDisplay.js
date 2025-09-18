import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import EventCard from "./EventCard";

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
			<div style={{height: "650px"}}>
				<div style={{display:"flex", flexDirection:"row", height: "650px", width: "min(80%, 1200px)", margin: "auto"}}>
					{events &&
						events.map((event, slug) => (
							<EventCard key={slug} event={event} />
						))}
				</div>
			</div>

		</div>
	);

};

export default EventsDisplay;