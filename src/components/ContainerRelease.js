import React from "react";
import ContainerFilms from "./ContainerFilms";

export const ContainerRelease = () => {
  return (
    <>
      <ContainerFilms>
        <div>
          <p>PREMIERE</p>
          <div className="div-flex-cast">
            <div>
              <p> 26 Sep 2016</p>
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
              <div className="flag-container">
                <img
                  className="img-full-cover "
                  alt="country"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/330px-Flag_of_France.svg.png"
                ></img>
              </div>
              <p>FRA</p>
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
