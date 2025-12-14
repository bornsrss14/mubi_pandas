import React, { useContext, useEffect, useState } from "react";
import TagElement from "../core/TagElement";
import ContainerFilms from "../components/ContainerFilms";
import ListItemListed from "../core/ListItemListed";
import SearchBar from "../core/SearchBar";
import movieService from "../services/movieDatabaseService";
import FilterMovies from "../components/FilterMovies";
import { UserContext } from "../App";
import { IconMenu4, IconLayoutGridRemove } from "@tabler/icons-react";
import ListService from "../services/listService";

const NewListBoilerplate = () => {
  const { mainUserData } = useContext(UserContext); //mainUserData.id
  const [draftEntry, setDraftEntry] = useState({
    id_user: mainUserData?.id,
    title: "",
    brief_description: "",
    is_public: 1,
    entries: [],
  });

  useEffect(() => {
    setDraftEntry((prev) => ({ ...prev, id_user: mainUserData?.id }));
  }, [mainUserData?.id]);

  const [query, setQuery] = useState("");
  const [searchFound, setSearchFound] = useState([]);
  const [posters, setPosters] = useState([]);
  const ids = draftEntry.entries.map((id) => id.id_mubi_tmdb);

  const handleSearch = async (searchQuery) => {
    if (!searchQuery || searchQuery.length < 2) {
      setSearchFound([]);
      return;
    }
    const results = await movieService.searchMovies(searchQuery);
    setSearchFound(results);
  };

  const updateDraft = (key, value) => {
    setDraftEntry((prev) => ({ ...prev, [key]: value }));
  };

  const addMovieToDrafts = (entry) => {
    setDraftEntry((prev) => {
      const exists = prev.entries.some(
        (m) => m.id_mubi_tmdb === entry.id_mubi_tmdb
      );

      if (exists) {
        console.log(
          `Movie with id_mubi_tmdb: ${entry.id_mubi_tmdb} already exists in this list`
        );
        return prev;
      }

      const nextPosition = prev.entries.length + 1;

      return {
        ...prev,
        entries: [
          ...prev.entries,
          {
            ...entry,
            position: nextPosition,
          },
        ],
      };
    });
  };

  const removeMovieFromDrafts = (id_mubi_tmdb) => {
    setDraftEntry((prev) => {
      return {
        ...prev,
        entries: prev.entries.filter(
          (entry) => entry.id_mubi_tmdb !== id_mubi_tmdb
        ),
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
        const posters = await movieService.getMoviePoster(
          draftEntry.entries.map((id) => id.id_mubi_tmdb)
        );
        setPosters(posters);
      } catch (error) {}
    }
    fetchPosters();
  }, [draftEntry]);

  const handleAddNewList = async () => {
    console.log("Esto agrega la lista");
    try {
      await ListService.addListWithEntries(draftEntry);
      console.log("lista creada exitosamente ♥️");
      setDraftEntry({
        id_user: mainUserData?.id,
        title: null,
        brief_description: null,
        is_public: 1,
        entries: [],
      });
    } catch (error) {
      console.error("Something went wrong trying to create the list");
      alert(
        error.message ||
          "Error al agregar la lista de películas con entries(╯°□°）╯"
      );
    }
  };

  return (
    <div className="section-persentage">
      <TagElement txt={"New List"}></TagElement>
      <main>
        <form className="form-settings grid-new_list_desktop" noValidate>
          <div>
            <div className="field username-row">
              <label htmlFor="username"> 🟢 List Title</label>
              <input
                id="list-title"
                name="listTitle"
                type="text"
                value={
                  draftEntry.title
                } /* se almacena en el draft de nueva lista*/
                onChange={(e) => updateDraft("title", e.target.value)}
              />
            </div>
            <div className="field" style={{ maxWidth: "320px" }}>
              <label htmlFor="visibility">Who can view</label>
              <select
                id="visibility"
                name="visibility"
                value={draftEntry.is_public}
                onChange={(e) => updateDraft("is_public", e.target.value)}
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
                value={draftEntry.brief_description}
                onChange={(e) =>
                  updateDraft("brief_description", e.target.value)
                }
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
          <div className="grid-btn-filters">
            <FilterMovies></FilterMovies>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <IconMenu4></IconMenu4>
              </div>
              <div>
                <IconLayoutGridRemove></IconLayoutGridRemove>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <button className="btn btn-cancel">Cancel</button>
                <button onClick={handleAddNewList} className="btn btn-save">
                  Save
                </button>
              </div>
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
                  onClick={() =>
                    addMovieToDrafts({
                      id_mubi_tmdb: item.id,
                      note: "Agregar nota",
                    })
                  }
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
          <div>
            {posters?.map((movie, index) => (
              <ListItemListed
                deleteMovieEntry={removeMovieFromDrafts}
                key={index}
                movie={movie}
              ></ListItemListed>
            ))}
          </div>
        </ContainerFilms>
      </div>
    </div>
  );
};

export default NewListBoilerplate;
