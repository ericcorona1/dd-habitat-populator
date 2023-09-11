import React from "react";
const BiomeSelect = ({
  selectedBiome,
  biomeData,
  highlightBiomeIcon,
  icon,
  biomeId,
}) => {
  const currentBiome = selectedBiome === biomeId ? "selected" : "";
  const habitatObj = biomeData[biomeId].habitats;
  console.log("habitat obj");
  console.log(Object.values(habitatObj));
  const hasHabitatValues = Object.values(habitatObj).some(
    (habitat) => habitat.count !== 0
  )
    ? "includedBiome"
    : "";

  return (
    <div className="button-container">
      <button
        onClick={() => highlightBiomeIcon(biomeId)}
        key={biomeId}
        value={biomeId}
        className={`${currentBiome} ${hasHabitatValues}`}
      >
        {icon}
      </button>
    </div>
  );
};

export default BiomeSelect;
