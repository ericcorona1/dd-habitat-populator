import React from "react";
import { useState } from "react";
import OverlayBiome from "./OverlayBiome";

const Overlay = ({biomeData, dataWithPokemon}) => {
  const { habitats } = dataWithPokemon;
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = ({ pokemon }) => {
    setModalOpen("open");
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>Generate</button>
      {modalOpen && (
        <dialog open>
          <button onClick={closeModal}>Close</button>
          {dataWithPokemon.map((biome) => {
            <OverlayBiome
              key={biome.biomeId}
              biome={biome}
              habitats={habitats}
            />;
          })}
        </dialog>
      )}
    </div>
  );
};

export default Overlay;
