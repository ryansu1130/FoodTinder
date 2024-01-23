import "./Display.css";
import { useState } from "react";
export default function Display({ data }) {
  const leftArrow = "<-";
  const rightArrow = "->";
  const [count, setCount] = useState(0);
  const numBusinesses = data.businesses.length
  const handleLikeClick = () => {
    //if liked, then have a list and update it to interested
    if(count + 1 < numBusinesses)
      setCount(count + 1);
    else
      setCount(0)
  };

  const handlePassClick = () => {
    if(count + 1 < numBusinesses)
      setCount(count + 1);
    else
      setCount(0)
  };

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
