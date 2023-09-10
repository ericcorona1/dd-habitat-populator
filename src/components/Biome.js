import React from "react";
import BiomeSelect from "./BiomeSelect";

const Biome = ({
  biomeArray,
  selectedBiomeId,
  biomeData,
  higlightBiomeIcon
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
          higlightBiomeIcon={higlightBiomeIcon}
        />;
      })}
      <p>{biomeData[selectedBiomeId].description}</p>
    </section>
  );
};

export default Biome;
