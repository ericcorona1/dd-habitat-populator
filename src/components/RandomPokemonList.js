import React from 'react'

const RandomPokemonList = () => {

    // step 1: get all biomes with values in their habitat
    // step 2: get all habitats with a value greater than 1
    // step 3: use Random() while values is greater than 0 to pick random pokemonId
    // step 4: list pokemon name with their sprite

    return (
    <div>
        <h2>{biomeName}</h2>
        <div>
        {/* for each habitat with value */}
        <h3>{habitatName}</h3>
        <ul>
        {/* random() while value */}
        <li>{randomPokemon}</li>
        </ul>
        </div>
    </div>
  )
}

export default RandomPokemonList