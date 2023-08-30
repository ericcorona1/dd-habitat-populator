import * as React from "react";
import Biome from "../components/Biome";
import Habitat from "../components/Habitat";
import { useState } from "react";
import biomeJson from "../assets/data/biomes.json";

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

  // starting values
  const startingBiome = "aquatic";
  const startingBiomeDescription = structureBiomes.aquatic.description;
  const startingBiomeHabitats = structureBiomes.aquatic.habitats;

  // state
  const [selectedBiome, setSelectedBiome] = useState(startingBiome);
  const [selectedBiomeDescription, setSelectedBiomeDescription] = useState(
    startingBiomeDescription
  );
  const [allSelectedBiomes, setAllSelectedBiomes] = useState([]);
  const [habitatsInBiome, setHabitatsInBiome] = useState(startingBiomeHabitats);
  const [counterValues, setCounterValues] = useState(
    Array.from({ length: habitatsInBiome.length }, () => 0)
  );

  // methods
  const highlightBiomeIcon = (event) => {
    const buttonValue = event.currentTarget.value;
    // const buttonValue = event.target.getAttribute("value");
    setSelectedBiome(buttonValue);
    setHabitatsInBiome(structureBiomes[buttonValue].habitats);
    setSelectedBiomeDescription(structureBiomes[buttonValue].description);
  };

  // const toggleBiome = () => {
  //   setTimeout(() => {
  //     if (selectedBiome && allSelectedBiomes.includes(selectedBiome)) {
  //       setAllSelectedBiomes(
  //         allSelectedBiomes.filter((biome) => biome !== selectedBiome)
  //       );
  //     } else {
  //       setAllSelectedBiomes([...allSelectedBiomes, selectedBiome]);
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
        allSelectedBiomes={allSelectedBiomes}
        highlightBiomeIcon={highlightBiomeIcon}
        // toggleBiome={toggleBiome}
        // allBiomeNames={allBiomeNames}
      />
      <Habitat
        habitats={habitatsInBiome}
        counterValues={counterValues}
        increment={increment}
        decrement={decrement}
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
