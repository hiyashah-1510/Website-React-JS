import React from "react";
import about from '../assets/about.png';

const ProductSection = () => {
  return (
    <section className="container py-5 my-5">
      <div className="row align-items-center about">
        <div className="col-md-6">
          <h2 className="display-6 fs-1 fw-bold mb-3">Leather Ladies Bag</h2>

          <p className="mb-1">
            <span className="text-decoration-line-through text-muted fs-5">
              $330.00
            </span>
            &nbsp;
            <span className="text-orange fs-4 fw-semibold">$230.00</span>
          </p>

          <p className="text-muted mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button className="btn shop-btn px-4 py-2 mt-3">
            SHOP NOW
          </button>
        </div>

        <div className="col-md-6 d-flex gap-3 justify-content-center">
          <img src={about} alt="" />
        </div>

      </div>
    </section>
  );
};

export default ProductSection;