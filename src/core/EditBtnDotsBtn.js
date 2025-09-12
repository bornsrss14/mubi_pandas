import { IconDots } from "@tabler/icons-react";
export const EditBtnDotsBtn = () => {
  return (
    <>
      <div className="flex-dots">
        <button className="simple-button">Edit profile</button>
        <div className="optionsShareProfileBtn">
          <IconDots size={"17px"} stroke={"3"}></IconDots>
        </div>
      </div>
    </>
  );
};
export default EditBtnDotsBtn;
