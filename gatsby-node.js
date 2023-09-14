const fetch = require("node-fetch");

const NODE_TYPE = "Pokemon";

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions;

  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1010"); // Retrieves data for all 1010 Pokémon
  const json = await response.json();
  const { results = [] } = json;

  // Define a function to fetch data for an individual Pokémon by URL
  const fetchPokemonData = async (url) => {
    const pokeResponse = await fetch(url);
    const pokemonData = await pokeResponse.json();
    return {
      ...pokemonData,
      externalId: pokemonData.id, // Preserve the original ID
    };
  };

  // Iterate through the list of Pokémon and fetch data for each one
  const pokemonDataArray = await Promise.all(
    results.map(async (result) => {
      const { url } = result;
      return fetchPokemonData(url);
    })
  );

  // Create Gatsby nodes for each Pokémon
  pokemonDataArray.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${node.id}`), // Generate a unique Gatsby node ID
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    });
  });
};
