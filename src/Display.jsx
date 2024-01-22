import "./Display.css";
export default function Display() {
  const leftArrow = "<-";
  const rightArrow = "->";
  return (
    <div id="displayContainer">
      <div id="imageContainer">
        <img
          id="restaurantCover"
          src="https://s3-media3.fl.yelpcdn.com/bphoto/MKhp6BM0esexFcD6OOKaeQ/o.jpg"
          alt="Image Not Found"
        />
      </div>
      <div id="businessDetails">
        <span>Luc Lac</span>
        <span>:</span>
        <span>$$</span>
        <span>:</span>
        {/* <img src="" alt="Phone" /> */}
        <span>IMG</span>
        <span>:</span>
        <span>Vietnamese</span>
      </div>
      <button id="leftLikeBtn">{leftArrow} Like</button>
      <button id="rightPassBtn">Pass {rightArrow}</button>
    </div>
  );
}
