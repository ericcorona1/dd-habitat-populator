import React from "react";
import { useState } from "react";

// const overlayContent = () => {
//   return (
//     <div>
//       <h2>{data[0].category}</h2>
//       <ul>
//         {data.map((item) => (
//           <li key={item.name}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const OverlayList = (counterValues) => {

//   function filterByCategoryAndCount(data, category, count) {
//     return data.filter((item) => item.category === category).slice(0, count);
//   }
const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen('open');
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>Generate</button>
      {/* {modalOpen && (
        <dialog open>
          <b onClick={closeModal}>Close Modal</b utton>
          {categories.map((category) => {
            const data = filterByCategoryAndCount(
              mockData,
              category,
              getCategoryCount(category)
            );
            if (data.length === 0) {
              return null; // Skip empty categories
            }
            return <ModalContent key={category} data={data} />;
          })}
        </dialog>
      )} */}
        {modalOpen && (
      <dialog open>
        <button onClick={closeModal}>Close</button>
      </dialog>)}
    </div>
  );
};

export default OverlayList;
