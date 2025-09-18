import React from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import './EventCard.css';
import {HomeButton} from '../components/Buttons'
import Placeholder from "../assets/placeholder.png";


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

const EventCard = ({ slug, event }) => {
  const disabled = event.socialMediaLink? false: true;
	return (
    <div key={slug} className="card">
      <img src={event.image? urlFor(event.image).url() : Placeholder} alt={event.title} style={{maxHeight: "50%", maxWidth: "85%", marginRight: "auto", display: "block", marginLeft: "auto", marginTop: "30px"}}/>
      <h3>{event.eventName}</h3>
      <p className="time">🗓️ {event.dayAndDates[0].weekday}, {event.dayAndDates[0].date}</p>
      <p className="time">
        🕓 {event.eventDuration[0].start}{event.eventDuration[0].timeOfDay1} - {event.eventDuration[0].end}{event.eventDuration[0].timeOfDay2}</p> 
      <p className="time">📍 {event.location}</p>
      <p></p>
      <HomeButton disabled={disabled} onClick={() => window.open(event.socialMediaLink, '_blank')}>
        {disabled? "Not available" : "More Info"}
      </HomeButton>
    </div> 
	);
};

export default EventCard;