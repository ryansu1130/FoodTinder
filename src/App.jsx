import "./App.css";
import Counter from "./Counter";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search",
  params: { term: "delis", latitude: "37.786882", longitude: "-122.399972" },
  withCredentials: false,
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer GNk6xUk8XqpSs77bu_wHvJPGoBopXvwub14aVhTfo14ZP75vTQHGWSwE4nsbyb8vvzncLZ-w0k0fZTRjkCWBEqe3z-VfoUyfIRrPJET7ZdQ874_BIPtIPLJ3UGCXZXYx",
  },
};

let result = null;

try {
  const { data } = await axios.request(options);
  result = data;
  console.log(data);
} catch (error) {
  console.error(error);
}

function App() {
  console.log(result)
  return (
    <>
      <h1>Test Run FoodTinder</h1>
      <Counter />
      <Counter initCount={5} />
      <h2>{result.total}</h2>
      <h3>{result.businesses[12].rating}</h3>
    </>
  );
}

export default App;
