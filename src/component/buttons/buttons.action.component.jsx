import React from "react";

export const Buttons = ({ name, handlerClick }) => {
  return (
    <button
      className={
        name === "Delete"
          ? "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }
      onClick={handlerClick}
    >
      {name}
    </button>
  );
};
