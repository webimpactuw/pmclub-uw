import React from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import './EventCard.css';
import {HomeButton} from '../components/Buttons'


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

const EventCard = ({ key, event }) => {
	return (
    <div key={key} className="card">
      <img src={urlFor(event.image).url()} alt={event.title} style={{width: "80%", marginRight: "auto", display: "block", marginLeft: "auto", marginTop: "30px"}}/>
      <h3>{event.eventName}</h3>
      <p className="time">🗓️ {event.dayAndDates[0].weekday}, {event.dayAndDates[0].date}</p>
      <p className="time">
        🕓 {event.eventDuration[0].start}{event.eventDuration[0].timeOfDay1} - {event.eventDuration[0].end}{event.eventDuration[0].timeOfDay2}</p> 
      <p className="time">📍 {event.location}</p>
      <p className="desc">{event.desc}<br/><br/></p>
      <HomeButton onClick={() => window.open(event.socialMediaLink, '_blank')}>
        More Info
      </HomeButton>
    </div> 
	);
};

export default EventCard;