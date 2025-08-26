import { IconColorFilter, IconStar } from "@tabler/icons-react";
export const Rating = ({ noStars = 5, widthContainer = "5rem" }) => {
  const styleContainer = {
    width: widthContainer,
    height: "auto",
    display: "flex",
  };
  return (
    <>
      <div style={styleContainer}>
        <IconStar></IconStar>
        <IconStar></IconStar>
        <IconStar></IconStar>
        <IconStar></IconStar>
        <IconStar></IconStar>
      </div>
    </>
  );
};

export default Rating;
