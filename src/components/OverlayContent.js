import React from "react";

const OverlayContent = () => {
  return (
    <div>
      <h2>{data[0].category}</h2>
      <ul>
        {data.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default OverlayContent;
