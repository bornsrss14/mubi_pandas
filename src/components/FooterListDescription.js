import { IconUserStar, IconPencil } from "@tabler/icons-react";
const FooterListDescription = ({ numFilms = 4, itemLista }) => {
  return (
    <div>
      <div className="basic-flex-row">
        {" "}
        <p>{itemLista.title}</p>
        <div className="optionsShareProfileBtn">
          <IconUserStar size={"13px"} color="white" stroke={2}></IconUserStar>
        </div>
      </div>
      <div className="basic-flex-row">
        <p>
          {itemLista.entries.length} <span> films</span>
        </p>
        <div>
          <IconPencil size={"20px"} color="white" stroke={2}></IconPencil>
        </div>
      </div>
      <div>
        <p>{itemLista.brief_description}</p>
      </div>
    </div>
  );
};

export default FooterListDescription;
