import React from "react";

const HabitatList = ({ habitats }) => {
  return (
    <div className="habitat-container">
      {habitats.map((habitat) => {
        return (
          <div className="habitatList">
            <p>{habitat}</p>
            <div className="buttonContainer">
              <button>+</button>
              <span className="counterOutput"></span>
              <button>-</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HabitatList;
