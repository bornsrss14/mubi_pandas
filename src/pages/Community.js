import { useContext } from "react";
import MemberItem from "../components/MemberItem";
import TagElement from "../core/TagElement";
import { users } from "../storage/tempMovieData";
import { getMubisByIds } from "../utils/dateUtils";
import { UserContext } from "../App";

export const Community = () => {
  /*Obtiene las 4 películas favoritas de el actual usuario */
  const { formData } = useContext(UserContext);
  const allUsers = users.filter((user) => user.idUser !== formData.idUser);
  return (
    <>
      <section className="section-persentage">
        <div>
          <h3 className="username-txt">
            Film lovers, critics and friends — find popular members.{" "}
          </h3>
        </div>

        <TagElement txt={"FEATURED MEMBERS"}></TagElement>
        <div className="members-grid">
          {allUsers.map((user) => (
            <MemberItem
              name={user.givenName}
              stats={"1.2k films • 304 reviews"}
              picture={user.profilePicUrl}
              arrayPosters={getMubisByIds(user.favoriteFourMubis)}
            ></MemberItem>
          ))}
        </div>
      </section>
      <section className="section-persentage">
        <p>Aquí pretendo que random se muestre una lista para seguir</p>
      </section>
    </>
  );
};

export default Community;
