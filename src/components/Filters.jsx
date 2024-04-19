// components/Filters.js
import React from 'react';

const Filters = ({ setFilters }) => {
  const handleCategoryChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: e.target.value,
    }));
  };

  const handleSourceChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      source: e.target.value,
    }));
  };

  return (
    <div className="mt-8 md:px-4">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex flex-col mb-4 md:w-1/2">
          <label htmlFor="category" className="text-sm font-semibold mb-1">Category:</label>
          <select
            id="category"
            onChange={handleCategoryChange}
            className="border rounded p-2 md:w-full w-fit bg-gray-100"
          >
            <option value="">Select category</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>
        <div className="flex flex-col mb-4 md:w-1/2">
          <label htmlFor="source" className="text-sm font-semibold mb-1">Source:</label>
          <input
            type="text"
            id="source"
            onChange={handleSourceChange}
            className="border rounded p-2 w-full bg-gray-100"
            placeholder="Enter source"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
