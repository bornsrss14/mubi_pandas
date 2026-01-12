import { IconDots } from "@tabler/icons-react";
import ItemSreamingApp from "../core/ItemSreamingApp";
import { useContext, useEffect, useState } from "react";
import RatingTools from "../core/RatingTools";
import MainFooter from "../components/MainFooter";
import TagElement from "../core/TagElement";
import { Link, useParams } from "react-router-dom";
import { OptimizedImage } from "../hooks/useOptimizedImage";
import { LikesProvider } from "../contexts/LikesContext";
import { UserContext } from "../App";
import { WatchProvider } from "../contexts/WatchContext";
import movieDatabaseService from "../services/movieDatabaseService";
import { useMovieToggle } from "../hooks/useMovieToggle";
import { useBreakpoint } from "../hooks/useBreakpoint";
import ProfilePicUsername from "../core/ProfilePicUsername";
import CommentItem from "../core/CommentItem";
import { useReview } from "../contexts/ReviewProvider";
import { formatDateShortES } from "../utils/dateUtils";

/*Mubi recibe un id que va a comparar para buscarlo en su ruta. */
/* export const RatingContext = createContext(); */
function ReviewDetails({ objeto, setActiveTab, activeTab, itemMubi }) {
  const userContextValue = useContext(UserContext);

  const { id } = useParams(); // ← obtengo el id de url
  /*mainUserData */

  const { /*allPosters*/ allReviews, loadingRevProv, errorRevProv } =
    useReview();
  const { formData, mainUserData } = userContextValue || {};
  const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

  const [showTools, setShowTools] = useState(false);

  /*Estados para mostrar o no la carga de las promesas resueltas de la petición de Detalle de película  */
  const [loading, setLoading] = useState();
  const [mubi, setMubi] = useState(null); //Aquì es donde temporalmente se guarda la pelìcula

  const [error, setError] = useState();
  const showRatingTools = () => {
    //esto ayuda a mostrar y esconder el componente de tools para cada película
    setShowTools((prev) => !prev);
  };

  /* cada vez que cambie el ID pasado, voy a consumir getDataDetails de mi servicio  */
  useEffect(() => {
    const fetchMubiDetails = async () => {
      try {
        setLoading(true);
        setError(false);
        const movieData = await movieDatabaseService.getMovieDetails(id);

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
  const { isMobile, isDesktop } = useBreakpoint();

  const [txtArea, setTxtArea] = useState("");
  const createComment = (event) => {
    event.preventDefault();
    console.log("Aquí creo un comentario");
  };

  if (loading) {
    return (
      <div>
        <p>Loading details (－_－) zzZ ...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div>
          <p>Something went wron! (￣□￣;)</p>
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

  if (loadingRevProv)
    return (
      <section
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <p style={{ fontSize: "6rem" }}>Espera un poco, un poquito más ♪♪</p>
        <p style={{ fontSize: "10rem" }}>(・∀・)ノ⌛ </p>
      </section>
    );
  if (errorRevProv) return <p>Error: {error}</p>;

  /*Tengo que encontrar la review  que hace match con la película id_tmdb === id*/

  const itemReview = allReviews?.data?.find(
    (review) => review?.id_tmdb === parseInt(id)
  );

  return (
    <>
      <article className="mubi-card">
        <div
          className={`${
            isMobile
              ? showTools
                ? "overly-mubi-true"
                : "overly-mubi-false"
              : "none-dis"
          }`}
        ></div>
        <div
          className={`${
            isMobile
              ? showTools
                ? "rating-tools-show"
                : "rating-tools-hidden"
              : "none-dis"
          }`}
        >
          <WatchProvider>
            <LikesProvider>
              <RatingTools
                states={states}
                toggle={toggle}
                loadingData={loadingData}
                id_tmdb={id} // ← Paos el id directamente
                mubi={mubi?.id}
                user={formData.idUser}
                showRatingTools={showRatingTools}
              ></RatingTools>
            </LikesProvider>
          </WatchProvider>
        </div>
        <div className="mubi-hero">
          <button className="dots" onClick={showRatingTools}>
            <IconDots size={"19px"} stroke={"3"}></IconDots>
          </button>
          <img
            src={`${TMDB_IMAGE_BASE_URL}w500${mubi?.backdrop_path}`}
            /*
          src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2020/10/neon-genesis-evangelion-y-la-revolucion-del-genero-mecha.jpg"
           */
            alt="Fondo de Evangelion"
            className="mubi-hero-img"
          />
          <div className="mubi-overlay"></div>
        </div>
        <div className="section-grid-desktop">
          <div className="sidebar">
            {" "}
            {isDesktop && (
              <div className="mubi-poster-m">
                <OptimizedImage
                  placeholder="/lowQuality.jpeg"
                  className="rounded shadow"
                  skeletonClassName="rounded"
                  alt="poster"
                  src={`${TMDB_IMAGE_BASE_URL}w500${mubi?.poster_path}`}
                ></OptimizedImage>
              </div>
            )}
            <div style={{ overflowX: "hidden" }}>
              {isDesktop && (
                <>
                  <TagElement txt={"RATINGS"}></TagElement>
                  <section className="">
                    <div>
                      <p>WHERE TO WATCH</p>
                      <ItemSreamingApp
                        plataform={"Amazon MX"}
                      ></ItemSreamingApp>
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
                </>
              )}
            </div>
          </div>

          <div className="grid-section-detail-ranking">
            <section>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.3rem",
                }}
              >
                <ProfilePicUsername
                  imgProfile={mainUserData?.profile_pic_url}
                  withNickname={false}
                ></ProfilePicUsername>
                <p>
                  Reviewed by
                  <span className="nickname">{mainUserData?.username}</span>
                </p>
              </div>
              <div className="mubi-content">
                <div className="wrapper-title-meta">
                  <Link to={`/mubi&detail/${id}`} className="mubi-title">
                    {mubi?.title || "Evangelion: 3.0+1.0 Thrice Upon a Time"}
                  </Link>
                  {mubi?.originalTitle && (
                    <p className="mubi-subtitle"> {mubi?.originalTitle}</p>
                  )}

                  <div className="fnt-director-film">
                    <p>
                      <span>{formatDateShortES(mubi?.release_date)}</span> ·
                      DIRECTED BY{" "}
                    </p>
                    <strong>{mubi?.director || "director"}</strong>
                  </div>
                </div>
                {isMobile && (
                  <div className="mubi-poster-m">
                    <OptimizedImage
                      placeholder="/lowQuality.jpeg"
                      className="rounded shadow"
                      skeletonClassName="rounded"
                      alt="poster"
                      src={`${TMDB_IMAGE_BASE_URL}w500${mubi?.poster_path}`}
                    ></OptimizedImage>
                  </div>
                )}
              </div>
              <section className="mubi-description">
                <p>
                  Created {""}
                  <span>{formatDateShortES(itemReview?.created_at)}</span>
                </p>
                <p className="mubi-description">{itemReview?.review}</p>
              </section>
              {isMobile && (
                <>
                  <TagElement txt={"RATINGS"}></TagElement>
                  <section className="">
                    <div>
                      <p>liked this review</p>
                      <p>
                        Aquí aparecen fotos de perfil de personas que le gusta
                        este review
                      </p>
                    </div>
                  </section>
                </>
              )}
              <section>
                <TagElement txt={"liked this review"}></TagElement>
                <div className="grid-liked-pics">
                  <ProfilePicUsername
                    imgProfile={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PxU_RqoB6hZj2TBoFiz_nWYOTjQCCPrCvw&s"
                    }
                    withNickname={false}
                  ></ProfilePicUsername>
                  <ProfilePicUsername
                    imgProfile={
                      "https://a.ltrbxd.com/resized/avatar/upload/5/6/8/5/5/4/shard/avtr-0-80-0-80-crop.jpg?v=bf9f3935e7"
                    }
                    withNickname={false}
                  ></ProfilePicUsername>
                  <ProfilePicUsername
                    imgProfile={
                      "https://a.ltrbxd.com/resized/avatar/upload/4/9/9/2/4/8/shard/avtr-0-80-0-80-crop.jpg?v=f409bcda26"
                    }
                    withNickname={false}
                  ></ProfilePicUsername>
                </div>
              </section>
              <section>
                <TagElement txt={"Comments"}></TagElement>
                <div>
                  <CommentItem></CommentItem>
                  <CommentItem></CommentItem>
                </div>
              </section>
              <section className="container-txt-area">
                <div className="grid-txt-area">
                  <div>
                    <div className="field">
                      <label
                        style={{ marginBottom: "1rem" }}
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <textarea
                        value={txtArea}
                        onChange={(e) => setTxtArea(e.target.value)}
                        className="txt_comment"
                        placeholder="Replay as bornsrss..."
                      ></textarea>
                    </div>
                  </div>
                  <button
                    onClick={(e) => createComment(e)}
                    style={{ alignSelf: "flex-end" }}
                    className="btn btn-save"
                  >
                    Comment
                  </button>
                </div>
              </section>
            </section>
            <section>
              <div
                className={`${
                  isMobile
                    ? showTools
                      ? "rating-tools-show"
                      : "rating-tools-hidden"
                    : "none-di"
                }`}
              >
                <WatchProvider>
                  <LikesProvider>
                    <RatingTools
                      states={states}
                      toggle={toggle}
                      loadingData={loadingData}
                      id_tmdb={id} // ← Paos el id directamente
                      mubi={mubi?.id}
                      user={formData.idUser}
                      showRatingTools={showRatingTools}
                    ></RatingTools>
                  </LikesProvider>
                </WatchProvider>
              </div>
            </section>
          </div>
        </div>
      </article>
      <MainFooter></MainFooter>
    </>
  );
}

export default ReviewDetails;
