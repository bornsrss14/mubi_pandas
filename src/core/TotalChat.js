import { IconMessage } from "@tabler/icons-react";

export const TotalChat = ({ widthContainer = "30px" }) => {
  const styleContainer = {
    width: widthContainer,
    height: "auto",
    display: "flex",
    placeItems: "center",
  };
  return (
    <>
      <>
        <div style={styleContainer}>
          <IconMessage></IconMessage>
          <p>145</p>
        </div>
      </>
    </>
  );
};
export default TotalChat;
