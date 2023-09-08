import React from "react";

const HabitatList = ({
  habitats,
  counterValues,
  increment,
  decrement,
  selectedBiomeIndex,
}) => {
  return (
    <div className="habitat-container">
      {habitats.map((habitat, index) => {
        return (
          <div className="habitatList" key={index}>
            <p>{habitat}</p>
            <div className="buttonContainer">
              <button
                onClick={() => {
                  decrement(index);
                }}
              >
                -
              </button>
              <span className="counterOutput">
                {counterValues[selectedBiomeIndex][index]}
              </span>
              {/* <input
                type="number"
                value={counterValues[selectedBiomeIndex][index]}
                onChange={(event) => {
                  // You may want to add validation or error handling here
                  increment(index, parseInt(event.target.value, 10));
                }}
              /> */}
              <button
                onClick={() => {
                  increment(index);
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HabitatList;
