import React from "react";
import HabitatList from "./HabitatList";

const Habitat = ({ habitats }) => {
  return (
    <section>
      <h2>SELECT HABITAT</h2>
      <HabitatList habitats={habitats} />
    </section>
  );
};

export default Habitat;
