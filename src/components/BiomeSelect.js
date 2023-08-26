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
      <button>
        <GiWaterDrop
          onMouseDown={toggleBiome}
          onClick={highlightBiomeIcon}
          value="aquatic"
        />
      </button>
      <button>
        <FaCity
          onMouseDown={toggleBiome}
          onClick={highlightBiomeIcon}
          value="urban"
        />
      </button>
      <button>
        <GiFallingRocks
          onMouseDown={toggleBiome}
          onClick={highlightBiomeIcon}
          value="desert"
        />
      </button>
      <button>
        <GiHighGrass
          onMouseDown={toggleBiome}
          onClick={highlightBiomeIcon}
          value="grassland"
        />
      </button>
      <button>
        <GiPineTree
          onMouseDown={toggleBiome}
          onClick={highlightBiomeIcon}
          value="forest"
        />
      </button>
      <button>
        <GiSnowflake2
          onMouseDown={toggleBiome}
          onClick={highlightBiomeIcon}
          value="tundra"
        />
      </button>
    </div>
  );
};

export default BiomeSelect;
