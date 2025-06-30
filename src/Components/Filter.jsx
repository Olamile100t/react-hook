import React from 'react';

const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div className="flex justify-around h-10">
      <input className='border-1 px-2'
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input className='border-1 px-2 w-40'
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="10"
        onChange={(e) => setRateFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
