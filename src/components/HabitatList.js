import React from "react";

const HabitatList = ({ increment, decrement, habitat }) => {
  return (
    <div className="habitat-container">
      <div className="habitatList">
        <p>{}</p>
        <div className="buttonContainer">
          <button
            onClick={() => {
              decrement(habitat.count);
            }}
          >
            -
          </button>
          <span className="counterOutput">{habitat.count}</span>
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
              increment(habitat.count);
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
