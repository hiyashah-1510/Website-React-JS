import React from "react";
import img1Top from "../assets/img1Top.webp";
import img2Top from "../assets/img2Top.webp";

function Offer() {
  return (
    <>
      <div className="container py-5">
        <div className="row g-3">
          {/* Banner 1 */}
          <div className="col-md-6">
            <div className="banner-card position-relative overflow-hidden rounded">
              <img src={img1Top} alt="banner 1" className="banner-img w-100" />
            </div>
          </div>

          {/* Banner 2 */}
          <div className="col-md-6">
            <div className="banner-card position-relative overflow-hidden rounded">
              <img src={img2Top} alt="banner 2" className="banner-img w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
