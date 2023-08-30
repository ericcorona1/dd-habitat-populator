import React from "react";
import HabitatList from "./HabitatList";

const Habitat = ({ habitats, counterValues, increment, decrement }) => {
  return (
    <section>
      <h2>SELECT HABITAT</h2>
      <HabitatList
        habitats={habitats}
        counterValues={counterValues}
        increment={increment}
        decrement={decrement}
      />
    </section>
  );
};

export default Habitat;
