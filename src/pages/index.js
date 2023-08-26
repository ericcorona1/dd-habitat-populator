import * as React from "react";
import Biome from "../components/Biome";
import Habitat from "../components/Habitat";
import { graphql, useStaticQuery } from "gatsby";
import { useState } from "react";

const getData = graphql`
  {
    allBiomesJson {
      group(field: { biome_name: SELECT }) {
        distinct(field: { biome_name: SELECT })
        nodes {
          habitat_name
          biome_description
        }
      }
    }
  }
`;

const IndexPage = () => {
  // definitions
  const {
    allBiomesJson: { group: biomes },
  } = useStaticQuery(getData);

  const [selectedBiome, setSelectedBiome] = useState("");
  const [selectedBiomeDescription, setSelectedBiomeDescription] = useState("");
  const [allSelectedBiomes, setAllSelectedBiomes] = useState([]);
  const [habitatsInBiome, setHabitatsInBiome] = useState([]);

  // StructureBiomes will convert getData to a hierarchical structure
  const structureBiomes = {};
  biomes.forEach((biome) => {
    const biomeName = biome.distinct[0];
    const habitats = biome.nodes.map((habitat) => habitat.habitat_name);
    const biomeDescription = biome.nodes[0].biome_description;
    structureBiomes[biomeName] = {
      habitats: habitats,
      description: biomeDescription,
    };
  });
  
  // methods
  const highlightBiomeIcon = (event) => {
    const buttonValue = event.target.getAttribute("value");
    setSelectedBiome(buttonValue);
    setHabitatsInBiome(structureBiomes[buttonValue].habitats);
    setSelectedBiomeDescription(structureBiomes[buttonValue].description)
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
        toggleBiome={toggleBiome}
        // allBiomeNames={allBiomeNames}
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
