import React, { useState } from "react";
import { FaCity } from "@react-icons/all-files/fa/FaCity";
import { GiWaterDrop } from "@react-icons/all-files/gi/GiWaterDrop";
import { GiFallingRocks } from "@react-icons/all-files/gi/GiFallingRocks";
import { GiHighGrass } from "@react-icons/all-files/gi/GiHighGrass";
import { GiPineTree } from "@react-icons/all-files/gi/GiPineTree";
import { GiSnowflake2 } from "@react-icons/all-files/gi/GiSnowflake2";

const BiomeSelect = ({ toggleBiome, highlightIcon }) => {
  return (
    <div className="button-container">
      <button>
        <GiWaterDrop onMouseDown={toggleBiome} onClick={highlightIcon}/>
      </button>
      <button>
        <FaCity onMouseDown={toggleBiome} onClick={highlightIcon}/>
      </button>
      <button>
        <GiFallingRocks onMouseDown={toggleBiome} onClick={highlightIcon}/>
      </button>
      <button>
        <GiHighGrass onMouseDown={toggleBiome} onClick={highlightIcon}/>
      </button>
      <button>
        <GiPineTree onMouseDown={toggleBiome} onClick={highlightIcon}/>
      </button>
      <button>
        <GiSnowflake2 onMouseDown={toggleBiome} onClick={highlightIcon}/>
      </button>
    </div>
  );
};

export default BiomeSelect;
