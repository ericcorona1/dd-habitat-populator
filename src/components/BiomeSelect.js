import React from "react";
import { FaCity } from "@react-icons/all-files/fa/FaCity";
import { GiWaterDrop } from "@react-icons/all-files/gi/GiWaterDrop";
import { GiFallingRocks } from "@react-icons/all-files/gi/GiFallingRocks";
import { GiHighGrass } from "@react-icons/all-files/gi/GiHighGrass";
import { GiPineTree } from "@react-icons/all-files/gi/GiPineTree";
import { GiSnowflake2 } from "@react-icons/all-files/gi/GiSnowflake2";

const BiomeSelect = ({
  highlightBiomeIcon,
  biomeArray,
  selectedBiomeIndex,
  counterValues,
}) => {
  // const biomesWithHabitatValues = {};

  return (
    <div className="button-container">
      {biomeArray.map((biome, index) => {
        // conditional classNames
        const currentBiome = selectedBiomeIndex === index ? "selected" : "";
        const biomesWithHabitatValues = counterValues[index].some(
          (entry) => entry !== 0
        )
          ? "includedBiome"
          : "";
          // console.log(biomesWithHabitatValues);
        let icon;
        switch (index) {
          case 0:
            icon = <GiWaterDrop />;
            break;
          case 1:
            icon = <GiHighGrass />;
            break;
          case 2:
            icon = <GiPineTree />;
            break;
          case 3:
            icon = <GiFallingRocks />;
            break;
          case 4:
            icon = <GiSnowflake2 />;
            break;
          case 5:
            icon = <FaCity />;
            break;
          default:
            icon = <GiWaterDrop />;
        }

        return (
          <button
            onClick={() => highlightBiomeIcon(index)}
            key={index}
            value={biome}
            className={`${currentBiome} ${biomesWithHabitatValues}`}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};

export default BiomeSelect;
