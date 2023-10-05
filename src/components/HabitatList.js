import React from "react";

const HabitatList = ({
  increment,
  decrement,
  habitat,
  habitatId,
  biomeId,
  handleNumberChange,
  onEmptyInput,
}) => {
  return (
    <div className="habitatList">
      <p>{habitat[habitatId].habitatName}</p>
      <div className="counterInput">
        <button
          onClick={() => {
            decrement(biomeId, habitatId);
          }}
        >
          -
        </button>
        <input
          type="number"
          value={habitat[habitatId].count}
          onChange={(event) => {
            handleNumberChange(biomeId, habitatId, event);
          }}
          onBlur={() => {
            onEmptyInput(biomeId, habitatId);
          }}
          min="0"
          max={habitat[habitatId].pokemon.length}
        />
        <button
          onClick={() => {
            increment(biomeId, habitatId);
          }}
          onBlur={() => {
            onEmptyInput(biomeId, habitatId);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default HabitatList;
