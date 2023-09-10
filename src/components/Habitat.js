import React from "react";
import HabitatList from "./HabitatList";

const Habitat = ({
  habitats,
  counterValues,
  selectedBiomeId,
}) => {
  return (
    <section>
      <h2>SELECT HABITAT</h2>
      <HabitatList
        habitats={habitats}
        counterValues={counterValues}
        increment={increment}
        decrement={decrement}
        selectedBiomeId={selectedBiomeId}
      />
    </section>
  );
};

export default Habitat;
