import React, { useState } from "react";
import { FaCity } from "@react-icons/all-files/fa/FaCity";
import { GiWaterDrop } from "@react-icons/all-files/gi/GiWaterDrop";
import { GiFallingRocks } from "@react-icons/all-files/gi/GiFallingRocks";
import { GiHighGrass } from "@react-icons/all-files/gi/GiHighGrass";
import { GiPineTree } from "@react-icons/all-files/gi/GiPineTree";
import { GiSnowflake2 } from "@react-icons/all-files/gi/GiSnowflake2";

const BiomeSelect = ({ biome }) => {
  return (
    <div className="button-container">
      <button>
        <GiWaterDrop />
      </button>
      <button>
        <FaCity />
      </button>
      <button>
        <GiFallingRocks />
      </button>
      <button>
        <GiHighGrass />
      </button>
      <button>
        <GiPineTree />
      </button>
      <button>
        <GiSnowflake2 />
      </button>
    </div>
  );
};

export default BiomeSelect;
