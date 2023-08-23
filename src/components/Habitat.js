import React from "react";
import HabitatList from "./HabitatList";

const query = graphql`
  query {
    allBiomesJson {
      nodes {
        biome_description
        biome_name
        habitat_name
      }
    }
  }
`;

const Habitat = ({ habitats }) => {
  const {
    allBiomesJson: { nodes: biomes },
  } = useStaticQuery(query);
  const [selectedBiome, setSelectedBiome] = useState("");
  const [allSelectedBiomes, setAllSelectedBiomes] = useState([]);
  const habitatsInBiome = biomes[selectedBiome] || [];
  return (
    <section>
      <h2>SELECT HABITAT</h2>
      <HabitatList habitats={habitats} />
    </section>
  );
};

export default Habitat;
