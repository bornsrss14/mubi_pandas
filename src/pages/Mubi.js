import { IconDots } from "@tabler/icons-react";

import ItemSreamingApp from "../core/ItemSreamingApp";
import InlineNav from "../core/InlineNav";
import ContainerFilms from "../components/ContainerFilms";
import ItemCast from "../core/ItemCast";
import ReviewPreview from "../components/ReviewPreview";
import ContainerCast from "../components/ContainerCast";
import ContainerCrew from "../components/ContainerCrew";
import ContainerGenresFilm from "../components/ContainerGenresFilm";
import ContainerRelease from "../components/ContainerRelease";
import { arrayTabsMubiPage, DataProjects } from "../storage/kindOfTabs";
import { useState } from "react";

export const Mubi = () => {
  const showRatingTools = () => {
    console.log("Esto aparece cuando haces click sobre el elemento de tools");
  };
  const [activeTab, setActiveTab] = useState(1001);
  const activeTabItem = DataProjects.find((item) => item.id === activeTab);
  const ComponenteSelected = activeTabItem?.componente;
  return (
    <>
      <article className="mubi-card">
        <div className="mubi-hero">
          <button className="dots" onClick={showRatingTools}>
            <IconDots size={"19px"} stroke={"3"}></IconDots>
          </button>
          <img
            src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2020/10/neon-genesis-evangelion-y-la-revolucion-del-genero-mecha.jpg"
            alt="Fondo de Evangelion"
            className="mubi-hero-img"
          />
          <div className="mubi-overlay"></div>
        </div>

        <div className="mubi-content">
          <div className="wrapper-title-meta">
            <h2 className="mubi-title">
              Evangelion: 3.0+1.0 Thrice Upon a Time
            </h2>
            <p className="mubi-subtitle">「シン・エヴァンゲリオン劇場版:||」</p>

            <p className="mubi-meta">
              <div>
                <span>2021</span> · DIRECTED BY{" "}
              </div>
              <strong style={{ fontSize: "1.2rem" }}>
                Katsuichi Nakayama, Kazuya Tsurumaki
              </strong>
            </p>
          </div>
          <div className="mubi-poster-m">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1jilRFQUOeUIW1lsJLyTD9gyZE2G7X8N89-vIAxbE42NvBjZYNp_ANRssH_JRtwOql-0y0FGbC2fYp3JNmt6h2CyOs3VxKjhtmNp0lpKRg"
              alt="Poster Evangelion"
            />
          </div>
        </div>
        <section className="mubi-description">
          <button className="trailer-btn">🎬 Trailer</button>
          <span className="duration">155 mins</span>

          <p className="mubi-description">
            In the aftermath of the Fourth Impact, stranded without their
            Evangelions, Shinji, Asuka and Rei find shelter inn one of the rare
            pockets of humanity ...
            <a href="#sd">more</a>
          </p>
        </section>
        <section className="subtitle-section">
          <p className="txt-mubi-subtitle">RATINGS</p>
        </section>
        <section className="section-persentage">
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
        <section className="section-persentage">
          <InlineNav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            arrayTabs={arrayTabsMubiPage}
          ></InlineNav>
          <div className="content">
            {ComponenteSelected && <ComponenteSelected></ComponenteSelected>}
          </div>
        </section>
        <section>
          <div className="subtitle-section">
            <p>POPULAR REVIEWS</p>
          </div>
        </section>
      </article>
    </>
  );
};

export default Mubi;
