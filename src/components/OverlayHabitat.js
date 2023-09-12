import React from "react";

const OverlayHabitat = ({ habitatName, pokemons, count }) => {
  const listedPokemon = pokemons.slice(0, count);
  return (
    <div>
      <h3>{habitatName}</h3>
      <ul>
        {listedPokemon.map((pokemon) => (
          <li key={pokemon.pokemon_id}>{pokemon.pokemon_id}</li>
        ))}
      </ul>
    </div>
  );
};

export default OverlayHabitat;
