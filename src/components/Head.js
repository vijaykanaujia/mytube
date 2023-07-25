import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const searchTimer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions(searchQuery);
      }
    }, 200);
    return () => {
      clearTimeout(searchTimer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async (query) => {
    const data = await fetch(YOUTUBE_SEARCH_API + query);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [query]: json[1],
      })
    );
  };
  return (
    <div className="grid grid-flow-col">
      <div className="flex col-span-3">
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
      <div className="p-4 col-span-6 text-center">
        <div className="w-full">
          <input
            type="text"
            className="w-4/5 border-solid border-2 p-2 rounded-l-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border-solid border-2 border-blue-200 rounded-r-full py-2 px-4">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed text-left bg-white py-2 px-3 mx-10 w-2/5 shadow-xl rounded-sm border-gray-400">
            <ul>
              {suggestions.map((suggestion) => {
                return (
                  <li>
                    <FontAwesomeIcon icon={faSearch} className="px-1" />
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="ms-auto col-span-3">
        <button className="p-4">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
};

export default Head;
