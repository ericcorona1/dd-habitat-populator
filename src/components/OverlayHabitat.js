import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allPokemon {
      nodes {
        id
        name
        image
      }
      totalCount
    }
  }
`;

const OverlayHabitat = ({ habitatName, pokemons, count }) => {
  const {
    allPokemon: { nodes: pokemonData },
  } = useStaticQuery(query);
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
