import React from "react";
import ContainerFilms from "./ContainerFilms";
import ItemCast from "../core/ItemCast";

export const ContainerDetails = ({ itemMubi }) => {
  return (
    <div>
      <>
        <ContainerFilms>
          <section className="">
            <div>
              <p>STUDIOS</p>
              <div className="div-flex-cast">
                {itemMubi?.production_companies?.map((studio) => (
                  <ItemCast nameProp={studio.name} />
                ))}
              </div>
            </div>
            <div>
              <p>LENGUAGE</p>
              <div className="div-flex-cast">
                <ItemCast nameProp={itemMubi.original_language} />
              </div>
            </div>

            <div>
              <p>ALTERNATIVE TITLES</p>
              <div className="div-flex-cast">
                <p style={{ margin: "0 .5rem 0rem 0" }}>
                  Cybernatural, Offline, Eliminado; Dark Web
                </p>
                <p style={{ margin: "0 .5rem" }}>Amaizade, Desfeita </p>
              </div>
            </div>

            <div>
              <p>More inf. at : </p>
              <div className="media-visualization-item-border">
                <p> IMDB</p>
              </div>
            </div>
          </section>
        </ContainerFilms>
      </>
    </div>
  );
};

export default ContainerDetails;
