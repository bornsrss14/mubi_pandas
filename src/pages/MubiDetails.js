import { IconDots } from "@tabler/icons-react";
import ItemSreamingApp from "../core/ItemSreamingApp";
import InlineNav from "../core/InlineNav";
import { arrayTabsMubiPage } from "../storage/kindOfTabs"; /*  */
import { createContext, useContext, useEffect, useState } from "react";
import RatingTools from "../core/RatingTools";
import ReviewPreviewSecond from "../components/ReviewPreviewSecond";
import MainFooter from "../components/MainFooter";
import TagElement from "../core/TagElement";
import { useParams } from "react-router-dom";
import { OptimizedImage } from "../hooks/useOptimizedImage";
import { LikesProvider } from "../contexts/LikesContext";
import { UserContext } from "../App";
import { WatchProvider } from "../contexts/WatchContext";
import movieDatabaseService from "../services/movieDatabaseService";
import { useMovieToggle } from "../hooks/useMovieToggle";
import ratingService from "../services/ratingService";

/*Mubi recibe un id que va a comparar para buscarlo en su ruta. */
export const RatingContext = createContext();
function MubiDetails({
  objeto,
  templateContainer,
  setActiveTab,
  activeTab,
  itemMubi,
}) {
  const userContextValue = useContext(UserContext);
  const { formData, mainUserData } = userContextValue || {};

  const { id } = useParams();
  const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

  const [showTools, setShowTools] = useState(false);

  const activeTabItem = templateContainer.find((item) => item.id === activeTab);
  const ComponenteSelected = activeTabItem?.componente; //Asigna nombre del componente que se renderizará

  /*Estados para mostrar o no la carga de las promesas resueltas de la petición de Detalle de película  */
  const [loading, setLoading] = useState();
  const [mubi, setMubi] = useState(null); //Aquì es donde temporalmente se guarda la pelìcula
  const [error, setError] = useState();
  const showRatingTools = () => {
    //esto ayuda a mostrar y esconder el componente de tools para cada película
    setShowTools((prev) => !prev);
  };
  const [ratingRecord, setRatingRecord] = useState([]);
  /*Recupero si la película seleccionada, ya tiene rating */
  useEffect(() => {
    setRatingRecord(null);
    const fetchRating = async () => {
      try {
        const record = await ratingService.getByUserAndTmdbId(
          mainUserData?.id,
          id
        );
        setRatingRecord(record.data.rating);
      } catch (error) {
        console.error("Error al encontrar el rating con el usuario y id ");
      }
    };

    if (mainUserData?.id) {
      // Solo fetch si hay usuario
      fetchRating();
    }
  }, [mainUserData?.id, id]);
  /* cada vez que cambie el ID pasado, voy a consumir getDataDetails de mi servicio  */
  useEffect(() => {
    const fetchMubiDetails = async () => {
      try {
        setLoading(true);
        setError(false);
        const movieData = await movieDatabaseService.getMovieDetails(id);
        console.log("el id de la película es", id);
        if (!movieData) {
          throw new Error("Not found :c");
        }
        setMubi(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMubiDetails();
  }, [id]);
  const { states, toggle, loadingData } = useMovieToggle(id);
  if (loading) {
    return (
      <div>
        <p>Loading details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div>
          <p>Something went wron! 🙀</p>
        </div>
      </div>
    );
  }
  if (!mubi) {
    return (
      <div>
        <div>
          <p>We couldn't find this movie, try again!</p>
        </div>
      </div>
    );
  }
  console.log(ratingRecord, "⭐⭐⭐⭐⭐📩");
  return (
    <>
      <article className="mubi-card">
        <div
          className={showTools ? "overly-mubi-true" : "overly-mubi-false"}
        ></div>
        <div
          className={showTools ? "rating-tools-show" : "rating-tools-hidden"}
        >
          <RatingContext.Provider value={{ ratingRecord, setRatingRecord }}>
            <WatchProvider>
              <LikesProvider>
                <RatingTools
                  states={states}
                  toggle={toggle}
                  loadingData={loadingData}
                  id_tmdb={id}
                  mubi={mubi.id}
                  user={formData.idUser}
                  showRatingTools={showRatingTools}
                ></RatingTools>
              </LikesProvider>
            </WatchProvider>
          </RatingContext.Provider>
        </div>
        <div className="mubi-hero">
          <button className="dots" onClick={showRatingTools}>
            <IconDots size={"19px"} stroke={"3"}></IconDots>
          </button>
          <img
            src={`${TMDB_IMAGE_BASE_URL}w500${mubi.backdrop_path}`}
            /*
          src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2020/10/neon-genesis-evangelion-y-la-revolucion-del-genero-mecha.jpg"
           */
            alt="Fondo de Evangelion"
            className="mubi-hero-img"
          />
          <div className="mubi-overlay"></div>
        </div>

        <div className="mubi-content">
          <div className="wrapper-title-meta">
            <h2 className="mubi-title">
              {mubi.title || "Evangelion: 3.0+1.0 Thrice Upon a Time"}
            </h2>
            {mubi.originalTitle && (
              <p className="mubi-subtitle"> {mubi.originalTitle}</p>
            )}

            <div className="mubi-meta">
              <p>
                <span>{mubi.release_date}</span> · DIRECTED BY{" "}
              </p>
              <strong style={{ fontSize: "1.2rem" }}>
                {mubi.director || "director"}
              </strong>
            </div>
          </div>
          <div className="mubi-poster-m">
            <OptimizedImage
              placeholder="/lowQuality.jpeg"
              className="rounded shadow"
              skeletonClassName="rounded"
              alt="poster"
              src={`${TMDB_IMAGE_BASE_URL}w500${mubi.poster_path}`}
            ></OptimizedImage>
          </div>
        </div>
        <section className="mubi-description">
          <button className="trailer-btn">🎬 Trailer</button>
          <span className="duration">{mubi.runtime} mins</span>

          <p className="mubi-description">
            {mubi.overview}
            <a href="#sd"> more</a>
          </p>
        </section>

        <TagElement txt={"RATINGS"}></TagElement>
        <section className="">
          <div>
            <p>WHERE TO WATCH</p>
            <ItemSreamingApp plataform={"Amazon MX"}></ItemSreamingApp>
            <ItemSreamingApp
              plataform={"Netflix MX"}
              iconPlataform={
                "https://media.licdn.com/dms/image/v2/D4E0BAQGMva5_E8pUjw/company-logo_200_200/company-logo_200_200/0/1736276678240/netflix_logo?e=2147483647&v=beta&t=-84GbYZIgL-lNtKMkXAk-OE1L6VJVMfBSLJRG8FLkVY"
              }
            ></ItemSreamingApp>
            <ItemSreamingApp
              plataform={"Apple TV"}
              iconPlataform="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRELLKoluS51qond1uFLC3HFGHqexq6KIeyZQ&s"
            ></ItemSreamingApp>
          </div>
        </section>
        <section>
          <InlineNav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            arrayTabs={arrayTabsMubiPage}
          ></InlineNav>
          <div className="content">
            {ComponenteSelected && (
              <ComponenteSelected itemMubi={mubi}></ComponenteSelected>
            )}
          </div>
        </section>
        <section>
          <TagElement txt={"POPULAR REVIEWS"}></TagElement>
          <div>
            <ReviewPreviewSecond
              nickname={"muz129"}
              imgProfile={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PxU_RqoB6hZj2TBoFiz_nWYOTjQCCPrCvw&s"
              }
            ></ReviewPreviewSecond>
          </div>
        </section>
      </article>
      <MainFooter></MainFooter>
    </>
  );
}

export default MubiDetails;
