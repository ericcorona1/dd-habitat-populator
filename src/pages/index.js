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
    habitatId: habitat_id,
    habitatName: habitat_name,
    count: 0,
  };

  return acc;
}, {});

const IndexPage = () => {
  // state
  const [biomeData, setBiomeData] = useState(organizedData);
  const [selectedBiomeId, setSelectedBiomeId] = useState(1);

  const highlightBiomeIcon = (biomeId) => {
    setSelectedBiomeId(biomeId);
  };

  const increment = (biomeId, habitatId) => {
    const updatedBiomeData = { ...biomeData };
    const updatedBiome = updatedBiomeData[biomeId];
    const updatedHabitat = updatedBiome.habitats[habitatId];
    let updatedCount = updatedHabitat.count;
    if (updatedBiome) {
      if (updatedHabitat) {
        updatedCount += 1;
        setBiomeData(updatedCount);
      }
    }
  };

  const decrement = (biomeId, habitatId) => {
    const updatedBiomeData = { ...biomeData };
    const updatedBiome = updatedBiomeData[biomeId];
    const updatedHabitat = updatedBiome.habitats[habitatId];
    let updatedCount = updatedHabitat.count;
    if (updatedBiome) {
      if (updatedHabitat) {
        updatedCount -= 1;
        setBiomeData(updatedCount);
      }
    }
  };

  // render
  return (
    <main>
      <header>
        <h1>POKEMON GENERATOR</h1>
      </header>
      <Biome
        selectedBiome={biomeData[selectedBiomeId]}
        biomeData={biomeData}
        highlightBiomeIcon={highlightBiomeIcon}
      />
      <Habitat
        selectedBiome={biomeData[selectedBiomeId]}
        onIncrement={increment}
        onDecrement={decrement}
      />
      <OverlayList />

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
