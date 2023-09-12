import React from "react";

const OverlayHabitat = ({ habitatName, pokemons }) => {
  return (
    <div>
      <h3>{habitatName}</h3>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.pokemon_id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default OverlayHabitat;
