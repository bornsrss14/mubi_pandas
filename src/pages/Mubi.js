import { IconDots } from "@tabler/icons-react";
import ItemSreamingApp from "../core/ItemSreamingApp";
import InlineNav from "../core/InlineNav";
import { arrayTabsMubiPage } from "../storage/kindOfTabs"; /*  */
import { useState } from "react";
import RatingTools from "../core/RatingTools";
import ReviewPreviewSecond from "../components/ReviewPreviewSecond";
import MainFooter from "../components/MainFooter";
import TagElement from "../core/TagElement";
import LazyImg from "../services/LazyImg";
import { useParams } from "react-router-dom";
import { temDataMubisTotal } from "../storage/tempMovieData";
/*Mubi recibe un id que va a comparar para buscarlo en su ruta. */
export const Mubi = ({ templateContainer, setActiveTab, activeTab }) => {
  const { id } = useParams();
  const itemMubisList = temDataMubisTotal.find((item) => item.id === id);
  const [showTools, setShowTools] = useState(false);

  const activeTabItem = templateContainer.find((item) => item.id === activeTab);
  const ComponenteSelected = activeTabItem?.componente; //Asigna nombre del componente que se renderizará

  const showRatingTools = () => {
    //esto ayuda a mostrar y esconder el componente de tools para cada película
    setShowTools((prev) => !prev);
  };

  function SaveRate() {
    console.log("Esta función guarda el rate");
  }

  if (!itemMubisList) {
    return <p> Esta película no se encuentra disponible</p>;
  }
  return (
    <>
      <article className="mubi-card">
        <div
          className={showTools ? "overly-mubi-true" : "overly-mubi-false"}
        ></div>
        <div
          className={showTools ? "rating-tools-show" : "rating-tools-hidden"}
        >
          <RatingTools showRatingTools={showRatingTools}></RatingTools>
        </div>
        <div className="mubi-hero">
          <button className="dots" onClick={showRatingTools}>
            <IconDots size={"19px"} stroke={"3"}></IconDots>
          </button>
          <img
            src={itemMubisList.posterUrl}
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
              {itemMubisList.title || "Evangelion: 3.0+1.0 Thrice Upon a Time"}
            </h2>
            {itemMubisList.originalTitle && (
              <p className="mubi-subtitle"> {itemMubisList.originalTitle}</p>
            )}

            <div className="mubi-meta">
              <p>
                <span>{itemMubisList.year}</span> · DIRECTED BY{" "}
              </p>
              <strong style={{ fontSize: "1.2rem" }}>
                {itemMubisList.director}
              </strong>
            </div>
          </div>
          <div className="mubi-poster-m">
            <LazyImg
              placeholder={
                "https://placehold.co/200x350/14132c/FFF/?text=Loading..."
              }
              alt={"img-generica"}
              src={itemMubisList.posterUrl}
            ></LazyImg>
          </div>
        </div>
        <section className="mubi-description">
          <button className="trailer-btn">🎬 Trailer</button>
          <span className="duration">{itemMubisList.durationMinutes} mins</span>

          <p className="mubi-description">
            {itemMubisList.plot}
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
        <section style={{ marginTop: "2rem" }}>
          <InlineNav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            arrayTabs={arrayTabsMubiPage}
          ></InlineNav>
          <div className="content">
            {ComponenteSelected && (
              <ComponenteSelected itemMubi={itemMubisList}></ComponenteSelected>
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
};

export default Mubi;
