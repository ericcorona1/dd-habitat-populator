import React from "react";

const HabitatList = ({
  habitats,
  counterValues,
  increment,
  decrement,
  trackHabitatCounters,
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
                  trackHabitatCounters(index);
                }}
              >
                -
              </button>
              <span className="counterOutput">{counterValues[index]}</span>
              <button
                onClick={() => {
                  increment(index);
                  trackHabitatCounters(index);
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
