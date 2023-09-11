import React from "react";

const HabitatList = ({ increment, decrement, habitat, habitatId, biomeId }) => {
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
          <span className="counterOutput">{habitat[habitatId].count}</span>
          {/* <input
                type="number"
                value={counterValues[selectedBiomeId][index]}
                onChange={(event) => {
                  // You may want to add validation or error handling here
                  increment(index, parseInt(event.target.value, 10));
                }}
              /> */}
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
