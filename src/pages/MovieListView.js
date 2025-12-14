import FilterMovies from "../components/FilterMovies";
import { IconQuoteFilled } from "@tabler/icons-react";
import LinkPoster from "../core/LinkPoster";
import { Link, useParams } from "react-router-dom";
import { DataNotesRelatedLists } from "../storage/tempMovieData";
import ProfilePicUsername from "../core/ProfilePicUsername";
import ContainerFilms from "../components/ContainerFilms";
import { formatDate, getMubisByIds } from "../utils/dateUtils";
import { useContext } from "react";
import { UserContext } from "../App";
const MovieListView = ({ listsPerUser, movieItem }) => {
  const { id } = useParams();
  const { mainUserData, myLists } = useContext(UserContext);
  console.log(mainUserData);

  const listWithMubis = listsPerUser.map((obj) => ({
    ...obj,
    moviesData: getMubisByIds(obj.mubis),
  }));

  const itemLista = listWithMubis.find((item) => item._id === Number(id));
  const matchingNotes = DataNotesRelatedLists.filter(
    (itemNote) =>
      itemNote?.list === Number(id) &&
      itemLista?.mubis.some((mubiItem) => mubiItem.id === itemNote.id_mubi)
  );
  if (!itemLista) {
    return (
      <div>
        <section className="section-persentage ">
          <div
            style={{
              margin: "14rem auto",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <h1 style={{ fontSize: "4rem" }}>(╯°□°)╯︵ ┻━┻</h1>
            <p style={{ fontSize: "2rem" }}>Something's missing.</p>
            <p style={{ fontSize: "1.3rem" }}>
              This page is missing or you assembled the link incorrectly.
            </p>
            <Link to={"/"}>
              <button
                style={{ textTransform: "uppercase" }}
                className="simple-button"
              >
                Go to homepage <span></span>
              </button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
  const showNotes = () => {
    console.log("esto cambia a la vista de notas");
  };

  return (
    <div className="section-persentage-home">
      <div className="basic-flex-row">
        <ProfilePicUsername
          imgProfile={mainUserData?.profile_pic_url}
          withNickname={false}
          measure="2rem"
        ></ProfilePicUsername>
        <p>
          List by <strong> {mainUserData.username}</strong>
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
