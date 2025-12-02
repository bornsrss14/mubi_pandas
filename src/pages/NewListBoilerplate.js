import React, { useEffect, useState } from "react";
import TagElement from "../core/TagElement";
import ContainerFilms from "../components/ContainerFilms";
import ListItemListed from "../core/ListItemListed";
import SearchBar from "../core/SearchBar";
import movieService from "../services/movieDatabaseService";
import FilterMovies from "../components/FilterMovies";

const NewListBoilerplate = () => {
  const [idList, setIdList] = useState(null);
  const [draftList, setDraftList] = useState({
    listTitle: "",
    gralDescription: "",
    movies: [],
    isPublic: 1,
  });

  const [draftEntry, setDraftEntry] = useState({
    id_item_list: null, // hace referencia a la lista que acabas de crear
    id_tmdb: null,
    note: null,
    rating: null,
    position: null,
  });

  const [query, setQuery] = useState("");
  const [searchFound, setSearchFound] = useState([]);
  const [posters, setPosters] = useState([]);
  const ids = draftList.movies.map((id) => id.id);

  const handleSearch = async (searchQuery) => {
    if (!searchQuery || searchQuery.length < 2) {
      setSearchFound([]);
      return;
    }
    const results = await movieService.searchMovies(searchQuery);
    setSearchFound(results);
  };

  const updateDraft = (key, value) => {
    setDraftList((prev) => ({ ...prev, [key]: value }));
  };

  const addMovieToDrafts = (movie) => {
    setDraftList((prev) => {
      const exists = prev.movies.some((m) => m.id === movie.id);
      if (exists) {
        console.log(`Movie with id: ${movie.id} already exists in this list`);
        return prev;
      }

      return {
        ...prev,
        movies: [...prev.movies, movie],
      };
    });
  };

  /* 
director: null
id: 36628
originalTitle: "Lo"
poster: "https://image.tmdb.org/t/p/w200/ma6gQjFaEEDWCtr1h7uXXcHhNtC.jpg"
title: "Lo"
voteAverage: 6.6
year: "2009" */

  /* voy a filtrar los ids de formData*/

  useEffect(() => {
    async function fetchPosters() {
      try {
        if (!ids || ids.length === 0) return;
        const posters = await movieService.getMoviePoster(ids);
        setPosters(posters);
        console.log(posters);
      } catch (error) {}
    }
    fetchPosters();
  }, [ids]);

  return (
    <div className="section-persentage">
      <TagElement txt={"New List"}></TagElement>
      <main>
        <form className="form-settings grid-new_list_desktop" noValidate>
          <div>
            <div className="field username-row">
              <label htmlFor="username"> 🟢 List Title</label>
              <input
                id="username"
                name="userName"
                type="text"
                value={
                  draftList.listTitle
                } /* se almacena en el draft de nueva lista*/
                onChange={(e) => updateDraft("listTitle", e.target.value)}
              />
            </div>
            <div className="field" style={{ maxWidth: "320px" }}>
              <label htmlFor="visibility">Who can view</label>
              <select
                id="visibility"
                name="visibility"
                value={draftList.isPublic}
                onChange={(e) => updateDraft("isPublic", e.target.value)}
              >
                <option value={1}>Anyone - Public list</option>
                <option value={1}> Anyone with share link</option>
                <option value={0}>
                  Friends (people you follow) with share link
                </option>
                <option value={0}>Only you</option>
              </select>
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="description">Description</label>
              <textarea
                value={draftList.gralDescription}
                onChange={(e) => updateDraft("gralDescription", e.target.value)}
                className="txt-area-settings"
              ></textarea>
            </div>
          </div>
        </form>
      </main>
      <div>
        <div className="grid-search-filter">
          <div className="">
            <SearchBar
              setQuery={setQuery}
              handleSearch={handleSearch}
              query={query}
            ></SearchBar>
          </div>
          <div style={{ display: "flex" }}>
            <FilterMovies></FilterMovies>
            <div>list</div>
            <div>grid</div>
            <div>
              <button>Cancel</button>
              <button>Save</button>
            </div>
          </div>
        </div>
        {searchFound?.length > 1 ? (
          <div
            style={{
              background: "white",
              height: "14rem",
              overflowY: "auto",
            }}
          >
            <ul>
              {searchFound.map((item) => (
                <li
                  className="dropdown-item movie-title"
                  onClick={() => addMovieToDrafts(item)}
                  key={item.id}
                >
                  <span>{item.title}</span> {""}
                  <span>{item.year}</span>
                  {""}
                  <span>director</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {/*Apartir de aquí se agrega lo de la busqueda de películas */}
        <ContainerFilms>
          {/* <div>
            {draftList.movies.map((item) => (
              <p key={item.id}>{item.title}</p>
            ))}
          </div> */}
          <div>
            {posters?.map((movie) => (
              <ListItemListed movie={movie}></ListItemListed>
            ))}
          </div>
        </ContainerFilms>
      </div>
    </div>
  );
};

export default NewListBoilerplate;
