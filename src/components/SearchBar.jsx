// components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    setSearchQuery(query);
  };

  return (
    <div className="mt-6 flex flex-col justify-center items-center ">
      {/* <h2 className="text-xl font-semibold mb-2">Search</h2> */}
      <div className="flex ">
        <input
          type="text"
          placeholder="Search News "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded-l p-3 bg-slate-200 w-[280px] md:w-[800px] focus:outline-none "
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white rounded-r p-2 ">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
