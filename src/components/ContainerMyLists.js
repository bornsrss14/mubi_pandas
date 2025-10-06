import { Link } from "react-router-dom";
import { DataMyLists } from "../storage/tempMovieData";
import FooterListDescription from "./FooterListDescription";
import ListPreview from "./ListPreview";

const ContainerMyLists = () => {
  return (
    <>
      <div>
        {DataMyLists.map((itemLista) => (
          <Link to={`/movielistview/${itemLista._id}`}>
            <ListPreview arrayListPoster={itemLista}>
              {/* children */}
              <FooterListDescription
                itemLista={itemLista}
              ></FooterListDescription>
            </ListPreview>
          </Link>
        ))}
      </div>
      <div className="">
        <button
          className="btn-add-list"
          onClick={() => console.log("Esto deberá agregar una lista")}
        >
          {" "}
          Start a new list ...
        </button>
      </div>
    </>
  );
};

export default ContainerMyLists;
