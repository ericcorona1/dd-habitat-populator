import * as React from "react";
import Biome from "../components/Biome";
import Habitat from "../components/Habitat";
import { useState } from "react";
import biomeJson from "../assets/data/biomes.json";
import "../assets/css/main.css";

const IndexPage = () => {
  // StructureBiomes will convert getData to a hierarchical structure
  const structureBiomes = {};
  biomeJson.forEach((biome) => {
    const biomeName = biome.biome_name;
    const habitat = biome.habitat_name;
    const biomeDescription = biome.biome_description;
    if (!structureBiomes[biomeName]) {
      structureBiomes[biomeName] = {
        habitats: [],
        description: biomeDescription,
      };
    }
    structureBiomes[biomeName].habitats.push(habitat);
  });
  // create index for biome names
  const biomeArray = Object.keys(structureBiomes);

  // state
  const [selectedBiomeIndex, setSelectedBiomeIndex] = useState(0);
  const selectedBiome = structureBiomes[biomeArray[selectedBiomeIndex]];
  const selectedBiomeDescription = selectedBiome.description;
  // const [allSelectedBiomes, setAllSelectedBiomes] = useState([]);
  const habitatsInBiome = selectedBiome.habitats;
  const [counterValues, setCounterValues] = useState(
    Array.from({ length: habitatsInBiome.length }, () => 0)
  );
  const [allCounterValues, setAllCounterValues] = useState(
    Array.from({ length: biomeArray.length }, () => [])
  );
  // methods
  const highlightBiomeIcon = (index) => {
    setSelectedBiomeIndex(index);
  };

  const trackHabitatCounters = (index) => {
    const updatedCountersArrays = [...allCounterValues];
    updatedCountersArrays[selectedBiomeIndex] = [...counterValues]; // Copy current counter values

    // Update the counter value for the specified habitat index
    updatedCountersArrays[selectedBiomeIndex][index] += 1;

    setAllCounterValues(updatedCountersArrays);
  };
  console.log(allCounterValues);
  // const toggleBiome = () => {
  //   setTimeout(() => {
  //     if (selectedBiomeIndex && allSelectedBiomes.includes(selectedBiomeIndex)) {
  //       setAllSelectedBiomes(
  //         allSelectedBiomes.filter((biome) => biome !== selectedBiomeIndex)
  //       );
  //     } else {
  //       setAllSelectedBiomes([...allSelectedBiomes, selectedBiomeIndex]);
  //     }
  //   }, 1000);
  // };

  const increment = (index) => {
    const updatedCounters = [...counterValues];
    updatedCounters[index] += 1;
    setCounterValues(updatedCounters);
  };

  const decrement = (index) => {
    const updatedCounters = [...counterValues];
    if (updatedCounters[index] > 0) {
      updatedCounters[index] -= 1;
      setCounterValues(updatedCounters);
    }
  };

  // render
  return (
    <main>
      <header>
        <h1>POKEMON GENERATOR</h1>
      </header>
      <Biome
        selectedBiomeDescription={selectedBiomeDescription}
        // allSelectedBiomes={allSelectedBiomes}
        highlightBiomeIcon={highlightBiomeIcon}
        biomeArray={biomeArray}
        // toggleBiome={toggleBiome}
        // allBiomeNames={allBiomeNames}
      />
      <Habitat
        habitats={habitatsInBiome}
        counterValues={counterValues}
        increment={increment}
        decrement={decrement}
        trackHabitatCounters={trackHabitatCounters}
      />
      <footer>
        <p>
          &copy; {new Date().getFullYear()} <span>PokemonGenerator</span> Built
          with <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </p>
      </footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <title>Generate Pokemon</title>
      <meta
        name="description"
        content="generate a selected number of pokemon by environment"
      />
    </>
  );
};
