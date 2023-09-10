import React from "react";
import { FaCity } from "@react-icons/all-files/fa/FaCity";
import { GiWaterDrop } from "@react-icons/all-files/gi/GiWaterDrop";
import { GiFallingRocks } from "@react-icons/all-files/gi/GiFallingRocks";
import { GiHighGrass } from "@react-icons/all-files/gi/GiHighGrass";
import { GiPineTree } from "@react-icons/all-files/gi/GiPineTree";
import { GiSnowflake2 } from "@react-icons/all-files/gi/GiSnowflake2";

const BiomeSelect = ({
  biomeArray,
  selectedBiomeId,
  biomeData,
}) => {
  const highlightBiomeIcon = (biomeId) => {
    setSelectedBiomeId(biomeId);
  };
  return (
    <div className="button-container">
      {biomeArray.map((biome, index) => {
        const biomeId = parseInt(biome);
        const currentBiome = selectedBiomeId === biomeId ? "selected" : "";
        // this needs to use id
        const hasHabitatValues = biomeData[biomeId].habitats.some(
          (habitat) => habitat.count !== 0
        )
          ? "includedBiome"
          : "";

        let icon;
        switch (biomeId) {
          case 1:
            icon = <GiWaterDrop />;
            break;
          case 2:
            icon = <GiHighGrass />;
            break;
          case 3:
            icon = <GiPineTree />;
            break;
          case 4:
            icon = <GiFallingRocks />;
            break;
          case 5:
            icon = <GiSnowflake2 />;
            break;
          case 6:
            icon = <FaCity />;
            break;
          default:
            icon = <GiWaterDrop />;
        }
        return (
          <button
            onClick={() => highlightBiomeIcon(biomeId)}
            key={index}
            value={biomeId}
            className={`${currentBiome} ${hasHabitatValues}`}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};

export default BiomeSelect;
