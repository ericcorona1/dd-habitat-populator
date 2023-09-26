import React, { useRef } from "react";
import OverlayBiome from "./OverlayBiome";

const Overlay = ({ biomeData }) => {
  const dialogRef = useRef(null);

  const openModal = () => {
    // Access the DOM element using useRef and call showModal()
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    // Access the DOM element using useRef and call close()
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const biomesWithCount = Object.values(biomeData).filter((biome) => {
    const habitats = biome.habitats;
    return Object.values(habitats).some((habitat) => habitat.count !== 0);
  });

  return (
    <div>
      <div className="generateBtn">
        <button onClick={openModal}>Generate</button>
      </div>
      <dialog ref={dialogRef} className="overlay">
        <div className="closeBtnWrapper">
          <button onClick={closeModal} className="overlayCloseBtn">
            Close
          </button>
        </div>
        {biomesWithCount.map((biome) => {
          return <OverlayBiome key={biome.biomeId} biome={biome} />;
        })}
        {/* <div className="closeBtnWrapper">
          <button onClick={closeModal} className="overlayCloseBtn">
            Close
          </button>
        </div> */}
      </dialog>
    </div>
  );
};

export default Overlay;
