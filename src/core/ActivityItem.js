import React from "react";
import Rating from "./Rating";
import PosterMovie from "./PosterMovie";

export const ActivityItem = () => {
  return (
    <div>
      <PosterMovie
        width={9}
        posterUrl={
          "https://a.ltrbxd.com/resized/sm/upload/90/gn/c7/9k/qAwFbszz0kRyTuXmMeKQZCX3Q2O-0-300-0-450-crop.jpg?v=192bde15c6"
        }
      >
        <div className="ratingAndDate">
          <Rating
            customColor="white"
            starSize={10}
            widthContainer="50%"
          ></Rating>
          <p>4 Agu</p>
        </div>
      </PosterMovie>
    </div>
  );
};

export default ActivityItem;
