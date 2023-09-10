import * as React from "react";
import Biome from "../components/Biome";
import Habitat from "../components/Habitat";
import OverlayList from "../components/overlayList";
import { useState } from "react";
import UpdatedBiomeJson from "../assets/data/updatedBiomes.json";
import "../assets/css/main.css";

const organizedData = UpdatedBiomeJson.reduce((acc, biome) => {
  const { biome_id, biome_name, habitat_id, habitat_name, biome_description } =
    biome;

  if (!acc[biome_id]) {
    acc[biome_id] = {
      biomeId: biome_id, // Include biomeId here
      biomeName: biome_name,
      description: biome_description,
      habitats: {},
    };
  }

  acc[biome_id].habitats[habitat_id] = {
    habitatName: habitat_name,
    count: 0,
  };

  return acc;
}, {});

const IndexPage = () => {
  // create index for biome id's, this needs to be updated
  const biomeArray = Object.keys(organizedData);

  // state
  const [biomeData, setBiomeData] = useState(organizedData);
  const [selectedBiomeId, setSelectedBiomeId] = useState(1);

  const highlightBiomeIcon = (biomeId) => {
    setSelectedBiomeId(biomeId);
  };

  const increment = (biomeId, habitatId) => {
    const updateBiome = biomeData.map((biome) => {
      if (biome)
    });
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

  // render
  return (
    <main>
      <header>
        <h1>POKEMON GENERATOR</h1>
      </header>
      <Biome
        biomeArray={biomeArray}
        selectedBiomeId={selectedBiomeId}
        biomeData={organizedData}
        highlightBiomeIcon={highlightBiomeIcon}
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
