import './PhotoGallery.css';
import photo1 from "../assets/cover.jpg";
import photo2 from "../assets/meeting.jpg";
import photo3 from "../assets/meeting2.jpg";
import photo4 from "../assets/presentation.jpg";
import photo5 from "../assets/redbull.png";
import photo6 from "../assets/smallgroup.jpg";
import photo7 from "../assets/smallgroup2.jpg";
import minion from "../assets/minion.png";
import Modal from "./Modal";
// import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import React, { useState, useEffect } from "react";

const PhotoGallery = () => {
  const [open, setOpen] = React.useState(false);
  const [currImg, setcurrImg] = React.useState(minion);

  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = (myImg) => {
      setOpen(true);
      setcurrImg(myImg);
  };

  const images = [
    {
      img: photo1,
      title: 'Fern',
    },
    {
      img: photo2,
      title: 'Snacks',
    },
    {
      img: photo3,
      title: 'Mushrooms',
    },
    {
      img: photo4,
      title: 'Tower',
    },
    {
      img: photo5,
      title: 'Sea star',
    },
    {
      img: photo6,
      title: 'Honey',
    },
    {
      img: photo7,
      title: 'Basketball',
    },
  ];
  return (
    <>
    <h2>
      Gallery
    </h2>
    <div className="container">
      <Box sx={{ width: 1100}}>
        <Masonry columns={4} spacing={1}>
          {images.map((item, index) => (
            <div key={index}>
              <img
                id="gallery-img"
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                onClick={()=>handleOpen(item.img)}
                style={{
                  display: 'block',
                  width: '100%',
                  cursor: 'pointer',
                  transition: '0.3s',
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
      <Modal isOpen={open} onClose={handleClose}>
        <div className="modal-img">
          <img src={currImg} style={{width: "40%"}}/>
        </div>
      </Modal>
    </div>
    </>
  );
};

export default PhotoGallery;
