import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const query = graphql`
query {
  allPokemon {
    nodes {
      externalId
      name
      sprites {
        front_default
        other {
          official_artwork {
            front_default
          }
        }
      }
      types {
        type {
          name
        }
        slot
      }
    }
    totalCount
  }
}
`;

const OverlayHabitat = ({ habitatName, pokemons, count }) => {
  const {
    allPokemon: { nodes: pokemonData },
  } = useStaticQuery(query);
  console.log(pokemonData);
  const findPokemonData = (pokemonId) => {
    return pokemonData.find((pokemonCheck) => pokemonCheck.externalId === pokemonId);
  };
  
  const listedPokemon = pokemons.slice(0, count);

  return (
    <div>
      <h3>{habitatName}</h3>
      <ul>
        {listedPokemon.map((listedPokemon) => {
          const foundPokemon = findPokemonData(listedPokemon.pokemon_id);
          return (
            <li key={listedPokemon.pokemon_id}>
              {listedPokemon.pokemon_id}:{foundPokemon && foundPokemon.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OverlayHabitat;
