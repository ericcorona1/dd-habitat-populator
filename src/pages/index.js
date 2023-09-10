import * as React from "react";
import Biome from "../components/Biome";
import Habitat from "../components/Habitat";
import OverlayList from "../components/overlayList";
import { useState } from "react";
import UpdatedBiomeJson from "../assets/data/updatedBiomes.json";
import "../assets/css/main.css";


const organizedData = UpdatedBiomeJson.reduce((acc, biome) => {
  const { biome_id, biome_name, habitat_id, habitat_name, biome_description } = biome;

  if (!acc[biome_id]) {
    acc[biome_id] = {
      biomeId: biome_id, // Include biomeId here
      biomeName: biome_name,
      description: biome_description,
      habitats: [],
    };
  }

  acc[biome_id].habitats.push({
    habitatId: habitat_id,
    habitatName: habitat_name,
    count: 0,
  });

  return acc;
}, {});


// Initialize the biome data with counts
const structureBiomes = Object.values(organizedData);

// console.log(Object.entries(organizedData).forEach(([biomeId, biomeData]) => {
//   console.log(`Biome ID: ${biomeId}`);
//   console.log(`Biome Name: ${biomeData.biomeName}`);
//   console.log(`Description: ${biomeData.description}`);
//   console.log(`Habitats:`);
//   biomeData.habitats.forEach((habitat) => {
//     console.log(`  Habitat ID: ${habitat.habitatId}`);
//     console.log(`  Habitat Name: ${habitat.habitatName}`);
//     console.log(`  Count: ${habitat.count}`);
//   });
//   console.log('---'); // Separating each biome
// }));
const IndexPage = () => {
  // create index for biome id's, this needs to be updated
  const biomeArray = Object.keys(organizedData);

  // state
  const [selectedBiomeId, setSelectedBiomeId] = useState(1);
  const selectedBiome = organizedData[selectedBiomeId];
  const selectedBiomeDescription = selectedBiome.description;
  const habitatsInBiome = selectedBiome.habitats.map(
    (habitat) => habitat.habitatName
  );
  const initialCounters = Object.entries(organizedData).map(([biomeId, biomeData]) =>{
    const biomeId = biomeId;
    biomeData.habitats.map((habitat) => ({
      biomeId: biomeId, 
      habitatId: habitat.habitatId,
      count: 0
    }))
  });


  for (const biome in structureBiomes) {
    const count = [];
    structureBiomes[biome].habitats.forEach(() => count.push(0));
    initialCounters.push(count);
  }
  const [allCounters, setAllCounters] = useState(initialCounters);

  // methods

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
        biomeData={organizedData}
      />
      <Habitat
        habitats={habitatsInBiome}
        counterValues={allCounters}
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
