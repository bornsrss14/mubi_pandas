import { IconSearch } from "@tabler/icons-react";

export const SearchBar = ({ handleSearch, setQuery, query }) => {
  return (
    <div className={"search-wrap-uno "}>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        className="input-search-wrap"
        type="search"
        placeholder="Search movie..."
        aria-label="Buscar"
      ></input>
      <button className="input-search-btn" aria-label="Buscar">
        <IconSearch color="gray" size={"17px"}></IconSearch>
      </button>
    </div>
  );
};

export default SearchBar;
