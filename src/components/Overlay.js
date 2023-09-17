import React from "react";
import OverlayBiome from "./OverlayBiome";

const Overlay = ({ biomeData, openModal, closeModal, displayModal }) => {
  return (
    <div className="generateBtn">
      <button onClick={openModal}>Generate</button>
      {displayModal && (
        <dialog className="overlay"open>
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
