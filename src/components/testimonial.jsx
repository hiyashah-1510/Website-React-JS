import React from "react";
import testimonial1 from "../assets/testimonial1.webp";

function Testimonial() {
  return (
    <>
      <div className="testimonial-wrapper">
        <h2 className="testimonial-title">Testimonials</h2>
        <p className="testimonial-subtitle">What they say</p>

        {/* Image */}
        <div className="testimonial-image">
          <img src={testimonial1} alt="client" />
        </div>

        {/* Text */}
        <p className="testimonial-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco cons dipiscing usmod.
        </p>

        {/* Name */}
        <h5 className="testimonial-name">LINDSY NILOMS</h5>
        <p className="testimonial-role">CEO</p>
      </div>
    </>
  );
}

export default Testimonial;