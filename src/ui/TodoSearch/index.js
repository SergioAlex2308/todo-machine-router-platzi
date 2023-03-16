import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading, searchParams, setSearchParams }) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    searchParams = {
      search: event.target.value
    }
    setSearchParams(searchParams);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
