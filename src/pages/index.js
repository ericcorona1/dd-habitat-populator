import * as React from "react";
import Biome from "../components/Biome";
import Habitat from "../components/Habitat";
import { graphql, useStaticQuery } from "gatsby";
import { useState } from "react";

const getData = graphql`
  {
    allBiomesJson {
      nodes {
        biome_name
        habitat_name
      }
    }
  }
`;

const IndexPage = () => {
  const {
    allBiomesJson: { nodes: biomes },
  } = useStaticQuery(getData);
  const [selectedBiome, setSelectedBiome] = useState("");
  const [selectedBiomeDescription, setSelectedBiomeDescription] = useState("");
  const [allSelectedBiomes, setAllSelectedBiomes] = useState([]);
  const [habitatsInBiome, setHabitatsInBiome] = useState([]);

  const highlightBiomeIcon = (event) => {
    console.log(event.target.value);
    setSelectedBiome(event.target.value);
    setSelectedBiomeDescription(event.target.value);
    updateHabitatsList();
  };

  const toggleBiome = () => {
    setTimeout(() => {
      if (selectedBiome && allSelectedBiomes.includes(selectedBiome)) {
        setAllSelectedBiomes(
          allSelectedBiomes.filter((biome) => biome !== selectedBiome)
        );
      } else {
        setAllSelectedBiomes([...allSelectedBiomes, selectedBiome]);
      }
    }, 1000);
  };

  const updateHabitatsList = () => {
    if (selectedBiome) {
      biomes.forEach((biome) =>
        setHabitatsInBiome([...habitatsInBiome, biome.biome_name.habitat_name])
      );
    }
  };

  console.log(selectedBiome);

  return (
    <main>
      <header>
        <h1>POKEMON GENERATOR</h1>
      </header>
      <Biome
        selectedBiomeDescription={selectedBiomeDescription}
        allSelectedBiomes={allSelectedBiomes}
        highlightBiomeIcon={highlightBiomeIcon}
        toggleBiome={toggleBiome}
      />
      <Habitat habitats={habitatsInBiome} />
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
