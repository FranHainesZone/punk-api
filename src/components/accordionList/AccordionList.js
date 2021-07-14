import React, { useEffect, useState } from "react";

import { AccordionItem } from "../accordionItem";
import "./accordionList.scss";

export const AccordionList = () => {
  // Set initial state - 'beers' state will hold response data
  const [beers, setBeers] = useState([]);
  // 'activeBeer' state will differentiate between selected beer
  const [activeBeer, setActiveBeer] = useState(null);

  // Function is passed to child component
  const toggleAccordionItem = (id) => {
    if (id === activeBeer) {
      // if you're clicking on the same beer again, close all accordions by setting activeBeer to null
      setActiveBeer(null);
    } else {
      // Open new beer accordion tab
      setActiveBeer(id);
    }
  };

  const fetchBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      // Set returned data as beers state
      .then((data) => setBeers(data))
      .catch((error) => console.log(error));
  };

  // fetch data when component loads
  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <section>
      <div className="accordion-list__container">
        <h3 className="accordion-list__headline--large">Brewdog Beers</h3>
        {/* Map over returned data and pass to child component */}
        {beers.map((beer, id) => (
          <AccordionItem
            key={id}
            toggleAccordionItem={toggleAccordionItem}
            activeBeer={activeBeer}
            {...beer}
          />
        ))}
      </div>
    </section>
  );
};
