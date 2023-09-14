import { graphql, useStaticQuery } from "gatsby";
import React from "react";

// 

const OverlayHabitat = ({ habitatName, pokemons, count }) => {
  // const {
  //   allPokemon: { nodes: pokemonData },
  // } = useStaticQuery(query);
  // const findPokemonData = (pokemonId) => {
  //   return pokemonData.find((pokemonCheck) => {
  //     const adjustedId = pokemonCheck.id - 1; // Reduce pokemonCheck.id by one
  //     console.log(pokemonCheck);
  //     return adjustedId === pokemonId;
  //   });
  // };
  
  const listedPokemon = pokemons.slice(0, count);
  console.log(listedPokemon);

  return (
    <div>
      <h3>{habitatName}</h3>
      <ul>
        {listedPokemon.map((listedPokemon) => {
          // const foundPokemon = findPokemonData(listedPokemon.pokemon_id);
          return (
            <li key={listedPokemon.pokemon_id}>
              {/* {listedPokemon.pokemon_id}:{foundPokemon && foundPokemon.name} */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OverlayHabitat;
