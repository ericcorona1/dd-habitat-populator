import React from "react";
import HabitatList from "./HabitatList";

const Habitat = ({ habitats, counterValues, increment, decrement, trackHabitatCounters }) => {
  return (
    <section>
      <h2>SELECT HABITAT</h2>
      <HabitatList
        habitats={habitats}
        counterValues={counterValues}
        increment={increment}
        decrement={decrement}
        trackHabitatCounters={trackHabitatCounters}
      />
    </section>
  );
};

export default Habitat;
