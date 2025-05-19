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
				socialMediaLink
    	}`
			)
			.then((data) => setEvents(data))
			.catch(console.error);
	}, []);

	return (
		<div>
			<h3>
				Upcoming Events
			</h3>
			<div>
				{events &&
					events.map((event) => (
						<EventCard key={event._id} event={event} />
					))}
			</div>
		</div>

	);

};

export default EventsDisplay;