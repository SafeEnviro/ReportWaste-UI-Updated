import "react-multi-carousel/lib/styles.css";
import "../App.css";
import UAParser from "ua-parser-js";
import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import service1 from "../asset/img/service1.jpg";
import service2 from "../asset/img/service2.jpg";
import service3 from "../asset/img/service3.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};
const images = [
  service1,
  service2,
  service3,
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel 
      partialVisbility
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 5).map((image, i) => {
        return (
            <div key={i+"card"} className="carousel-card shadow">
                <img
                    alt={image}
                    draggable={false}
                    style={{ width: "100%", height: "100%" }}
                    src={image}
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum mattis malesuada. Proin rutrum mattis malesuada. pe ne aperem ipsum dolor sit amet.
                </p>
            </div>
        );
      })}
    </Carousel>
  );
};

const MultiCarousel = ({ deviceType }) => {
  return (
    <Fragment>
        <Simple deviceType={deviceType} />
    </Fragment>
  );
};
MultiCarousel.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["User-Agent"];
  } else {
    userAgent = navigator.userAgentData;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
export default MultiCarousel;
