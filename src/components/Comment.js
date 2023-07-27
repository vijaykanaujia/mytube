import React from "react";

const Comment = ({ comments }) => {
  const { name, text, replies } = comments;
  return (
    <div className="flex p-2 mb-2 bg-gray-100 rounded-md">
      <div>
        <img
          className="w-10 h-10 mt-2 me-4 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt={name}
        />
      </div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="font-light">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
