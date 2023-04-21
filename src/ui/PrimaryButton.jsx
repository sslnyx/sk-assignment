import React from "react";

const PrimaryButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="bg-primary px-5 py-2 rounded-lg text-white uppercase font-bold">
      {children}
    </button>
  );
};

export default PrimaryButton;
