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

const IndexPage = () => {
  // get the IDs in the structureBiomes
  // StructureBiomes will convert getData to a hierarchical structure

  // create index for biome id's, this needs to be updated
  const biomeArray = Object.keys(structureBiomes);
  // [1,2,3,4,5,6]

  // state
  // the index should be changed to id
  const [selectedBiomeId, setSelectedBiomeId] = useState(1);
  const selectedBiome = structureBiomes[selectedBiomeId];
  const selectedBiomeDescription = selectedBiome.description;
  const habitatsInBiome = selectedBiome.habitats.map(habitat => habitat.habitatName);
  const initialCounters = [];
  for (const biome in structureBiomes) {
    const count = [];
    structureBiomes[biome].habitats.forEach(() => count.push(0));
    initialCounters.push(count);
  }
  const [allCounters, setAllCounters] = useState(initialCounters);
  const [randomPokemon, setRandomPokemon] = useState([]);

  // methods
  const highlightBiomeIcon = (biomeId) => {
    setSelectedBiomeId(biomeId);
  };
console.log(selectedBiomeId);
  const increment = (index) => {
    const updateCounter = [...allCounters];
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
        selectedBiomeId={selectedBiomeId}
        counterValues={allCounters}
      />
      <Habitat
        habitats={habitatsInBiome}
        counterValues={allCounters}
        increment={increment}
        decrement={decrement}
        selectedBiomeId={selectedBiomeId}
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
