import "./Interested.css";
export default function Interested({ likedBusinessArr }) {
  return (
    <div id="interestedContainer">
      <h2>Interested</h2>
      <ol>
        {likedBusinessArr.map((value, idx) => {
          return <li key={idx}>{idx+1}: {value}</li>;
        })}
      </ol>
    </div>
  );
}
