import React from "react";

const HabitatList = ({ habitats, counterValue }) => {
  return (
    <div className="habitat-container">
      {habitats.map((habitat) => {
        return (
          <div className="habitatList">
            <p>{habitat}</p>
            <div className="buttonContainer">
              <button>-</button>
              <span className="counterOutput">{counterValue}</span>
              <button>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HabitatList;
