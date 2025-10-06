import {
  IconMenu3,
  IconLayoutGrid,
  IconColumns1Filled,
  IconLayoutGridFilled,
  IconAdjustmentsHorizontal,
} from "@tabler/icons-react";
import FilterItem from "../core/FilterItem";
import { useState } from "react";

export const FilterMovies = ({
  extraFilters,
  children,
  /* esta propiedad es solo default */
  arrayFilters = [
    { idTab: 1, targetTab: "Service" },
    { idTab: 2, targetTab: "Genre" },
  ],
  subtitle = "watched",
}) => {
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);

  const toggleFilters = () => {
    setFiltersIsOpen((prev) => !prev);
    console.log("esto cambia falso a verdadero and viseversa");
  };
  return (
    <div className="container-filters">
      <header className="second-header">
        <div>
          <p style={{ fontSize: "1.2rem" }}>{subtitle}</p>
        </div>
        <div className="basic-flex-row">
          <button
            aria-label="Abrir filtros"
            aria-expanded={filtersIsOpen}
            onClick={toggleFilters}
            className="burger-button"
          >
            <IconAdjustmentsHorizontal
              color="white"
              size={"19px"}
              stroke={1}
            ></IconAdjustmentsHorizontal>
          </button>

          {extraFilters && (
            <>
              <button className="burger-button">
                <IconLayoutGrid
                  color="white"
                  size={"19px"}
                  stroke={1}
                ></IconLayoutGrid>
              </button>
              <button className="burger-button">
                <IconMenu3 color="white" size={"19px"} stroke={1}></IconMenu3>
              </button>
            </>
          )}
        </div>
      </header>

      <div className={`overly-filters-menu${filtersIsOpen ? "show" : ""}`}>
        <ul id="ul-filter" className="basic-flex-column">
          {arrayFilters.map((filtro) => (
            <li key={filtro.idTab}>
              <FilterItem filterTitle={filtro.targetTab} />
            </li>
          ))}

          <li className="visualize-grid-filters">
            <div>
              <IconColumns1Filled />
              <IconLayoutGridFilled />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterMovies;
