import React from "react";
import "./Banner.css";

function Banner() {
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
        <div className="banner_button">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">Test Description</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
