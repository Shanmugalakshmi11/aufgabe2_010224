// features/Gallery.js
import React from "react";
import "./Gallery.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";

const images = [image1, image2, image3, image4, image5]; // Add more image paths as needed

function Image() {
  return (
    <div>
      {images.map((img, index) => (
        <img
          key={index}
          className={["profil-bild-img"]}
          src={img}
          alt={`Image${index + 1}`}
          height={200}
          width={200}
        />
      ))}
    </div>
  );
}

export default Image;
