import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

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
`

const HabitatList = () => {
  const {
    allBiomesJson: { nodes: biomes },
  } = useStaticQuery(query);
  const [selectedBiome, setSelectedBiome] = useState('');
  const habitatsInBiome = biomes[selectedBiome] || [];
  return (
    <div>
      <p>Habitats List</p>
      <div className="habitats-list">
        {/* {biomes ? habitats.map((habitatEntry) => {
            const habitatName = habitatEntry.habitat_name;
            return (
                <p>{habitatName}</p>
                //  <div className="buttonContainer">
                //     <button>+</button>
                //     <span className="counterOutput"></span>
                //     <button>-</button>
                // </div>
            )
            }) : ""} */}
      </div>
    </div>
  );
};

export default HabitatList;
