import React from "react";
import OverlayHabitat from "./OverlayHabitat";

const OverlayBiome = ({ biome }) => {
  const { biomeName, habitats } = biome;
  const habitatsWithCount = Object.values(habitats).filter(habitat => {
    return habitat.count !== 0
  })
  return (
    <div>
      <h2>{biomeName.toUpperCase()}</h2>
      {habitatsWithCount.map((habitat) => {
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
