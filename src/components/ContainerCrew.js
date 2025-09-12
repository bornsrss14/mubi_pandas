import React from "react";
import ContainerFilms from "./ContainerFilms";
import ItemCast from "../core/ItemCast";

export const ContainerCrew = () => {
  return (
    <>
      <ContainerFilms>
        <section className="">
          <div>
            <p>DIRECTOR</p>
            <div className="div-flex-cast">
              <ItemCast nameProp={"M. Night Shyamalan"} />
              <ItemCast nameProp={"Danny Boyle"} />
            </div>
          </div>
          <div>
            <p>PRODUCERS</p>
            <div className="div-flex-cast">
              <ItemCast nameProp={"Jason Blum"} />
              <ItemCast nameProp={"Marc Bienstock"} />
              <ItemCast nameProp={"Dom Catanzarite"} />
              <ItemCast nameProp={"Dan"} />
            </div>
          </div>

          <div>
            <p>WRITER</p>
            <div className="div-flex-cast">
              <ItemCast nameProp={"Douglas Aibel"} />
              <ItemCast nameProp={"Marc Bienstock"} />
              <ItemCast nameProp={"Mike Gioulakis"} />
            </div>
          </div>

          <div>
            <p>CASTING</p>
            <div className="div-flex-cast">
              <ItemCast nameProp={"Douglas Aibel"} />
              <ItemCast nameProp={"Colleen Kay"} />
              <ItemCast nameProp={"Henry Ruselle Bergstein"} />
            </div>
          </div>
          <div>
            <p>EDITOR</p>
            <div className="div-flex-cast">
              <ItemCast nameProp={"Douglas Aibel"} />
              <ItemCast nameProp={"Colleen Kay"} />
              <ItemCast nameProp={"Henry Ruselle Bergstein"} />
            </div>
          </div>

          <div>
            <p>CINEMATOGRAPHY</p>
            <div className="div-flex-cast">
              <ItemCast nameProp={"Roger Deakins"} />
              <ItemCast nameProp={"Emmanuel Lubezki"} />
              <ItemCast nameProp={"Rachel Morrison"} />
            </div>
          </div>

          <div>
            <p>ART DIRECTION</p>
            <div className="div-flex-cast">
              <ItemCast nameProp={"Jesse Rosenthal"}></ItemCast>
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
  );
};

export default ContainerCrew;
