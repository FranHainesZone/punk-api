import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./AccordionItem.scss";

const AccordionItem = (props) => {
  const {
    name,
    id,
    toggleAccordionItem,
    activeBeer,
    image_url: image,
    tagline,
    first_brewed: firstBrewed,
    food_pairing: foodPairing,
    description,
  } = props;

  // if activeBeer state matches ID, add 'active' class and set content height
  const active = activeBeer === id ? "active" : "";
  const heightVal = activeBeer === id ? "400px" : "0px";

  return (
    <div className="accordion-item">
      <button
        className={`accordion-item__header ${active}`}
        // onClick, call toggleAccordionItem and pass in item ID
        onClick={() => toggleAccordionItem(id)}
      >
        <div className="accordion-item__header-text accordion-item__text--medium accordion-item__text--bold">
          {name}
          {/* add "active" class to icon for onClick animation */}
          <div className={`accordion-item__icon ${active}`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </button>
      <div
        style={{ maxHeight: `${heightVal}` }}
        className="accordion-item__content"
      >
        <div className="accordion-item__image-container">
          <img src={image} alt={name} className="accordion-item__image-item" />
        </div>
        <div className="accordion-item__text-container">
          <div className="accordion-item__text--large accordion-item__text--bold">
            {tagline}
          </div>
          <div className="accordion-item__text--small">{description}</div>
          <div className="accordion-item__text--small">
            <span className="accordion-item__text--bold">
              Tastes even better when paired with:
            </span>
            <ul className="accordion-item__list-container">
              {/* Map over foodPairing array and pass to list element */}
              {foodPairing.map((foodItem) => (
                <li className="accordion-item__list-item">{foodItem}</li>
              ))}
            </ul>
          </div>
          <div className="accordion-item__text--small">
            <span className="accordion-item__text--bold">First Brewed: </span>
            {firstBrewed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
