import React from "react";

const Search = () => {
  return (
    <div className="h-16 bg-white p-2 border-b">
      <input
        type="text"
        placeholder="Search friends..."
        className="border w-full h-full bg-slate-200 rounded-md focus:outline-none px-2"
      />
    </div>
  );
};

export default Search;
