import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ProfilePicUsername from "../core/ProfilePicUsername";
import TotalChat from "../core/TotalChat";

export const FooterListPreview = () => {
  return (
    <div>
      <div>
        <p className="txt-subtitle-list-preview">
          Movies everyone should watch at least once during their life
        </p>
      </div>
      <div className="likesCount">
        <ProfilePicUsername
          userName="pandas"
          imgProfile={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZ5R7s3wzs8MbrqE3zVzFi1J8JnY2z0q9kpBTZ13-lssyyG6InQ9P3sEJWydGsnvXCBE&usqp=CAU"
          }
          withIcon={false}
          measure={"23px"}
        />
        <div className="likesCount">
          <FontAwesomeIcon icon={faHeart} /> <p>282K</p>
          <TotalChat></TotalChat>
        </div>
      </div>
    </div>
  );
};
export default FooterListPreview;
