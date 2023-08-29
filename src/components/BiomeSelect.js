import React from "react";
import { FaCity } from "@react-icons/all-files/fa/FaCity";
import { GiWaterDrop } from "@react-icons/all-files/gi/GiWaterDrop";
import { GiFallingRocks } from "@react-icons/all-files/gi/GiFallingRocks";
import { GiHighGrass } from "@react-icons/all-files/gi/GiHighGrass";
import { GiPineTree } from "@react-icons/all-files/gi/GiPineTree";
import { GiSnowflake2 } from "@react-icons/all-files/gi/GiSnowflake2";

const BiomeSelect = ({ toggleBiome, highlightBiomeIcon }) => {
  return (
    <div className="button-container">
      <button onClick={highlightBiomeIcon} value="aquatic">
        <GiWaterDrop />
      </button>
      <button onClick={highlightBiomeIcon} value="urban">
        <FaCity />
      </button>
      <button onClick={highlightBiomeIcon} value="desert">
        <GiFallingRocks />
      </button>
      <button onClick={highlightBiomeIcon} value="grassland">
        <GiHighGrass />
      </button>
      <button onClick={highlightBiomeIcon} value="forest">
        <GiPineTree />
      </button>
      <button onClick={highlightBiomeIcon} value="tundra">
        <GiSnowflake2 />
      </button>
    </div>
  );
};

export default BiomeSelect;
