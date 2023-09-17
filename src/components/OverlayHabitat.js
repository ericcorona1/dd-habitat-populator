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
  const findPokemonData = (pokemonId) => {
    return pokemonData.find(
      (pokemonCheck) => pokemonCheck.externalId === pokemonId
    );
  };

  const listedPokemon = pokemons.slice(0, count);

  const capitalizeFirstLetter = (name) => {
    return name[0].toUpperCase() + name.slice(1);
  };

  return (
    <div className="habitatContainer">
      <h3>{habitatName}</h3>
      <table className="pokemonTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Types</th>
          </tr>
        </thead>
        <tbody>
          {listedPokemon.map((listedPokemon) => {
            const foundPokemon = findPokemonData(listedPokemon.pokemon_id);
            const capitalName = capitalizeFirstLetter(foundPokemon.name);

            return (
              <tr key={listedPokemon.pokemon_id} className="pokemonRow">
                <td className="pokemonId">#{foundPokemon.externalId}</td>
                <td className="pokemonImage">
                  <img
                    src={foundPokemon.sprites.front_default}
                    alt={foundPokemon.name}
                  />
                </td>
                <td className="pokemonName">{foundPokemon && capitalName}</td>
                <td className="pokemonTypes">
                  {foundPokemon.types.map((eachType, index) => {
                    const type = eachType.type.name;
                    const captialType = capitalizeFirstLetter(type);
                    return (
                      <span key={index} className="pokemonType">
                        {captialType}
                      </span>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OverlayHabitat;
