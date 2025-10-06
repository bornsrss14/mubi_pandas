import FilterMovies from "../components/FilterMovies";
import { IconQuoteFilled } from "@tabler/icons-react";
import LinkPoster from "../core/LinkPoster";
import { useParams } from "react-router-dom";
import { DataMyLists, DataNotesRelatedLists } from "../storage/tempMovieData";
import ProfilePicUsername from "../core/ProfilePicUsername";
import ContainerFilms from "../components/ContainerFilms";
import { formatDate } from "../utils/dateUtils";
const MovieListView = () => {
  const { id } = useParams();
  const itemLista = DataMyLists.find((item) => item._id === Number(id));
  const matchingNotes = DataNotesRelatedLists.filter(
    (itemNote) =>
      itemNote.list === Number(id) &&
      itemLista.mubis.some((mubiItem) => mubiItem.id === itemNote.id_mubi)
  );
  if (!itemLista) {
    return <div>Lista no encontrada</div>;
  }
  const showNotes = () => {
    console.log("esto cambia a la vista de notas");
  };

  return (
    <div className="section-persentage">
      <div className="basic-flex-row">
        <ProfilePicUsername
          imgProfile={
            "https://www.elbuentono.com.mx/wp-content/uploads/2014/02/vanesabuganza.jpg"
          }
          withNickname={false}
          measure="2rem"
        ></ProfilePicUsername>
        <p>
          List by <strong> bornsrss</strong>
        </p>
      </div>
      <FilterMovies
        extraFilters={true}
        subtitle={`Created ${formatDate(itemLista.createdAt)}`}
      ></FilterMovies>
      <section className="sub-header-list">
        <p className="title-list">{itemLista.title}</p>
        <p className="desc-list">{itemLista.description}</p>
        <div>
          {matchingNotes.length > 0 && (
            <div className="basic-flex-row">
              <button onClick={showNotes} className="btn-notes">
                <IconQuoteFilled
                  stroke={2}
                  color="rgb(255, 136, 0)"
                  size={"1.2rem"}
                ></IconQuoteFilled>
                <p> Read notes</p>
              </button>
              <div>Hay {matchingNotes.length} nota(s) en esta lista</div>
            </div>
          )}
        </div>
      </section>
      <ContainerFilms>
        <div className="container-films-listed">
          {itemLista?.mubis.map((itemMubi) => (
            <LinkPoster posterUrl={itemMubi.posterUrl} width={"9"}></LinkPoster>
          ))}
        </div>
      </ContainerFilms>
      <section>
        <div>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </section>
    </div>
  );
};
export default MovieListView;
