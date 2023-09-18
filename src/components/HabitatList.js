import React from "react";

const HabitatList = ({
  increment,
  decrement,
  habitat,
  habitatId,
  biomeId,
  handleNumberChange,
  onEmptyInput
}) => {
  return (
    <div className="habitat-container">
      <div className="habitatList">
        <p>{habitat[habitatId].habitatName}</p>
        <div className="buttonContainer">
          <button
            onClick={() => {
              decrement(biomeId, habitatId);
            }}
          >
            -
          </button>
          {/* <span className="counterOutput">{habitat[habitatId].count}</span> */}
          <input
            type="number"
            value={habitat[habitatId].count}
            onChange={(event) => {
              handleNumberChange(biomeId, habitatId, event);
            }}
            onBlur={() => {
              onEmptyInput(biomeId, habitatId)
            }}
            min="0"
            max={habitat[habitatId].pokemon.length}
          />
          <button
            onClick={() => {
              increment(biomeId, habitatId);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitatList;
