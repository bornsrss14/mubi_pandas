import FollowerItem from "../core/FollowerItem";

const ContainerBlocked = ({ blockedObj }) => {
  return (
    <div className="wrapper-container">
      {blockedObj.map((block) => (
        <FollowerItem
          follower={block}
          withBtn={false}
          imgProfile={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaLa9saeNyN6hC-rhX1lFUqsOP2htI8Jzxw&s"
          }
        ></FollowerItem>
      ))}
    </div>
  );
};

export default ContainerBlocked;
