import * as React from "react";
import Biome from "../components/Biome";
import Habitat from "../components/Habitat";
import Overlay from "../components/Overlay";
import { useState } from "react";
import UpdatedBiomeJson from "../assets/data/updatedBiomes.json";
import PokemonInHabitatsJson from "../assets/data/pokemon_habitat.json";
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

const populatePokemonInHabitats = (organizedData, pokemonData) => {
  // Loop biomes
  for (const biomeId in organizedData) {
    const biome = organizedData[biomeId];

    // Loop habitats in biome
    for (const habitatId in biome.habitats) {
      const habitat = biome.habitats[habitatId];

      // group pokemon data for the habitat
      const habitatPokemon = pokemonData.filter((pokemon) => {
        return pokemon.habitat_id === habitat.habitatId;
      });

      // shuffle pokemon
      for (
        let currentIndex = habitatPokemon.length - 1;
        currentIndex > 0;
        currentIndex--
      ) {
        const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        [habitatPokemon[currentIndex], habitatPokemon[randomIndex]] = [
          habitatPokemon[randomIndex],
          habitatPokemon[currentIndex],
        ];
      }
      // assing to habitat
      habitat.pokemon = habitatPokemon;
    }
  }
  return organizedData;
};

const updatedOrganizedData = populatePokemonInHabitats(
  organizedData,
  PokemonInHabitatsJson
);


const IndexPage = () => {
  // state
  const [biomeData, setBiomeData] = useState(organizedData);
  const [selectedBiomeId, setSelectedBiomeId] = useState(1);

  const highlightBiomeIcon = (biomeId) => {
    setSelectedBiomeId(biomeId);
  };

  const increment = (biomeId, habitatId) => {
    // Clone the state data to avoid mutating it directly
    const updatedBiomeData = { ...biomeData };

    // Check if the biomeId exists in the data
    if (updatedBiomeData[biomeId]) {
      const updatedHabitat = updatedBiomeData[biomeId].habitats[habitatId];

      // Check if the habitatId exists within the biome
      if (updatedHabitat) {
        // Increment the count for the specified habitat
        updatedHabitat.count += 1;

        // Update the state with the modified data
        setBiomeData(updatedBiomeData);
      }
    }
  };

  const decrement = (biomeId, habitatId) => {
    // Clone the state data to avoid mutating it directly
    const updatedBiomeData = { ...biomeData };

    // Check if the biomeId exists in the data
    if (updatedBiomeData[biomeId]) {
      const updatedHabitat = updatedBiomeData[biomeId].habitats[habitatId];

      // Check if the habitatId exists within the biome
      if (updatedHabitat && updatedHabitat.count > 0) {
        // Increment the count for the specified habitat
        updatedHabitat.count -= 1;

        // Update the state with the modified data
        setBiomeData(updatedBiomeData);
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
        increment={increment}
        decrement={decrement}
      />
      <Overlay 
      biomeData={biomeData}
      dataWithPokemon={updatedOrganizedData}
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
