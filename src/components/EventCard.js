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
      <img src={urlFor(event.image).url()} alt={event.title} style={{width: "100%"}}/>
      <h3>{event.eventName}</h3>
      <p className="time">🗓️{event.dayAndDates[0].date}</p>
      <p className="time">🕓{event.dayAndDates[0].weekday}</p> 
      <p className="time">📍{event.location}</p>
      <p className="desc">{event.desc}</p>
      <HomeButton onClick={() => window.open(event.socialMediaLink, '_blank')}>
        More Info
      </HomeButton>
    </div> 
	);
};

export default EventCard;