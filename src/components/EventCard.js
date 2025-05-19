import React from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import './EventCard.css';
import {HomeButton} from '../components/Buttons'


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

const EventCard = ({ event }) => {
	return (
    <div class="card">
      <img src={urlFor(event.image).url()} alt={event.title} style={{width: 100}}/>
      <h1>{event.eventName}</h1>
      <p>{event.dayAndDates.date}</p>
      <p>{event.dayAndDates.weekday}</p>
      <p>{event.desc}</p>
      <HomeButton onClick={() => window.open(event.socialMediaLink, '_blank')}>
        More Info
      </HomeButton>
    </div> 
	);
};

export default EventCard;