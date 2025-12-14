import React from "react";
import ContainerFilms from "./ContainerFilms";

export const ContainerRelease = ({ itemMubi }) => {
  return (
    <>
      <ContainerFilms>
        <div>
          <p>PREMIERE</p>
          <div className="div-flex-cast">
            <div>
              <p> {itemMubi?.release_date}</p>
            </div>
            <div
              style={{
                display: "flex",
                margin: "0 1rem",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {itemMubi?.origin_country?.map((item) => (
                <>
                  <p>— {item}</p>
                </>
              ))}
            </div>
          </div>
          <div>
            <p>More inf. at : </p>
            <div className="media-visualization-item-border">
              <p> IMDB</p>
            </div>
          </div>
        </div>
      </ContainerFilms>
    </>
  );
};

export default ContainerRelease;
