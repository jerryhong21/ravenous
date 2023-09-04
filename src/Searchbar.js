import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {

  return (
    <form method="GET" name="search" target="_blank" autoComplete="on">
      <input type="text" className="form-control" id="selected-location" value="Surry Hills"/>
      {/* <span>&nbsp;&nbsp;</span> */}
      <input type="text" className="form-control" id="search-terms" value="Asian Fusion"/>
      <button className="btn btn-primary" id="search-button">Find Food</button>
    </form>
  )
}

export default SearchBar;