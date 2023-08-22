import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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

const HabitatList = ({habitats, biomes}) => {
  const {
    allPokemonHabitatJson: { nodes: habitats },
  } = useStaticQuery(query);
  return (
    <div>
      <p>Habitats List</p>
      <div className="habitats-list">
        {biomes ? habitats.map((habitatEntry) => {
            const habitatName = habitatEntry.habitat_name;
            return (
                <p>{habitatName}</p>
                 <div className="buttonContainer">
                    <button>+</button>
                    <span className="counterOutput"></span>
                    <button>-</button>
                </div>
            )
            }) : ""}
      </div>
    </div>
  );
};

export default HabitatList;
