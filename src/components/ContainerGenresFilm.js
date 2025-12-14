import React from "react";
import ContainerFilms from "./ContainerFilms";
import ItemCast from "../core/ItemCast";

export const ContainerGenresFilm = ({ itemMubi }) => {
  return (
    <>
      <ContainerFilms>
        <div>
          <div>
            <p>GENRES</p>
            <div className="div-flex-cast">
              {itemMubi.genres.map((item) => (
                <ItemCast nameProp={item.name} />
              ))}
            </div>
            {/* <div>
              <p>Themes</p>
              <div className="div-flex-cast">
                <ItemCast
                  nameProp={"Intense Violence and sexual transgression"}
                />
              </div>
            </div> */}
          </div>
        </div>
      </ContainerFilms>
    </>
  );
};

export default ContainerGenresFilm;
