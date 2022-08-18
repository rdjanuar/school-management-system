import React from "react";

export const Buttons = ({ name, handlerClick, color }) => {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`}
      onClick={handlerClick}
    >
      {name}
    </button>
  );
};
