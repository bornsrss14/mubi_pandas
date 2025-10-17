import FollowerItem from "../core/FollowerItem";

const ContainerFollowers = ({ followersObj }) => {
  return (
    <div className="wrapper-container">
      {followersObj.map((follower) => (
        <FollowerItem
          follower={follower}
          withBtn={true}
          imgProfile={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaLa9saeNyN6hC-rhX1lFUqsOP2htI8Jzxw&s"
          }
        ></FollowerItem>
      ))}
    </div>
  );
};

export default ContainerFollowers;
