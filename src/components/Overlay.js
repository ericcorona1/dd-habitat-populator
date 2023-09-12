import React from "react";
import OverlayBiome from "./OverlayBiome";

const Overlay = ({ biomeData, openModal, closeModal, displayModal, hasShuffled }) => {
  return (
    <div>
      <button onClick={openModal}>Generate</button>
      {displayModal && (
        <dialog open>
          <button onClick={closeModal}>Close</button>
          {Object.values(biomeData).map((biome) => {
            return <OverlayBiome key={biome.biomeId} biome={biome} />;
          })}
        </dialog>
      )}
    </div>
  );
};

export default Overlay;
