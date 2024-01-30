import "./Form.css";
import { useState } from "react";
import About from "./About";
export default function Form({ newSearch }) {
  //keep track of the input form data
  const [formData, setFormData] = useState({ term: "", location: "" });

  //middleware to handle page when submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.term === "" || formData.location === "") {
      return alert("Must Fill Out Delicacy And Location");
    }
    newSearch(formData.term, formData.location);
    setFormData({ term: "", location: "" });
  };

  //handle term input change
  const handleTermChange = (e) => {
    setFormData({ ...formData, term: e.target.value });
  };

  //handle location input change
  const handleLocationChange = (e) => {
    setFormData({ ...formData, location: e.target.value });
  };

  //check the user input, make suer it is not an empty input
  //Note: the validation is simple, it can be imporved by also check using valid location
  //One way to approach this si by using a npm pacakge that check if location is valid
  const validateInput = (input) => {
    if (input === "term") {
      if (formData.term === "") {
        return false;
      }
      return true;
    }
    if (input === "location") {
      if (formData.location === "") {
        return false;
      }
      return true;
    }
  };

  //JSX rendering the form section and about section of the page
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <a target="blank" href="https://cors-anywhere.herokuapp.com/corsdemo">
          Enable CORS Before Search
        </a> */}
        <div className="spacer">
          <label htmlFor="term">Search A Delicacy</label>
          <input
            style={{
              border: validateInput("term")
                ? "2px solid green"
                : "2px solid red",
            }}
            onChange={handleTermChange}
            value={formData.term}
            type="text"
            name="term"
            id="term"
            placeholder="Pho Noddles"
          />
        </div>
        <div className="spacer">
          <label htmlFor="location">Location</label>
          <input
            style={{
              border: validateInput("location")
                ? "2px solid green"
                : "2px solid red",
            }}
            onChange={handleLocationChange}
            value={formData.location}
            type="text"
            name="location"
            id="location"
            placeholder="Portland,OR"
          />
        </div>
        
        <button id="submitBtn" type="submit">
          Show Me Results
        </button>
        <a target="blank" href="https://cors-anywhere.herokuapp.com/corsdemo">
          Enable CORS Before Search
        </a>
        <About />
      </form>
    </>
  );
}
