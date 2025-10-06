import React from "react";
import PosterMovie from "./PosterMovie";

const ListItemListed = ({
  title = "How to lose a guy in 10 days",
  year = 2003,
}) => {
  return (
    <div className="basic-flex-row">
      <PosterMovie
        posterUrl={
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThMmQN_yXAf5wfRINPKMJVdsBlbccvKwgaEHn2mc0Gc7EPZx3rUF6m4M0fxa0lnC4rWZwSEQ"
        }
        width={"4"}
      ></PosterMovie>
      <div className="">
        <div className="basic-flex-row">
          <p>{title}</p>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItemListed;
