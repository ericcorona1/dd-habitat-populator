import React from "react";
import OverlayBiome from "./OverlayBiome";

const Overlay = ({ biomeData, openModal, closeModal, displayModal }) => {
  const biomesWithCount = Object.values(biomeData).filter((biome) => {
    const habitats = biome.habitats;
    return Object.values(habitats).some((habitat) => habitat.count !== 0);
  });
  return (
    <div className="generateBtn">
      <button onClick={openModal}>Generate</button>
      {displayModal && (
        <dialog className="overlay" open>
          <div className="closeBtnWrapper">
            <button onClick={closeModal} className="overlayCloseBtn">
              Close
            </button>
          </div>
          {biomesWithCount.map((biome) => {
            return <OverlayBiome key={biome.biomeId} biome={biome} />;
          })}
          <div className="closeBtnWrapper">
            <button onClick={closeModal} className="overlayCloseBtn">
              Close
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Overlay;
