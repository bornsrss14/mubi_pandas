import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { arrayRanking } from "../storage/mubiRanking";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SubNabvar from "../components/SubNabvar";
import Rating from "../core/Rating";

import { useContext, useEffect, useState } from "react";
import ProfilePicProfileView from "../core/ProfilePicProfileView";
import BasicReview from "../components/BasicReview";
import ActivityItem from "../core/ActivityItem";
import TagElement from "../core/TagElement";
import { Link } from "react-router-dom";
import LinkPoster from "../core/LinkPoster";
import { UserContext } from "../App";
import { getMubisByIds } from "../utils/dateUtils";
export const Profile = ({
  formData,
  setFormData,
  noDaysRated = 8,
  recentActivity = true,
  recentReviews = true,
  spoilers = true,
  movieTitled = "Moonlight",
}) => {
  const totalMubis = arrayRanking.length;

  const [starsRank, setStarsRank] = useState({
    oneStars: 0,
    twoStars: 0,
    threeStars: 0,
    fourStars: 0,
    fiveStars: 0,
  });

  function setRanking(arrayRanking) {
    const keys = [
      "oneStars",
      "twoStars",
      "threeStars",
      "fourStars",
      "fiveStars",
    ];

    //1) contar las ocurrencias que hay de cada ranking
    const counts = arrayRanking.reduce((acc, item) => {
      const r = Number(item.ranking);
      if (r >= 1 && r <= 5) {
        const key = keys[r - 1];
        acc[key] = (acc[key] || 0) + 1;
      }
      return acc;
    }, {});

    //actualiza mi estado de una sola vez y de forma acumulaiva
    setStarsRank(() => {
      const base = {
        oneStars: 0,
        twoStars: 0,
        threeStars: 0,
        fourStars: 0,
        fiveStars: 0,
      };
      return { ...base, ...counts };
    });
  }
  useEffect(() => {
    if (arrayRanking?.length) setRanking(arrayRanking);
  }, []);
  const starsPersentage = {
    oneStars: totalMubis ? (starsRank.oneStars / totalMubis) * 100 : 0,
    twoStars: totalMubis ? (starsRank.twoStars / totalMubis) * 100 : 0,
    threeStars: totalMubis ? (starsRank.threeStars / totalMubis) * 100 : 0,
    fourStars: totalMubis ? (starsRank.fourStars / totalMubis) * 100 : 0,
    fiveStars: totalMubis ? (starsRank.fiveStars / totalMubis) * 100 : 0,
  };
  const starLabels = {
    oneStars: "1★",
    twoStars: "2★",
    threeStars: "3★",
    fourStars: "4★",
    fiveStars: "5★",
  };

  const dataGraphic = Object.entries(starsPersentage).map(([key, value]) => ({
    nameData: starLabels[key] || key, // aquí se asigna "oneStars", "twoStars", ...
    value, // el valor en porcentaje
  }));

  //Cuál es el valor más alto de starsPersentage
  function getHighest(arrayEnumerar) {
    return Math.max(...Object.values(arrayEnumerar));
  }

  const { reviewsUser, setReviewsUser } = useContext(UserContext);

  const reviewsWithMubis = reviewsUser.map((obj) => ({
    ...obj,
    movieReviewed: getMubisByIds(obj.id_mubi),
  }));

  const fourMovies = getMubisByIds(formData?.favoriteFourMubis);

  /*
  const { id } = useParams();
  const userData = getUserById(id);
  */

  console.log("Estas son mis favoritas", fourMovies);

  return (
    <>
      <div className="profile-banner">
        <div className="grid-banner-profile">
          <div className="profile-edit-btns">
            <div>
              <ProfilePicProfileView
                userData={formData}
                measure="70px"
              ></ProfilePicProfileView>
            </div>
          </div>
          <div>
            <div className="wrapp-stats-numbers">
              <button className="eachStatNumber">
                <Link to={"/likes-user"}>
                  <p className="text-bold-large">2</p>
                  <p className="text-light-gray">FILMS</p>
                </Link>
              </button>
              <button className="eachStatNumber">
                <Link to={"/diary-user"}>
                  <p className="text-bold-large">1</p>
                  <p className="text-light-gray">THIS YEAR</p>
                </Link>
              </button>
              <button className="eachStatNumber">
                <Link to={`/network/${formData.idUser}`}>
                  <p className="text-bold-large">3</p>
                  <p className="text-light-gray">FOLLOWING</p>
                </Link>
              </button>
              <button className="eachStatNumber">
                <Link to={"/network"}>
                  <p className="text-bold-large">0</p>
                  <p className="text-light-gray">FOLLOWERS</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="section-persentage pice-hidden">
        <SubNabvar></SubNabvar>
      </section>
      <section className="section-fav-diary section-persentage">
        <div className="item-sec-fav">
          <div>
            <TagElement txt={"favorite movies"}></TagElement>
            <div className="favorite-films-grid">
              {fourMovies?.map((favItemMubi) => (
                <LinkPoster
                  mubi={favItemMubi}
                  key={favItemMubi}
                  posterUrl={favItemMubi.posterUrl}
                  width={7}
                ></LinkPoster>
              ))}

              {Array.from({
                length: 4 - formData?.favoriteFourMubis?.length,
              }).map((_, index) => (
                <div key={index} className="emptyPoster"></div>
              ))}
            </div>
          </div>

          {recentActivity && (
            <div style={{ margin: "3.5rem 0rem" }}>
              <TagElement txt={"recent likes"}>
                {
                  <div>
                    <FontAwesomeIcon icon={faHeart} /> ALL{" "}
                  </div>
                }
              </TagElement>
              <div className="basic-flex-row">
                <ActivityItem></ActivityItem>
              </div>
            </div>
          )}

          {recentReviews && (
            <div>
              <TagElement txt={"Recent Reviews"}>{<p>MORE</p>}</TagElement>
              {reviewsWithMubis.slice(0, 3).map((review) => (
                <BasicReview
                  key={review.id}
                  objeto={review}
                  spoilers={false}
                ></BasicReview>
              ))}
            </div>
          )}
        </div>
        <div className="item-sec-fav">
          <div>
            <TagElement txt={"ratings"}>
              {<p>{arrayRanking.length}</p>}
            </TagElement>
            <div
              style={{
                width: "100%",
                height: "14rem",
              }}
            >
              <ResponsiveContainer width={"100%"} height={100}>
                <BarChart data={dataGraphic}>
                  <XAxis dataKey={"nameData"} />
                  <YAxis domain={[0, getHighest(starsPersentage)]} />
                  <Tooltip formatter={(val) => `${val.toFixed(1)}%`} />
                  <Bar dataKey="value" fill="rgb(102, 119, 136)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <TagElement txt={"DIARY"}></TagElement>
            <div>
              <div>
                {arrayRanking.slice(1, 4).map((item, index) => (
                  <div
                    key={item.id || index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: ".5rem 0rem",
                    }}
                  >
                    <p className="txt-rated">
                      You rated{" "}
                      <span className="title-rated-movie">
                        {item.mubiTitle}
                      </span>{" "}
                      with:{" "}
                    </p>
                    <Rating
                      customColor="yellow"
                      starSize={7}
                      noStars={item.ranking}
                      toRate={false}
                    ></Rating>
                    <p>
                      <span>{noDaysRated}</span>d
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
