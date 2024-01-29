import "./App.css";
import { useState } from "react";
import axios from "axios";
import Interested from "./Interested";
import Form from "./Form";
import Display from "./Display";

//make the init data img as an instruction page that tell people to use cors
//then tell them to seach something before theuy shuld see business
//also disable the btns on the init run,only enable when a search is made
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
  let newData = null;
  const [count, setCount] = useState(0);
  const [likedBusinessArr, setlikedBusinessArr] = useState([]);
  let numBusinesses = myData.businesses.length;

  const handleLikeClick = () => {
    setlikedBusinessArr([...likedBusinessArr, myData.businesses[count].name]);
    console.log(likedBusinessArr);
    if (count + 1 < numBusinesses) {
      setCount(count + 1);
    } else setCount(0);
  };

  const handlePassClick = () => {
    if (count + 1 < numBusinesses) {
      setCount(count + 1);
    } else setCount(0);
  };

  async function newSearch(delicacy = "delis", location = "happy_valley,or") {
    setCount(0);
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

    try {
      const { data } = await axios.request(options);
      myData = data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1 id="title">Food Tinder</h1>
      <div id="container">
        <Interested likedBusinessArr={likedBusinessArr} />
        <Form newSearch={newSearch} setCount={setCount} />
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
