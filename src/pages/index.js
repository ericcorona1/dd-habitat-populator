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
  const initialCounters = [];
  for (const biome in structureBiomes) {
    const count = [];
    structureBiomes[biome].habitats.forEach(() => count.push(0));
    initialCounters.push(count);
  }
  const [allCounters, setAllCounters] = useState(initialCounters);
  // const [allSelectedBiomes, setAllSelectedBiomes] = useState([]);

  // methods
  const highlightBiomeIcon = (index) => {
    setSelectedBiomeIndex(index);
  };

  const increment = (index) => {
    const updateCounter = [...allCounters];
    updateCounter[selectedBiomeIndex][index] += 1;
    setAllCounters(updateCounter);
  };

  const decrement = (index) => {
    const updateCounter = [...allCounters];
    if (updateCounter[selectedBiomeIndex][index] > 0) {
      updateCounter[selectedBiomeIndex][index] -= 1;
      setAllCounters(updateCounter);
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
        counterValues={allCounters}
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
