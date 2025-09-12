import React from "react";

export const ItemSreamingApp = ({
  iconPlataform = "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
  plataform,
}) => {
  return (
    <div className="item-plataform">
      <div className="icon-plataform">
        <img
          src={iconPlataform}
          alt="img-icon"
          className="img-full-cover"
        ></img>
      </div>
      <p>{plataform}</p>
      <div>
        <div style={{ display: "flex", gap: ".4rem" }}>
          <div className="media-visualization-item">
            <p>RENT</p>
          </div>
          <div className="media-visualization-item">
            <p>BUY</p>
          </div>
          <div className="media-visualization-item">
            <p>DISC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSreamingApp;
