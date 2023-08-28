import React from "react";
import HabitatList from "./HabitatList";

const Habitat = ({ habitats, counterValue }) => {
  return (
    <section>
      <h2>SELECT HABITAT</h2>
      <HabitatList habitats={habitats} counterValue={counterValue} />
    </section>
  );
};

export default Habitat;
