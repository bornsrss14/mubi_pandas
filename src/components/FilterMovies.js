import {
  IconEyeFilled,
  IconChevronDown,
  IconColumns1Filled,
  IconLayoutGridFilled,
} from "@tabler/icons-react";
import FilterItem from "../core/FilterItem";

export const FilterMovies = () => {
  return (
    <div className="container-filters flex-row">
      <p>watched</p>
      <ul className="flex-row">
        <li>
          <FilterItem filterTitle={"Rating"} />
        </li>
        <li>
          <FilterItem filterTitle={"Decade"} />
        </li>
        <li>
          <FilterItem filterTitle={"Genre"} />
        </li>
        <li>
          <FilterItem filterTitle={"Sort by RELEASE DATE"} />
        </li>
        <li>
          <div className="flex-row">
            <IconEyeFilled size={"19px"}></IconEyeFilled>
            <IconChevronDown stroke={"2.5px"} />
          </div>
        </li>
        <li>
          <div>
            <IconColumns1Filled />
            <IconLayoutGridFilled />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterMovies;
