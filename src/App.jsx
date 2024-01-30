import "./App.css";
import { useState } from "react";
import axios from "axios";
import Interested from "./Interested";
import Form from "./Form";
import Display from "./Display";

// Items Left To Do
// 1. fix interested filling up overflowing at 15-ish businesses
// 2. Add a delete icon and a clear all on the interested section
// 3. Not urgent: look into auto complete from yelp api on form section
// 4. Fix Display section business details overflowing
// 5. Animate buttons for form page and display page
// 6. Enable mobile version using media queries


//Init data on enable CORS
let myData = {
  businesses: [
    {
      name: "Enable CORS",
      image_url: "https://simplelocalize.io/blog/what-is-cors.jpg",
      url: "https://cors-anywhere.herokuapp.com/corsdemo",
      categories: [{ title: "<- Click CORS Link" }],
    },
  ],
  total: 163,
};

export default function App() {
  //Use to keep count of businesses
  const [count, setCount] = useState(0);

  //An array to keep track of liked businesses
  const [likedBusinessArr, setlikedBusinessArr] = useState([]);
  let numBusinesses = myData.businesses.length;

  //Handles liked businesses
  const handleLikeClick = () => {
    //Go to the next business if not then loop through past businesses
    if (count + 1 < numBusinesses) {
      setCount(count + 1);
      //Save businesses to the inerested list
      setlikedBusinessArr([...likedBusinessArr, myData.businesses[count].name]);
    } else setCount(0);
  };

  //Handle passed businesses if not then loop through past businesses
  const handlePassClick = () => {
    //Go to the next business
    if (count + 1 < numBusinesses) {
      setCount(count + 1);
    } else setCount(0);
  };

  //Calls the YELP API based on user input data
  async function newSearch(delicacy = "delis", location = "happy_valley,or") {
    //Header
    const options = {
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search",
      params: { term: delicacy, location: location },
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
      myData = data;
      setCount(count + 1);
    } catch (error) {
      alert("Try Again: " + error.message);
      console.error(error.message);
    }
  }

  //JSX redering
  return (
    <>
      <h1 id="title">Food Tinder</h1>
      <div id="container">
        <Interested likedBusinessArr={likedBusinessArr} />
        <Form newSearch={newSearch} />
        <Display
          data={myData}
          count={count}
          handleLikeClick={handleLikeClick}
          handlePassClick={handlePassClick}
        />
      </div>
    </>
  );
}
