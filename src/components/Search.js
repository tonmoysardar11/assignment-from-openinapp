import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";


const Search = () => {
  const [input, setinput] = useState("");
  
  const change = (e) => {
    setinput(e.target.value);
    
  };
  const clear = () => {
    setinput("");
  };
  return (
    <>
      <div className="w-2/3 flex justify-center items-center py-2 md:py-0 md:mx-8">
        <div className="w-full md:w-4/5 flex justify-center items-center">
          <input
            type="text"
            name="hero-field"
            className="w-full bg-transparent text-base outline-none text-gray-900 py-1 px-3 transition-colors duration-200 ease-in-out placeholder:text-text-gray-900"
            placeholder="Search..."
            value={input}
            onChange={change}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={input?'hidden':'block text-gray-500'}/>
          {input && (
            <div className="px-2 cursor-pointer text-gray-900 hover:text-gray-800">
              <FontAwesomeIcon icon={faX} onClick={clear} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
