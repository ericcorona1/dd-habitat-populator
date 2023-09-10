import React from "react";
const BiomeSelect = ({
  selectedBiome,
  biomeData,
  highlightBiomeIcon,
  icon,
  biomeId
}) => {
  const currentBiome = selectedBiome === biomeId ? "selected" : "";
  const habitatObj = biomeData[biomeId].habitats[1];
console.log(Object.values(habitatObj));  
  const hasHabitatValues = habitatObj.some(
    (habitat) => habitat.count !== 0
  )
    ? "includedBiome"
    : "";

  return (
    <div className="button-container">
        return (
          <button
            onClick={() => highlightBiomeIcon(biomeId)}
            key={biomeId}
            value={biomeId}
            className={`${currentBiome} ${hasHabitatValues}`}
          >
            {icon}
          </button>
        );
    </div>
  );
};

export default BiomeSelect;
