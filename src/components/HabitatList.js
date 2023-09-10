import React from "react";

const HabitatList = ({
  habitats,
  selectedBiomeId,
}) => {
  const increment = (index) => {
    const updateCounter = [...allCounters];
    // this takes the array of counters, uses the id to find its array, then uses index. maybe each array should have an id associated with their biome?
    updateCounter[selectedBiomeId][index] += 1;
    setAllCounters(updateCounter);
  };

  const decrement = (index) => {
    const updateCounter = [...allCounters];
    if (updateCounter[selectedBiomeId][index] > 0) {
      updateCounter[selectedBiomeId][index] -= 1;
      setAllCounters(updateCounter);
    }
  };
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
                {}
              </span>
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
