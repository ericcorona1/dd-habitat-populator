import React from "react";
import BiomeSelect from "./BiomeSelect";

const Biome = ({ selectedBiomeDescription }) => {
  return (
    <section>
      <h2>SELECT BIOME</h2>
      {/* pass the onHold method and onClick method */}
      <BiomeSelect toggleBiome={toggleBiome} highlightBiomeIcon={highlightBiomeIcon} />
      <p>{selectedBiomeDescription}</p>
    </section>
  );
};

export default Biome;
