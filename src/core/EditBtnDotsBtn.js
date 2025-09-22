import { IconDots } from "@tabler/icons-react";
import { Link } from "react-router-dom";
export const EditBtnDotsBtn = () => {
  return (
    <>
      <div className="flex-dots">
        <Link to="/settings-user" className="simple-button">
          Edit profile
        </Link>
        <div className="optionsShareProfileBtn">
          <IconDots size={"17px"} stroke={"3"}></IconDots>
        </div>
      </div>
    </>
  );
};
export default EditBtnDotsBtn;
