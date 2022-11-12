import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transnav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transnav);
    return () => window.removeEventListener("scroll", transnav);
  }, []);

  return (
    <div className={`nav ${show && ".nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://th.bing.com/th/id/OIP.Fn_JfIeC12rS1weLLJxdyQHaHa?pid=ImgDet&rs=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
