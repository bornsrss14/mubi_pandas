import { useState, useRef, useEffect } from "react";
import { useMubiSearch } from "../hooks/useMubiSearch";
import { Link } from "react-router-dom";

export const MainFilms = () => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const { results, loading } = useMubiSearch(query);

  //la forma en que cierro el dropdown cuando hay un click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(true);
  };

  const handleMovieSelect = (movie) => {
    console.log("Selected movie", movie);
    setShowDropdown(false);
    setQuery("");
  };
  return (
    <div style={{ marginTop: "2rem" }}>
      <div className="search-container">
        <label className="search-label">FIND A FILM</label>

        <div className="search-input-wrapper" ref={dropdownRef}>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => query && setShowDropdown(true)}
            placeholder="Type to search..."
            className="search-input"
          />

          {showDropdown && query && (
            <div className="search-dropdown">
              {loading && (
                <div className="dropdown-item loading">Buscando...</div>
              )}

              {!loading && results.length === 0 && (
                <div className="dropdown-item no-results">
                  No se encontraron resultados
                </div>
              )}

              {!loading &&
                results.map((movie) => (
                  <Link to={`/mubi&detail/${movie.id}`}>
                    <div
                      key={movie.id}
                      className="dropdown-item"
                      onClick={() => handleMovieSelect(movie)}
                    >
                      <span className="movie-title">
                        {movie.title} ({movie.year})
                      </span>
                      {movie.director && (
                        <span className="movie-director">{movie.director}</span>
                      )}
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MainFilms;
