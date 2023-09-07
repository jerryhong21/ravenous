import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Searchbar.css';

export const sortByOptions = [
  { id: "best_match", choice: "Best Match" },
  { id: "rating", choice: "Highest Rated" },
  { id: "review_count", choice: "Most Reviewed" }
];

function SearchBar() {

  const renderSortByOptions = sortByOptions.map((options) => 
    <h2 className="sort-by-options" key={options.id}>{options.choice} </h2>
  )

  return (
    <div id="searchbar" className='searchbar'>
      {renderSortByOptions}
      <form method="GET" name="search" target="_blank" autoComplete="on">
        <input type="text" className="form-control" id="selected-location" placeholder='Enter location'/>
        <input type="text" className="form-control" id="search-terms" placeholder='What are you feeling like?'/>
        <button className="btn btn-primary" id="search-button">Find Food</button>
      </form>
    </div>

  )
}

export default SearchBar;