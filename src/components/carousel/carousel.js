import React from "react";
import TinySlider from "tiny-slider-react";

import "./carousel.scss";

const slides = [
  {
    image:
      "https://images.ctfassets.net/b0qgo9rl751g/6oFW6p3Y3fguis3ZNhL6lm/0cc0d6e2eb7178f5f100ea3b520c2497/summer_promo_alt_1.jpg",
    text: "hellooo 1",
  },
  {
    image:
      "https://images.ctfassets.net/b0qgo9rl751g/4A9z7IaaMJ9O9jCIhiQnR2/86256e4aa5d36360a9b432213b9c637f/hp-negative.jpg",
    text: "hellooo 2 ",
  },
  {
    image:
      "https://images.ctfassets.net/b0qgo9rl751g/2wBgZCm3frkaQWDKl1buWd/6717dce653f4540a2bef376937c69091/euro_semi_hero_2.jpg",
    text: "hellooo 3",
  },
];

const loadingImage =
  "data:image/gif;base64,\
  R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  loop: true,
  items: 1,
  gutter: 5,
};

export const Carousel = () => {
  return (
    <div>
      <TinySlider settings={settings}>
        {slides.map((slide) => (
          <div key={slide.index} style={{ position: "relative" }}>
            <h3>{slide.text}</h3>
            <img
              className="tns-lazy-img carousel__image"
              src={loadingImage}
              data-src={slide.image}
              alt=""
            />
          </div>
        ))}
      </TinySlider>
    </div>
  );
};

export default Carousel;
