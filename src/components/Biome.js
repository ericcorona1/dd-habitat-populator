import React from "react";
import BiomeSelect from "./BiomeSelect";
import { FaCity } from "@react-icons/all-files/fa/FaCity";
import { GiWaterDrop } from "@react-icons/all-files/gi/GiWaterDrop";
import { GiFallingRocks } from "@react-icons/all-files/gi/GiFallingRocks";
import { GiHighGrass } from "@react-icons/all-files/gi/GiHighGrass";
import { GiPineTree } from "@react-icons/all-files/gi/GiPineTree";
import { GiSnowflake2 } from "@react-icons/all-files/gi/GiSnowflake2";

const Biome = ({ selectedBiome, biomeData, highlightBiomeIcon }) => {
  return (
    <section className="biome">
      <h2>SELECT BIOME</h2>
      <div className="allBtns">
      {Object.keys(biomeData).map((biomeId) => {
        let icon;
        switch (biomeId) {
          case "1":
            icon = <GiWaterDrop />;
            break;
            case "2":
              icon = <GiHighGrass />;
              break;
              case "3":
                icon = <GiPineTree />;
                break;
                case "4":
                  icon = <GiFallingRocks />;
            break;
            case "5":
              icon = <GiSnowflake2 />;
              break;
              case "6":
                icon = <FaCity />;
                break;
                default:
                  icon = <GiWaterDrop />;
                }
                return (
                  <BiomeSelect
                  selectedBiome={selectedBiome}
                  biomeData={biomeData}
                  highlightBiomeIcon={highlightBiomeIcon}
                  icon={icon}
                  biomeId={biomeId}
                  />
        );
      })}
      </div>
      <h3>{selectedBiome.biomeName.toUpperCase()}</h3>
      <p>{selectedBiome.description}</p>
    </section>
  );
};

export default Biome;
