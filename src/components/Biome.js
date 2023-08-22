import React from "react";
import BiomeSelect from "./BiomeSelect";

const Biome = () => {
  return (
    <section>
      <h2>SELECT BIOME</h2>
      {/* This is where the input buttons will go */}
      <BiomeSelect />
      {/* <p>{biomeDescription}</p> */}
    </section>
  );
};

export default Biome;
