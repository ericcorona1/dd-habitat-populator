import React from "react";
const BiomeSelect = ({
  selectedBiome,
  biomeData,
  highlightBiomeIcon,
  icon,
  biomeId,
}) => {
  const currentBiome =
    selectedBiome.biomeId === parseInt(biomeId) ? "selected" : "";
  const habitatObj = biomeData[biomeId].habitats;
  const hasHabitatValues = Object.values(habitatObj).some(
    (habitat) => habitat.count !== 0
  )
    ? "includedBiome"
    : "";

  return (
      <button
        onClick={() => {
          highlightBiomeIcon(biomeId);
        }}
        key={biomeId}
        value={biomeId}
        className="button-container"
      >
        {icon}
      </button>
  );
};

export default BiomeSelect;
