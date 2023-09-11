import React from "react";
import HabitatList from "./HabitatList";

const Habitat = ({ selectedBiome, increment, decrement }) => {
  const { habitats } = selectedBiome;
  return (
    <section>
      <h2>SELECT HABITAT</h2>
      {Object.keys(habitats).map((habitatId) => {
          return (
            <HabitatList
              biomeId={selectedBiome.biomeId}
              habitatId={habitatId} // Make sure to include a unique key when rendering in a loop
              increment={increment}
              decrement={decrement}
              habitat={habitats}
            />
          );
        })
      }
    </section>
  );
};

export default Habitat;
