import "./App.css";
import Counter from "./Counter";
import axios from "axios";
import myData from "./data.json"
import Interested from "./Interested";
import Form from "./Form";
import About from "./About";
import Display from "./Display";

// const options = {
//   method: "GET",
//   url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search",
//   params: { term: "delis", location: "happy_valley,or" },
//   withCredentials: false,
//   headers: {
//     Accept: "application/json",
//     Authorization:
//       "Bearer GNk6xUk8XqpSs77bu_wHvJPGoBopXvwub14aVhTfo14ZP75vTQHGWSwE4nsbyb8vvzncLZ-w0k0fZTRjkCWBEqe3z-VfoUyfIRrPJET7ZdQ874_BIPtIPLJ3UGCXZXYx",
//   },
// };

// let result = null;

// try {
//   const { data } = await axios.request(options);
//   result = data;
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }

function App() {
  return (
    <>
      <h1 id="title">Food Tinder</h1>
      <div id="container">
        <Interested />
        <Form />
        <Display />
      </div>
    </>
  );
}

export default App;
