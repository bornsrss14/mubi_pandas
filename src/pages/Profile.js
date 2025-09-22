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
import PosterMovie from "../core/PosterMovie";
import ProfilePicUsername from "../core/ProfilePicUsername";
import Rating from "../core/Rating";
import { IconDots } from "@tabler/icons-react";

import { useEffect, useState } from "react";
import EditBtnDotsBtn from "../core/EditBtnDotsBtn";
import ProfilePicProfileView from "../core/ProfilePicProfileView";
import BasicReview from "../components/BasicReview";
import ActivityItem from "../core/ActivityItem";
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
  return (
    <>
      <div className="profile-banner">
        <div className="grid-banner-profile">
          <div className="profile-edit-btns">
            <div>
              <ProfilePicProfileView
                formData={formData}
                measure="70px"
              ></ProfilePicProfileView>
            </div>
          </div>
          <div>
            <div className="wrapp-stats-numbers">
              <div className="eachStatNumber">
                <p className="text-bold-large">2</p>
                <p className="text-light-gray">FILMS</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  placeItems: "center",
                }}
              >
                <p className="text-bold-large">1</p>
                <p className="text-light-gray">THIS YEAR</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  placeItems: "center",
                }}
              >
                <p className="text-bold-large">3</p>
                <p className="text-light-gray">FOLLOWING</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  placeItems: "center",
                }}
              >
                <p className="text-bold-large">0</p>
                <p className="text-light-gray">FOLLOWERS</p>
              </div>
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
            <div className="subtitle-section">
              <p>FAVORITE FILMS</p>
            </div>
            <div className="favorite-films-grid">
              {formData.favoriteFourMubis.map((favItemMubi) => (
                <PosterMovie
                  key={favItemMubi}
                  posterUrl={favItemMubi}
                  width={7}
                ></PosterMovie>
              ))}

              {Array.from({
                length: 4 - formData.favoriteFourMubis.length,
              }).map((_, index) => (
                <div key={index} className="emptyPoster"></div>
              ))}
            </div>
          </div>

          {recentActivity && (
            <div style={{ margin: "3.5rem 0rem" }}>
              <div className="subtitle-section">
                <p>RECENT ACTIVITY</p>
              </div>
              <div className="basic-flex-row">
                <ActivityItem></ActivityItem>
              </div>
            </div>
          )}

          {recentReviews && (
            <div>
              <div className="subtitle-section">
                <p>RECENT REVIEWS</p>
              </div>
              <BasicReview spoilers={false}></BasicReview>
            </div>
          )}
        </div>
        <div className="item-sec-fav">
          <div>
            <div className="subtitle-section">
              <p>RATINGS</p>
            </div>
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
            <div className="subtitle-section">
              <p>DIARY</p>
            </div>
            <div>
              <div>
                {arrayRanking.slice(1, 4).map((item) => (
                  <div
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
