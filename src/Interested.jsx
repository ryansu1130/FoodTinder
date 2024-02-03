import "./Interested.css";
import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Interested({ likedBusinessArr, setlikedBusinessArr }) {
  const handleOneDelete = (id) => {
    setlikedBusinessArr((prev) => {
      return prev.filter((e) => e.id !== id);
    });
  };

  const handleDeleteAll = () => {
    setlikedBusinessArr([]);
  };

  //JSX redering the interested section of the page
  return (
    <div id="interestedContainer">
      <h2>Interested</h2>
      <ol>
        <Chip
          id="deleteAll"
          label="DELETE ALL"
          onClick={handleDeleteAll}
          onDelete={handleDeleteAll}
          deleteIcon={<DeleteIcon />}
          color="error"
        />
        {/* create an order list based on the like businesses array */}
        {likedBusinessArr.map((value, idx) => {
          return (
            <li key={value.id}>
              <a id="interestLink" href={value.url} target="_blank">
                {idx + 1}: {value.business}{" "}
              </a>

              <Chip
                id="deleteIcon"
                onDelete={() => handleOneDelete(value.id)}
                deleteIcon={<DeleteIcon />}
                variant="outlined"
                color="warning"
              />
            </li>
          );
        })}
        {/* <Chip
          id="deleteAll"
          label="DELETE ALL"
          onClick={handleDeleteAll}
          onDelete={handleDeleteAll}
          deleteIcon={<DeleteIcon />}
          color="error"
        /> */}
      </ol>
    </div>
  );
}
