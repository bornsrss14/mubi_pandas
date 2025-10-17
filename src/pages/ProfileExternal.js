import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { IconPointerFilled, IconBrandInstagram } from "@tabler/icons-react";
import { arrayRanking } from "../storage/mubiRanking";
import SubNabvar from "../components/SubNabvar";
import PosterMovie from "../core/PosterMovie";
import Rating from "../core/Rating";

import { useEffect, useState } from "react";
import ProfilePicProfileView from "../core/ProfilePicProfileView";
import BasicReview from "../components/BasicReview";
import ActivityItem from "../core/ActivityItem";
import ProfilePicUsername from "../core/ProfilePicUsername";
import { following } from "../storage/kindOfTabs";
import TagElement from "../core/TagElement";
import { Link, useParams } from "react-router-dom";
import { users } from "../storage/tempMovieData";
import { getMubisByIds } from "../utils/dateUtils";
export const ProfileExternal = ({
  follower,
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
  const { id } = useParams(); // en base a este id vamos a comparar con el id de el follower ox persona
  const itemUser = users.find((user) => user?.idUser === String(id));

  if (!itemUser) {
    <p>El usuario al que intentas acceder no existe dentro de esta busqueda</p>;
  }
  console.log("El usuario que busco es", itemUser);

  const fourMubis = getMubisByIds(itemUser.favoriteFourMubis);
  console.log(fourMubis, "four mubis");
  return (
    <>
      <div className="profile-banner">
        <div className="grid-banner-profile">
          <div className="profile-edit-btns">
            <div>
              <ProfilePicProfileView
                userData={itemUser}
                measure="70px"
              ></ProfilePicProfileView>
            </div>
          </div>
          <div className="basic-flex-row">
            <div className="basic-flex-row">
              <IconPointerFilled stroke={1} size={14}></IconPointerFilled>
              <p>{itemUser.website}v</p>
            </div>
            <div className="basic-flex-row">
              <IconBrandInstagram stroke={2} size={14}></IconBrandInstagram>
              <p>{itemUser.socialLinks.instagram}</p>
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
                <Link to={`/network/${id}`}>
                  <p className="text-bold-large">3</p>
                  <p className="text-light-gray">FOLLOWING</p>
                </Link>
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
      <section className="section-persentage">
        <TagElement txt={"bio"}></TagElement>
        <div>
          <p>{itemUser.biography}</p>
        </div>
      </section>
      <section className="section-persentage pice-hidden">
        <SubNabvar></SubNabvar>
      </section>
      <section className="section-fav-diary section-persentage">
        <div className="item-sec-fav">
          <div>
            <TagElement txt={"FAVORITE FILMS"}></TagElement>
            <div className="favorite-films-grid">
              {fourMubis.map((favItemMubi) => (
                <PosterMovie
                  key={favItemMubi}
                  posterUrl={favItemMubi.posterUrl}
                  width={7}
                ></PosterMovie>
              ))}

              {Array.from({
                length: 4 - itemUser.favoriteFourMubis.length,
              }).map((_, index) => (
                <div key={index} className="emptyPoster"></div>
              ))}
            </div>
          </div>

          {recentActivity && (
            <div style={{ margin: "3.5rem 0rem" }}>
              <TagElement txt={"RECENT ACTIVITY"}></TagElement>
              <div className="basic-flex-row">
                <ActivityItem></ActivityItem>
              </div>
            </div>
          )}
          {recentReviews && (
            <div>
              <TagElement txt={"RECENT REVIEWS"}></TagElement>
              {/* <BasicReview spoilers={false}></BasicReview> */}
            </div>
          )}

          <TagElement txt={"FOLLOWING"}></TagElement>
          <div className="basic-flex-row list-of-following">
            {following.map((follow) => (
              <div style={{ cursor: "pointer" }}>
                <ProfilePicUsername
                  measure="50px"
                  imgProfile={follow}
                  withNickname={false}
                ></ProfilePicUsername>
              </div>
            ))}
          </div>
        </div>
        <div className="item-sec-fav">
          <div>
            <TagElement txt={"RATINGS"}></TagElement>
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
export default ProfileExternal;
