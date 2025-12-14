import React from "react";
import ContainerFilms from "./ContainerFilms";
import ItemCast from "../core/ItemCast";

export const ContainerCrew = ({ itemMubi }) => {
  return (
    <>
      <ContainerFilms>
        <section className="">
          <div>
            <p>DIRECTOR</p>
            <div className="div-flex-cast">
              <ItemCast nameProp={itemMubi.director} />
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
              {itemMubi?.crew?.map((person) =>
                person.department === "Writing" ? (
                  <ItemCast nameProp={person.name} />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          <div>
            <p>CASTING</p>
            <div className="div-flex-cast">
              {itemMubi?.crew?.map((person) =>
                person.department === "Casting" ? (
                  <ItemCast nameProp={person.name} />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          <div>
            <p>EDITOR</p>
            <div className="div-flex-cast">
              {itemMubi?.crew?.map((person) =>
                person.department === "Editing" ? (
                  <ItemCast nameProp={person.name} />
                ) : (
                  ""
                )
              )}
            </div>
          </div>

          <div>
            <p>CINEMATOGRAPHY</p>
            <div className="div-flex-cast">
              {itemMubi?.crew?.map((person) =>
                person.department === "Camera" ? (
                  <ItemCast nameProp={person.name} />
                ) : (
                  ""
                )
              )}
            </div>
          </div>

          <div>
            <p>ART DIRECTION</p>
            <div className="div-flex-cast">
              {itemMubi?.crew?.map((person) =>
                person.department === "Art" ? (
                  <ItemCast nameProp={person.name} />
                ) : (
                  ""
                )
              )}
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
