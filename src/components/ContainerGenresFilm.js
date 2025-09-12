import React from "react";
import ContainerFilms from "./ContainerFilms";
import ItemCast from "../core/ItemCast";

export const ContainerGenresFilm = () => {
  return (
    <>
      <ContainerFilms>
        <div>
          <div>
            <p>GENRES</p>
            <div className="div-flex-cast">
              <ItemCast nameProp={"Horror"} />
              <ItemCast nameProp={"Thriller"} />
            </div>
            <div>
              <p>Themes</p>
              <div className="div-flex-cast">
                <ItemCast
                  nameProp={"Intense Violence and sexual transgression"}
                />
                <ItemCast
                  nameProp={"Horror, the undead and Monster Classics"}
                />
                <ItemCast nameProp={"Twisted Dark Psychological Thriller"} />
                <ItemCast
                  nameProp={"Terrifying, Haunted, and Supernatural Horror"}
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerFilms>
    </>
  );
};

export default ContainerGenresFilm;
