import React from "react";
import HabitatList from "./HabitatList";

const Habitat = ({
  habitats,
  counterValues,
  increment,
  decrement,
  selectedBiomeIndex,
}) => {
  return (
    <section>
      <h2>SELECT HABITAT</h2>
      <HabitatList
        habitats={habitats}
        counterValues={counterValues}
        increment={increment}
        decrement={decrement}
        selectedBiomeIndex={selectedBiomeIndex}
      />
    </section>
  );
};

export default Habitat;
