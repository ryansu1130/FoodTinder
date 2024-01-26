import "./Display.css";
import { useState } from "react";
export default function Display({ data, count, handleLikeClick, handlePassClick }) {
  const leftArrow = "<-";
  const rightArrow = "->";

  return (
    <div id="displayContainer">
      <div id="imageContainer">
        <img
          id="restaurantCover"
          src={data.businesses[count].image_url}
          alt="Image Not Found"
        />
      </div>
      <div id="businessDetails">
        <span>{data.businesses[count].name}</span>
        <span>•</span>
        <span>{data.businesses[count].price}</span>
        <span>•</span>
        <span>IMG</span>
        <span>•</span>
        <span>{data.businesses[count].categories[0].title}</span>
      </div>
      <button id="leftLikeBtn" onClick={handleLikeClick}>
        {leftArrow} Like
      </button>
      <button id="rightPassBtn" onClick={handlePassClick}>
        Pass {rightArrow}
      </button>
    </div>
  );
}
