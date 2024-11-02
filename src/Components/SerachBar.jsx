import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative flex items-center transition-all duration-300 ease-in-out ${
        isExpanded ? "w-full lg:w-64" : "w-10"
      }`}
    >
      {isExpanded && (
        <input
          placeholder="Search doctors..."
          name="text"
          type="text"
          className={`h-10 rounded-lg border border-gray-300 outline-none pl-9 bg-white transition-all duration-300 ease-in-out placeholder-gray-400 ${
            isExpanded ? "w-full" : "w-0"
          }`}
          onBlur={() => setIsExpanded(false)} // Closes search on blur
        />
      )}
      <CiSearch
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
      />
    </div>
  );
}
