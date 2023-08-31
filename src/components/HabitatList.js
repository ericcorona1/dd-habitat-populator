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
              <span className="counterOutput">{counterValues[index]}</span>
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
