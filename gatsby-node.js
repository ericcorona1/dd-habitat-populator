const fetch = require("node-fetch");

const POKEMON_NODE_TYPE = "Pokemon";
const MOVE_NODE_TYPE = "Move";

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions;

  // Fetch data for Pokémon
  const pokemonResponse = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=1010"
  );
  const pokemonJson = await pokemonResponse.json();
  const { results: pokemonResults = [] } = pokemonJson;

  // Define a function to fetch data for an individual Pokémon by URL
  const fetchPokemonData = async (url) => {
    const allPokemonResponse = await fetch(url);
    const pokemonData = await allPokemonResponse.json();
    return {
      ...pokemonData,
      externalId: pokemonData.id, // Preserve the original ID
    };
  };

  // Fetch data for moves
  const moveResponse = await fetch("https://pokeapi.co/api/v2/move?limit=922");
  const moveJson = await moveResponse.json();
  const { results: moveResults = [] } = moveJson;

  // Define a function to fetch data for an individual move by URL
  const fetchMoveData = async (url) => {
    const moveResponse = await fetch(url);
    const moveData = await moveResponse.json();
    return {
      ...moveData,
      externalId: moveData.id, // Preserve the original ID
    };
  };

  // Iterate through the list of Pokémon and fetch data for each one
  const pokemonDataArray = await Promise.all(
    pokemonResults.map(async (result) => {
      const { url } = result;
      return fetchPokemonData(url);
    })
  );

  // Iterate through the list of moves and fetch data for each one
  const moveDataArray = await Promise.all(
    moveResults.map(async (result) => {
      const { url } = result;
      return fetchMoveData(url);
    })
  );

  // Create Gatsby nodes for each Pokémon
  pokemonDataArray.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${POKEMON_NODE_TYPE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: POKEMON_NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    });
  });

  // Create Gatsby nodes for each move
  moveDataArray.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${MOVE_NODE_TYPE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: MOVE_NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    });
  });
};
