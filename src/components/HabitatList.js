import React from "react";
import { graphql } from "gatsby";

const query = graphql`
  query {
    allPokemonHabitatJson {
      nodes {
        biome_name
        habitat_name
        pokemon_name
      }
    }
  }
`;

const HabitatList = () => {
    
  return <div>HabitatList</div>;
};

export default HabitatList;
