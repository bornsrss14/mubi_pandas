import React from "react";
import FollowerItem from "../core/FollowerItem";

const ContainerBlocked = () => {
  return (
    <div className="wrapper-container">
      <FollowerItem
        withBtn={false}
        imgProfile={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaLa9saeNyN6hC-rhX1lFUqsOP2htI8Jzxw&s"
        }
      ></FollowerItem>
      <FollowerItem
        withBtn={false}
        imgProfile={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaLa9saeNyN6hC-rhX1lFUqsOP2htI8Jzxw&s"
        }
      ></FollowerItem>
      <FollowerItem
        withBtn={false}
        imgProfile={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaLa9saeNyN6hC-rhX1lFUqsOP2htI8Jzxw&s"
        }
      ></FollowerItem>
      <FollowerItem
        withBtn={false}
        imgProfile={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaLa9saeNyN6hC-rhX1lFUqsOP2htI8Jzxw&s"
        }
      ></FollowerItem>
    </div>
  );
};

export default ContainerBlocked;
