import React from "react";

export const MasonryArticleItem = ({
  children,
  srcBanner,
  titleMasonryItem,
}) => {
  return (
    <>
      <div className="masonry-item-article">
        <div className="img-item-masonry">
          <img
            alt="img-article"
            src={srcBanner}
            className="img-full-cover"
          ></img>
        </div>
        <div>
          <h2>{titleMasonryItem}</h2>
          {children}
          <a title="artiuclo" href="#32">
            Read Story
          </a>
        </div>
      </div>
    </>
  );
};

export default MasonryArticleItem;
