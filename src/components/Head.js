import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col">
      <div className="flex col-span-1">
        <button
          onClick={() => toggleMenuHandler()}
          className="py-4 pe-4 cursor-pointer"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <a href="/" className="my-auto">
          <img
            width="80px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="LOGO"
          />
        </a>
      </div>
      <div className="p-4 col-span-10 text-center">
        <input
          type="text"
          className="w-1/2 border-solid border-2 py-2 rounded-l-full"
        />
        <button className="border-solid border-2 border-blue-200 rounded-r-full p-2">
          Search
        </button>
      </div>
      <div className="ms-auto col-span-1">
        <button className="p-4">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
};

export default Head;
