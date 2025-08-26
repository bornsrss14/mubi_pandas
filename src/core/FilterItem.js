import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";

export const FilterItem = ({ filterTitle }) => {
  return (
    <div className="flex-row">
      <p>{filterTitle}</p>
      <IconChevronDown stroke={"2.5px"} size={"19px"} />
    </div>
  );
};

export default FilterItem;
