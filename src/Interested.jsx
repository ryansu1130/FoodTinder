import "./Interested.css";
export default function Interested({ likedBusinessArr }) {
  //JSX redering the interested section of the page
  return (
    <div id="interestedContainer">
      <h2>Interested</h2>
      <ol>
      {/* create an order list based on the like businesses array */}
        {likedBusinessArr.map((value, idx) => {
          return (
            <li key={idx}>
              {idx + 1}: {value}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
