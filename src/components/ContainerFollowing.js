import React from "react";
import FollowerItem from "../core/FollowerItem";

const ContainerFollowing = ({ followingObj }) => {
  return (
    <div className="wrapper-container">
      {followingObj.map((following, index) => (
        <FollowerItem
          key={index}
          follower={following}
          withBtn={true}
          imgProfile={
            "https://i.pinimg.com/474x/06/62/83/0662830d859987b84a0ac5c661c93cb9.jpg"
          }
        ></FollowerItem>
      ))}
    </div>
  );
};

export default ContainerFollowing;
