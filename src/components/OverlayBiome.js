import React from "react";
import OverlayHabitat from "./OverlayHabitat";

const OverlayBiome = ({ biome }) => {
  const { biomeName, habitats } = biome;
  const habitatsWithCount = Object.values(habitats).filter((habitat) => {
    return habitat.count !== 0;
  });
  return (
    <details open>
      <summary className="biomeTitle">
        {biomeName.toUpperCase()}
      </summary>
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
    </details>
  );
};

export default OverlayBiome;
