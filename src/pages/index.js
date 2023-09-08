import * as React from "react";
import Biome from "../components/Biome";
import Habitat from "../components/Habitat";
import OverlayList from "../components/overlayList";
import { useState } from "react";
import UpdatedBiomeJson from "../assets/data/updatedBiomes.json";
import "../assets/css/main.css";

const structureBiomes = {};
UpdatedBiomeJson.forEach((biome) => {
  const biomeId = biome.biome_id;
  const biomeName = biome.biome_name;
  const habitatId = biome.habitat_id;
  const habitatName = biome.habitat_name;
  const habitatObj = { habitatId, habitatName };
  const biomeDescription = biome.biome_description;
  if (!structureBiomes[biomeId]) {
    structureBiomes[biomeId] = {
      biomeName: biomeName,
      habitats: [],
      description: biomeDescription,
    };
  }
  structureBiomes[biomeId].habitats.push(habitatObj);
});

console.log(structureBiomes[1].habitats);

const IndexPage = () => {
  // get the IDs in the structureBiomes
  // StructureBiomes will convert getData to a hierarchical structure

  // create index for biome id's, this needs to be updated
  const biomeArray = Object.keys(structureBiomes);
  // [1,2,3,4,5,6]

  // state
  // the index should be changed to id
  const [selectedBiomeIndex, setSelectedBiomeIndex] = useState(1);
  const selectedBiome = structureBiomes[selectedBiomeIndex];
  const selectedBiomeDescription = selectedBiome.description;
  const habitatsInBiome = selectedBiome.habitats.map(habitat => habitat.habitatName);
  const initialCounters = [];
  for (const biome in structureBiomes) {
    const count = [];
    structureBiomes[biome].habitats.forEach(() => count.push(0));
    initialCounters.push(count);
  }
  const [allCounters, setAllCounters] = useState(initialCounters);
  // const [allSelectedBiomes, setAllSelectedBiomes] = useState([]);
  const [randomPokemon, setRandomPokemon] = useState([]);
  for (let biomeIndex = 0; biomeIndex < allCounters.length; biomeIndex++) {
    const biomeName = structureBiomes[biomeIndex];
    const biomesCounterArray = allCounters[biomeIndex];
    for (
      let habitatIndex = 0;
      habitatIndex < biomesCounterArray.length;
      habitatIndex++
    ) {
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

  // step 1: I want to filter biomes with a values, filter values from the all counters array
  // step 2: I want to use the values to generate that many random pokemon, when we are fetching our pokemon we don;t care about the value of the biome

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
      <OverlayList counterValues={allCounters} />

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
