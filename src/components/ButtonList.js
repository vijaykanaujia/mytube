import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const categories = [
    { id: "cat1", name: "All" },
    { id: "cat2", name: "Gaming" },
    { id: "cat3", name: "Songs" },
    { id: "cat4", name: "News" },
  ];
  return (
    <div className="flex">
      {categories.map((cat) => {
        return <Button key={cat.id} name={cat.name} />;
      })}
    </div>
  );
};

export default ButtonList;
