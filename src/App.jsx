import "./App.css";
import Counter from "./Counter"
import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.yelp.com/v3/businesses/search",
  params: { term: "delis", latitude: "37.786882", longitude: "-122.399972" },
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer GNk6xUk8XqpSs77bu_wHvJPGoBopXvwub14aVhTfo14ZP75vTQHGWSwE4nsbyb8vvzncLZ-w0k0fZTRjkCWBEqe3z-VfoUyfIRrPJET7ZdQ874_BIPtIPLJ3UGCXZXYx",
  },
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}

function App() {
  return (
    <>
      <h1>Test Run FoodTinder</h1>
      <Counter />
    </>
  );
}

export default App;
