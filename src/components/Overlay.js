import React from "react";
import OverlayBiome from "./OverlayBiome";

const Overlay = ({
  biomeData,
  openModal,
  closeModal,
  displayModal,
  toggleBiomeVisibility,
}) => {
  const biomesWithCount = Object.values(biomeData).filter((biome) => {
    const habitats = biome.habitats;
    return Object.values(habitats).some((habitat) => habitat.count !== 0);
  });
  return (
    <div className="generateBtn">
      <button onClick={openModal}>Generate</button>
      {displayModal && (
        <dialog className="overlay" open>
          <button onClick={closeModal}>Close</button>
          {biomesWithCount.map((biome) => {
            return (
              <OverlayBiome
                key={biome.biomeId}
                biome={biome}
                toggleBiomeVisibility={toggleBiomeVisibility}
              />
            );
          })}
        </dialog>
      )}
    </div>
  );
};

export default Overlay;
