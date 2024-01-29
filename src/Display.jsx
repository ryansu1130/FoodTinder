import "./Display.css";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function Display({
  data,
  count,
  handleLikeClick,
  handlePassClick,
}) {
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
        <span>
          <a target="blank" href={data.businesses[count].url}>
            {data.businesses[count].name}
          </a>
        </span>
        <span>•</span>
        <span>
          {data.businesses[count].price
            ? data.businesses[count].price
            : "No Price Data"}
        </span>
        <span>•</span>
        <span>Rating: {data.businesses[count].rating}</span>
        <span>•</span>
        <span>{data.businesses[count].categories[0].title}</span>
      </div>
      <Button variant="outlined" id="leftLikeBtn" onClick={handleLikeClick}>
        Like
      </Button>
      <Button variant="outlined" id="rightPassBtn" onClick={handlePassClick}>
        Pass
      </Button>
    </div>
  );
}
