import React from "react";
import BiomeSelect from "./BiomeSelect";

const Biome = ({
  selectedBiomeDescription,
  highlightBiomeIcon,
  biomeArray,
  selectedBiomeIndex,
  counterValues,
}) => {
  return (
    <section>
      <h2>SELECT BIOME</h2>
      {/* pass the onHold method and onClick method */}
      <BiomeSelect
        highlightBiomeIcon={highlightBiomeIcon}
        biomeArray={biomeArray}
        selectedBiomeIndex={selectedBiomeIndex}
        counterValues={counterValues}
      />
      <p>{selectedBiomeDescription}</p>
    </section>
  );
};

export default Biome;
