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
      // Reset activeBeer state to 'null' if val is same as ID
      setActiveBeer(null);
    } else {
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
        <h3 class="accordion-list__headline--large">
          Learn more about our Punk IPAs
        </h3>
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
