import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-32 col-span-1">
      <div className="shadow-sm">
        <ul className="mb-2">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Short</li>
        </ul>
        <h1 className="font-bold">Subscription</h1>
        <ul className="mb-2">
          <li className="text-sm">
            <FontAwesomeIcon className="me-2" icon={faMusic} />
            Music
          </li>
          <li className="text-sm">
            <FontAwesomeIcon className="me-2" icon={faMusic} />
            Sport
          </li>
          <li className="text-sm">
            <FontAwesomeIcon className="me-2" icon={faMusic} />
            Movie
          </li>
        </ul>
        <h1 className="font-bold">Explore</h1>
        <ul className="mb-2">
          <li className="text-sm">
            <FontAwesomeIcon className="me-2" icon={faMusic} />
            Trending
          </li>
          <li className="text-sm">
            <FontAwesomeIcon className="me-2" icon={faMusic} />
            Shopping
          </li>
          <li className="text-sm">
            <FontAwesomeIcon className="me-2" icon={faMusic} />
            Live
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
