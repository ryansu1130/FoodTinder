import "./Form.css";
import { useState } from "react";
import About from "./About";
export default function Form({ newSearch, setCount }) {
  const [formData, setFormData] = useState({ term: null, location: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.term === null || formData.location === null){
      return alert("Must Fill Out Form")
    }
    newSearch(formData.term, formData.location);
    setCount(0)
  };

  const handleTermChange = (e) => {
    setFormData({ ...formData, term: e.target.value });
  };

  const handleLocationChange = (e) => {
    setFormData({ ...formData, location: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="spacer">
          <label htmlFor="term">Search A Delicacy</label>
          <input
            onChange={handleTermChange}
            type="text"
            name="term"
            id="term"
            placeholder="Pho Noddles"
          />
        </div>
        <div className="spacer">
          <label htmlFor="location">Location</label>
          <input
            onChange={handleLocationChange}
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
