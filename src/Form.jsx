import "./Form.css";
import About from "./About";
export default function Form() {
  return (
    <>
      <form>
        <div className="spacer">
          <label htmlFor="term">Search A Delicacy</label>
          <input type="text" name="term" id="term" placeholder="Pho Noddles" />
        </div>
        <div className="spacer">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Portland,OR"
          />
        </div>
        <button id="submitBtn" type="submit">Show Me Results</button>
        <About />
      </form>
    </>
  );
}
