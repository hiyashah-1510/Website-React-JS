import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import home2Slide1 from "../assets/home2Slide1.jpg";
import home2Slide2 from "../assets/home2Slide2.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <Carousel
      activeIndex={index}
      onSelect={(i) => setIndex(i)}
      interval={3000}
      fade
      indicators={true}
      controls={true}
    >
      {/* SLIDE 1 */}
      <Carousel.Item>
        <img className="d-block w-100" src={home2Slide1} alt="Slide 1" />

        <Carousel.Caption className="text-start caption-right">
          <h1 className="display-5 fw-semibold">Leather ladies bag collection 2023.</h1>
          <p className="mb-4">
            Designer Jewellery Necklaces–Bracelets–Earings
          </p>
          <button className="btn-custom">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* SLIDE 2 */}
      <Carousel.Item>
        <img className="d-block w-100" src={home2Slide2} alt="Slide 2" />

        <Carousel.Caption className="text-start caption-right">
          <h1 className="display-4 fw-semibold">Leather ladies bag collection 2023.</h1>
          <p className="mb-4">
            Designer Jewellery Necklaces–Bracelets–Earings
          </p>
          <button className="btn-custom">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;