import "./Form.css";
import { useState } from "react";
import About from "./About";
import axios from "axios";

let auto = {
  terms: [{ text: "Beef" },{ text: "Beef" },{ text: "Beef" }],
};

export default function Form({ newSearch }) {
  //keep track of the input form data
  const [formData, setFormData] = useState({ term: "", location: "" });
  const [autoData, setAutoData] = useState([]);
  // let auto = null;
  //middleware to handle page when submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.term === "" || formData.location === "") {
      return alert("Must Fill Out Delicacy And Location");
    }
    newSearch(formData.term, formData.location);
    setFormData({ term: "", location: "" });
  };

  async function autoComplete(text) {
    //Header
    const options = {
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete",
      params: { text: text },
      withCredentials: false,
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer GNk6xUk8XqpSs77bu_wHvJPGoBopXvwub14aVhTfo14ZP75vTQHGWSwE4nsbyb8vvzncLZ-w0k0fZTRjkCWBEqe3z-VfoUyfIRrPJET7ZdQ874_BIPtIPLJ3UGCXZXYx",
      },
    };

    //If data returns is successful, display data, else show error message
    try {
      const { data } = await axios.request(options);
      auto = data;
      // setAutoData(auto);
    } catch (error) {
      console.log(error.message);
    }
  }

  //handle term input change
  const handleTermChange = (e) => {
    autoComplete(e.target.value);
    setAutoData([auto.terms[0].text, auto.terms[1].text, auto.terms[2].text])
    console.log(autoData)
    
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
      <datalist id="testing">
      {autoData.map((value, idx) => {
          return <option value={value}></option>
        })}
      </datalist>
      <form onSubmit={handleSubmit}>
        <div className="spacer">
          <label htmlFor="term">Search A Delicacy</label>
          <input
            style={{
              border: validateInput("term")
                ? "2px solid green"
                : "2px solid red",
            }}
            list="testing"
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
        <a
          id="corsTag"
          target="blank"
          href="https://cors-anywhere.herokuapp.com/corsdemo"
        >
          Enable CORS Before Search
        </a>
        <About />
      </form>
    </>
  );
}
