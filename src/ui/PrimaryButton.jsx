import React from "react";

const PrimaryButton = ({ onClick, children, outline, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        outline
          ? "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white hover:border-white"
          : "bg-primary text-white"
      }
          px-5 py-2 rounded-lg uppercase font-bold ${className && className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
