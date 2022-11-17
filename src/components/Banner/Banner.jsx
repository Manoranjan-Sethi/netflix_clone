import React, { useState, useEffect } from "react";
import "./Banner.css";
import requests from "./../Fetch/Requests";
import axios from "../Fetch/axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  //function to minimize the test description
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://4.bp.blogspot.com/-AgxMvbuH1eg/W59f9Tts4II/AAAAAAAAABw/USypBB_MkZooZ1REGZdAVF7FysJFlzcygCLcBGAs/s1600/netflix-banner-min.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contains">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            "Test Descriptio Loremip sumdo lorsitamet consectetur adipisicing elit Similique eos aliquam hic reiciendis nulla veritatis reprehenderit necessitatibus assumenda totam sint fugiat sed ad et magnam quas delectus minima animi officiis blanditiis asperiores doloreSequi reiciendis qui adipisci repellendus quod ea labore quas quo veniam quia expedita nam fuga maxime quae illum amet eius",
            80
          )}
        </h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
