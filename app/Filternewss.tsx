'use client'
import { useState } from "react";
import Link from "next/link";
import { categories } from "../constant";
import "../styles/globals.css";
import NavLink from "./NavLink";

function Filternewss() {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
    
  };

  return (
    <div className="relative">
      <div className="relative z-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleButtonClick}
        >
          {showOptions ? "Hide Categories" : "Show Categories"}
        </button>
      </div>

      {showOptions && (
        <div className="absolute z-20 top-12 left-0 right-0 bg-white shadow-md rounded-md p-4 w-2/5 aman">
          <div className="flex flex-wrap w-fit">
            {categories.map((category) => (
              <NavLink
                key={category}
                category={category}
                isActive={false}
                className=" text-gray-800 font-bold py-2 px-4 rounded-full "
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Filternewss;
