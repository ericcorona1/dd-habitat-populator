import * as React from "react";
import Biome from "../components/Biome";
import Habitat from "../components/Habitat";
import OverlayList from "../components/overlayList";
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
  const [randomPokemon, setRandomPokemon] = useState([]);
  for(let biomeIndex = 0; biomeIndex < allCounters.length; biomeIndex++) {
    const biomeName = structureBiomes[biomeIndex];
    console.log(biomeName);
    const biomesCounterArray = allCounters[biomeIndex]
    for(let habitatIndex = 0; habitatIndex < biomesCounterArray.length; habitatIndex++) {
      // const habitatName = structureBiomes[biomeIndex][habitatIndex];
      const habitatCounters = biomesCounterArray[habitatIndex];
      // console.log(habitatCounters);
    }
  }

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

  // console.log(allCounters);
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
        selectedBiomeIndex={selectedBiomeIndex}
        counterValues={allCounters}
      />
      <Habitat
        habitats={habitatsInBiome}
        counterValues={allCounters}
        increment={increment}
        decrement={decrement}
        selectedBiomeIndex={selectedBiomeIndex}
      />
      <OverlayList counterValues={allCounters}/>
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
