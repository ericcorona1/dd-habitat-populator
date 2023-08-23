import * as React from "react";
import Biome from "../components/Biome";
import Habitat from "../components/Habitat";
import { graphql, useStaticQuery } from "gatsby";
import { useState } from "react";

const query = graphql`
  query {
    allBiomesJson {
      nodes {
        biome_description
        biome_name
        habitat_name
      }
    }
  }
`;

const IndexPage = () => {
  const {
    allBiomesJson: { nodes: biomes },
  } = useStaticQuery(query);
  const [selectedBiome, setSelectedBiome] = useState("");
  const [allSelectedBiomes, setAllSelectedBiomes] = useState([]);
  const habitatsInBiome = biomes[selectedBiome] || [];
  const changeSelectedBiome = (event) => {
    setSelectedBiome(event.target.value);
  };
  const addBiomeToArray = () => {
    if (selectedBiome && !allSelectedBiomes.includes(selectedBiome)) {
      setAllSelectedBiomes([...allSelectedBiomes, selectedBiome]);
    }
  };
  return (
    <main>
      <header>
        <h1>POKEMON GENERATOR</h1>
      </header>
      <Biome
        selectedbiome={selectedBiome}
        allSelectedBiomes={allSelectedBiomes}
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
