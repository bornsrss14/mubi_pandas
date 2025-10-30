import FilterMovies from "../components/FilterMovies";
import { IconQuoteFilled } from "@tabler/icons-react";
import LinkPoster from "../core/LinkPoster";
import { useParams } from "react-router-dom";
import { DataNotesRelatedLists } from "../storage/tempMovieData";
import ProfilePicUsername from "../core/ProfilePicUsername";
import ContainerFilms from "../components/ContainerFilms";
import { formatDate, getMubisByIds } from "../utils/dateUtils";
const MovieListView = ({ listsPerUser }) => {
  const { id } = useParams();

  const listWithMubis = listsPerUser.map((obj) => ({
    ...obj,
    moviesData: getMubisByIds(obj.mubis),
  }));
  console.log("🍿", listWithMubis);

  const itemLista = listWithMubis.find((item) => item._id === Number(id));
  const matchingNotes = DataNotesRelatedLists.filter(
    (itemNote) =>
      itemNote?.list === Number(id) &&
      itemLista?.mubis.some((mubiItem) => mubiItem.id === itemNote.id_mubi)
  );
  if (!itemLista) {
    return (
      <div>
        <section className="section-persentage basic-flex-row">
          <div></div>
          <div>
            <h1>404</h1>
            <p>Something's missing.</p>
            <p>This page is missing or you assembled the link incorrectly.</p>
            <button>
              Go to homepage <span></span>
            </button>
          </div>
        </section>
      </div>
    );
  }
  console.log("itemLista", itemLista);
  const showNotes = () => {
    console.log("esto cambia a la vista de notas");
  };

  return (
    <div className="section-persentage">
      <div className="basic-flex-row">
        <ProfilePicUsername
          imgProfile={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiBzbuoRXqXqixKnB5vRM2M5QNA-aNXwYGFy-tI0x-FIecdIniU5240RIV5-6PPw3tSw&usqp=CAU"
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
          {itemLista?.moviesData.map((itemMubi, index) => (
            <LinkPoster
              mubi={itemMubi}
              key={index}
              posterUrl={itemMubi.posterUrl}
              width={"9"}
            ></LinkPoster>
          ))}
        </div>
      </ContainerFilms>
      <section>
        <div>
          <button className="tool-rating"> Show your activity</button>
          <button className="tool-rating">Add this film to list</button>
          <button className="tool-rating">Go to film</button>
          <button className="tool-rating">Share this review</button>
        </div>
      </section>
    </div>
  );
};
export default MovieListView;
