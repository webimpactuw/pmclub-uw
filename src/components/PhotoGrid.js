import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import "./PhotoGrid.css";
import imageUrlBuilder from "@sanity/image-url";
import Modal from "./Modal";
import minion from "../assets/minion.png";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const PhotoGrid = () => {
  // const [open, setOpen] = React.useState(false);
  // const [currImg, setcurrImg] = React.useState(minion);
  const [clubImgs, setClubImgs] = useState(null);

  // const handleClose = () => {
  //     setOpen(false);
  // };

  // const handleOpen = (myImg) => {
  //     setOpen(true);
  //     setcurrImg(myImg);
  // };

  useEffect(() => {
    sanityClient
      .fetch(
      `*[_type == "clubPhoto"]{
        photo{
        asset->{
            _id,
            url
          },
        },
        alt,
        slug,
      }`
      )
      .then((data) => setClubImgs(data))
      .catch(console.error);
  }, []);

  return(
    <>
      <h2>Gallery</h2>
      <br/>
      <div className="masonry">
        {clubImgs && clubImgs.map((clubImg, i) => (
          <div className="item" key={i}>
            <img
              src={urlFor(clubImg.photo).url()}
              alt={clubImg.alt}
              // onClick={()=>handleOpen(urlFor(clubImg.photo).url())}
            />
          </div>
        ))}
      {/* <Modal isOpen={open} onClose={handleClose}>
        <div className="modal-img">
          <img src={currImg} style={{width: "40%"}}/>
        </div>
      </Modal> */}
      </div>
    </>
  );
};

export default PhotoGrid;