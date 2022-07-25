import React from "react";

function Search({onSearchInput, searchBy, onSearchSubmit}) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit ', searchBy)
    onSearchSubmit(searchBy)
    onSearchInput('')
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchBy}
        onChange={(e) => onSearchInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
