import "./Form.css";
import { useState } from "react";
import About from "./About";
export default function Form({ newSearch, setCount }) {
  const [formData, setFormData] = useState({ term: "", location: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.term === "" || formData.location === "") {
      return alert("Must Fill Out Delicacy And Location");
    }
    newSearch(formData.term, formData.location);
    setFormData({ term: "", location: "" });
  };

  const handleTermChange = (e) => {
    setFormData({ ...formData, term: e.target.value });
  };

  const handleLocationChange = (e) => {
    setFormData({ ...formData, location: e.target.value });
  };

  const validateTermInput = () => {
    if (formData.term === "") {
      
      return false;
    }
    return true;
  };

  const validateLocInput = () => {
    if (formData.location === "") {
      return false;
    }
    return true;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="spacer">
          <label htmlFor="term">Search A Delicacy</label>
          <input
            style={{
              border: validateTermInput() ? "2px solid green" : "2px solid red",
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
              border: validateLocInput() ? "2px solid green" : "2px solid red",
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
        <About />
      </form>
    </>
  );
}
