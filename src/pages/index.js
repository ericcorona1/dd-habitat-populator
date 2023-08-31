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
  const habitatsInBiome = selectedBiome.habitats;
  const initialCounters = biomeArray.map(biome => {
    const counterArrays = Array(structureBiomes[biome].habitats.length).fill(0);
    return counterArrays
  });
  const counterValues = initialCounters[selectedBiomeIndex]
  // const [allSelectedBiomes, setAllSelectedBiomes] = useState([]);
  // const [counterValues, setCounterValues] = useState(
  //   Array.from({ length: habitatsInBiome.length }, () => 0)
  // );
  // const [counterValues, setCounterValues] = useState(initialCounters[selectedBiomeIndex]);
  console.log("counter values: " + counterValues);
  // methods
  const highlightBiomeIcon = (index) => {
    setSelectedBiomeIndex(index);
  };

  const increment = (index) => {
    const copyCounter = [...counterValues];
    copyCounter[index] += 1;
    // setCounterValues(copyCounter);
  };

  const decrement = (index) => {
    const copyCounter = [...counterValues];
    if (copyCounter[index] > 0) {
      copyCounter[index] -= 1;
      // setCounterValues(copyCounter);
    }
  };
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

  // render
  return (
    <main>
      <header>
        <h1>POKEMON GENERATOR</h1>
      </header>
      <Biome
        selectedBiomeDescription={selectedBiomeDescription}
        highlightBiomeIcon={highlightBiomeIcon}
        biomeArray={biomeArray}
      />
      <Habitat
        habitats={habitatsInBiome}
        counterValues={counterValues}
        increment={increment}
        decrement={decrement}
        selectedBiomeIndex={selectedBiomeIndex}
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
