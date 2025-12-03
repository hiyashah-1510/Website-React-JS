import React from "react";
import banner2 from "../assets/banner2.webp";

function Banner() {
  return (
    <>
      <div className="banner-wrapper">
        <img src={banner2} alt="Banner" className="banner-img" />
      </div>
    </>
  );
}

export default Banner;