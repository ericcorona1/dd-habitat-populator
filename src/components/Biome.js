import React from "react";
import BiomeSelect from "./BiomeSelect";

const Biome = ({
  selectedBiomeDescription,
  biomeArray,
  selectedBiomeId,
  biomeData,
}) => {
  return (
    <section>
      <h2>SELECT BIOME</h2>
      {/* pass the onHold method and onClick method */}
      {biomeArray.map((biome) => {
        <BiomeSelect
          biomeArray={biomeArray}
          selectedBiomeId={selectedBiomeId}
          biomeData={biomeData}
        />;
      })}
      <p>{selectedBiomeDescription}</p>
    </section>
  );
};

export default Biome;
