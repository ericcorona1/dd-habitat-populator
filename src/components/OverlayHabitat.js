import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const query = graphql`
  query {
    allPokemon {
      nodes {
        externalId
        name
        types {
          type {
            name
          }
          slot
        }
        sprites {
          front_default
          other {
            official_artwork {
              front_default
            }
          }
          versions {
            generation_viii {
              icons {
                front_default
              }
            }
          }
        }
        moves {
          move {
            name
          }
          version_group_details {
            level_learned_at
          }
        }
      }
      totalCount
    }
    allMove {
      nodes {
        name
        flavor_text_entries {
          flavor_text
          language {
            name
          }
        }
        power
        externalId
      }
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

  const {
    allMove: { nodes: moveData },
  } = useStaticQuery(query);

  console.log("-----");
  console.log(moveData);

  const findMoveData = (moveName) => {
    return moveData.find((moveCheck) => moveCheck.name === moveName);
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
            const randomMoves = [];
            let numberOfMoves = 4;
            while (numberOfMoves > 0) {
              const randomIndex = Math.floor(
                Math.random() * foundPokemon.moves.length
              );
              const randomMove = foundPokemon.moves[randomIndex].move.name;
              if (!randomMoves.includes(randomMove)) {
                randomMoves.push(randomMove);
                numberOfMoves--;
              }
            }
            const capitalName = capitalizeFirstLetter(foundPokemon.name);

            return (
              <>
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
                    <div className="types">
                      {foundPokemon.types.map((eachType, index) => {
                        const type = eachType.type.name;
                        const captialType = capitalizeFirstLetter(type);
                        return (
                          <span key={index} className="pokemonType">
                            {captialType}
                          </span>
                        );
                      })}
                    </div>
                  </td>
                </tr>
                <tr className="expandedRow">
                  <td colSpan={4}>
                    <div className="pokemonMoves">
                      <details>
                        <summary>Moves:</summary>
                        <ul>
                          {randomMoves.map((move, index) => {
                            const foundMove = findMoveData(move);
                            let randomEnFlavorText;
                            console.log("power total");
                            console.log(foundMove.power);

                            const fetchRandomEnFlavorText = async () => {
                              const enFlavorTextEntries =
                                foundMove.flavor_text_entries.filter(
                                  (flavorText) =>
                                    flavorText.language.name === "en"
                                );
                              if (enFlavorTextEntries.length > 0) {
                                const randomIndex = Math.floor(
                                  Math.random() * enFlavorTextEntries.length
                                );
                                randomEnFlavorText =
                                  enFlavorTextEntries[randomIndex];
                              } else {
                                randomEnFlavorText =
                                  "No English description available";
                              }
                            };
                            fetchRandomEnFlavorText();
                            const captitalMove = capitalizeFirstLetter(move);
                            return (
                              <li key={index}>
                                <p>{captitalMove}</p>
                                {foundMove.power ? (
                                  <p>Power: {foundMove.power}</p>
                                ) : (
                                  ""
                                )}
                                <p>{randomEnFlavorText.flavor_text}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </details>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OverlayHabitat;
