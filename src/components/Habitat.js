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
      {habitatData.map((habitat) => {
      <HabitatList
        habitats={habitats}
        counterValues={counterValues}
        selectedBiomeId={selectedBiomeId}
      />
      })}
    </section>
  );
};

export default Habitat;
