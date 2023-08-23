import React from "react";

const HabitatList = ({ habitats }) => {
  return (
    <div className="habitat-container">
      {habitatsInBiome.map((habitat) => {
        return (
          <div className="habitatList">
            <p>{habitats}</p>
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
