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
import { useBreakpoint } from "../hooks/useBreakpoint";
import { formatDateShortES } from "../utils/dateUtils";
import reviewService from "../services/reviewService";

/*Mubi receives an ID that will be compared to find it in its route. */
/* export const RatingContext = createContext(); */
export const ReviewContext = createContext();
function MubiDetails({
  objeto,
  templateContainer,
  setActiveTab,
  activeTab,
  itemMubi,
}) {
  const userContextValue = useContext(UserContext);
  const { id } = useParams(); // ← GET the id from the route param

  /*mainUserData */
  const { formData } = userContextValue || {};
  const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

  const [showTools, setShowTools] = useState(false);
  /*   const [showReviewForm, setShowReviewForm] = useState(false); */
  const activeTabItem = templateContainer.find((item) => item.id === activeTab);
  const ComponenteSelected = activeTabItem?.componente; //Assigns the name of the component to be rendered

  /*States whether show or not the resoult of charging resolved promises in the fetch of Movie Detail*/
  const [loading, setLoading] = useState();
  const [mubi, setMubi] = useState(null); //Aquì es donde temporalmente se guarda la pelìcula
  const [error, setError] = useState();

  /*Three main states to manage the pagination of reviews for a given id_tmdb*/
  const [reviewsByMubi, setReviewsByMubi] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    hasMore: true,
  });
  const REVIEWS_PER_PAGE = 3;
  const showRatingTools = () => {
    //esto ayuda a mostrar y esconder el componente de tools para cada película
    setShowTools((prev) => !prev);
  };

  /*Call detDataDetails service  function seach time id changes */
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

  const fetchReviews = async (id, page = 1) => {
    try {
      setLoadingReviews(true);
      const response = await reviewService.getByMubi(
        id,
        page,
        REVIEWS_PER_PAGE,
      );

      if (page === 1) {
        setReviewsByMubi(response?.data || []);
      } else {
        setReviewsByMubi((prev) => [...prev, ...(response.data || [])]);
      }

      setPagination({
        page: response?.pagination?.page || page,
        hasMore: response?.pagination?.hasMore || false,
      });
      console.log("Pagination updated_este no es:", {
        page: response?.pagination?.page,
        hasMore: response?.pagination?.hasMore,
      });
    } catch (error) {
      console.error("Error loading reviews:", error);
    } finally {
      setLoadingReviews(false);
    }
  };

  useEffect(() => {
    // Reset when movie changes
    setReviewsByMubi([]);
    setPagination({ page: 1, hasMore: true });
    fetchReviews(id, 1);
  }, [id]);

  const loadMoreReviews = () => {
    console.log("load more clicked!");
    console.log("pagination before:", pagination);

    if (!loadingReviews && pagination?.hasMore) {
      fetchReviews(id, pagination.page + 1);
    } else {
      console.log(
        "Bloqueado - loading:",
        loadingReviews,
        "hasMore:",
        pagination?.hasMore,
      );
    }
  };

  const { states, toggle, loadingData } = useMovieToggle(id);
  const { isMobile, isDesktop } = useBreakpoint();

  // 1-paso crear un callback para volver a cargar datos en el padre, onReviewCreated()

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
              <div className="mubi-content">
                <div className="wrapper-title-meta">
                  <h2 className="mubi-title">
                    {mubi?.title || "Evangelion: 3.0+1.0 Thrice Upon a Time"}
                  </h2>
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
                <button className="trailer-btn">🎬 Trailer</button>
                <span className="duration">{mubi?.runtime} mins</span>

                <p className="mubi-description">
                  {mubi?.overview}
                  <a href="#sd"> more</a>
                </p>
              </section>
              {isMobile && (
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
                {/* Click on  ReviewPreviewSecond ➜ <ReviewDetails /> ➜ <MubiDetails /> */}
                <div>
                  {/* Primera carga */}
                  {loadingReviews && reviewsByMubi.length === 0 && (
                    <p>Cargando reviews...</p>
                  )}

                  {/* Reviews */}
                  {reviewsByMubi.length > 0 && (
                    <>
                      {reviewsByMubi.map((r) => (
                        <ReviewPreviewSecond
                          key={r.id}
                          review={r}
                          nickname={r.username || "muz129"}
                          imgProfile={r.profile_pic_url}
                        />
                      ))}
                    </>
                  )}

                  {/* Loading more reviews */}
                  {loadingReviews && reviewsByMubi.length > 0 && (
                    <p className="loading-more">Loading more...</p>
                  )}

                  {/*Button Load More */}
                  {!loadingReviews &&
                    pagination.hasMore &&
                    reviewsByMubi.length > 0 && (
                      <button
                        onClick={loadMoreReviews}
                        className="btn-load-more"
                        onMouseEnter={() => console.log("Mouse over button")} // 👈 Test hove
                      >
                        Load More Reviews
                      </button>
                    )}

                  {/* no reviews to show */}
                  {!loadingReviews && reviewsByMubi.length === 0 && (
                    <p className="fallback-msg-reviews">
                      No reviews yet. Be the first to review! (•̀ᴗ•́)و ★
                    </p>
                  )}
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

export default MubiDetails;
