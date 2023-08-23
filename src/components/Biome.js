import React from "react";
import BiomeSelect from "./BiomeSelect";

const Biome = () => {
  return (
    <section>
      <h2>SELECT BIOME</h2>
      {/* pass the onHold method and onClick method */}
      <BiomeSelect toggleBiome={toggleBiome} highlightIcon={highlightIcon}/>
      {/* <p>{biomeDescription}</p> */}
    </section>
  );
};

export default Biome;
