import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="text-xs px-3 py-1 m-1 bg-gray-200 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
