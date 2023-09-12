import React from 'react'
import OverlayHabitat from './OverlayHabitat'

const OverlayBiome = ({biome}) => {
  const {biomeName, habitats} = biome;

    // step 1: get all biomes with values in their habitat
    // step 2: get all habitats with a value greater than 1
    // step 3: use Random() while values is greater than 0 to pick random pokemonId
    // step 4: list pokemon name with their sprite

    return (
    <div>
        <h2>{biomeName}</h2>
        {habitats.map((habitat) => {
        <OverlayHabitat 
        key={habitat.habitatId}
        habitatName={habitat.habitatName}
        pokemons={habitat.pokemon}
        />
        })}
    </div>
  )
}

export default OverlayBiome;