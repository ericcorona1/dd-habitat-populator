import React from "react";
import OverlayHabitat from "./OverlayHabitat";

const OverlayBiome = ({ biome }) => {
  const { biomeName, habitats } = biome;
  return (
    <div>
      <h2>{biomeName.toUpperCase()}</h2>
      {Object.values(habitats).map((habitat) => {
        return (
          <OverlayHabitat
            key={habitat.habitatId}
            count={habitat.count}
            habitatName={habitat.habitatName}
            pokemons={habitat.pokemon}
          />
        );
      })}
    </div>
  );
};

export default OverlayBiome;
