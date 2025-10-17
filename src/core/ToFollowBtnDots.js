import { IconDots } from "@tabler/icons-react";
import { Link } from "react-router-dom";
export const ToFollowBtnDots = ({ toFollow }) => {
  return (
    <>
      <div className="flex-dots">
        <Link to="/settings-user" className="simple-button">
          {toFollow && <p> Follow</p>}
          {!toFollow && <p> Following</p>}
        </Link>
        <div className="optionsShareProfileBtn">
          <IconDots size={"17px"} stroke={"3"}></IconDots>
        </div>
      </div>
    </>
  );
};
export default ToFollowBtnDots;
