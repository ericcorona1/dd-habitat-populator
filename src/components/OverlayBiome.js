import React from "react";
import OverlayHabitat from "./OverlayHabitat";

const OverlayBiome = ({ biome, toggleBiomeVisibility }) => {
  const { biomeName, habitats } = biome;
  const habitatsWithCount = Object.values(habitats).filter((habitat) => {
    return habitat.count !== 0;
  });
  return (
    <div>
      <h2 style={{ display: "inline-block" }}>{biomeName.toUpperCase()}</h2>
      <button
        style={{ display: "inline-block" }}
        onClick={() => {
          toggleBiomeVisibility(biome.biomeId);
        }}
      >
        &#9662;
      </button>
      {habitatsWithCount.map((habitat) => {
        return (
          <OverlayHabitat
            key={habitat.habitatId}
            count={habitat.count}
            habitatName={habitat.habitatName}
            pokemons={habitat.pokemon}
            biomeVisible={biome.visible}
          />
        );
      })}
    </div>
  );
};

export default OverlayBiome;
