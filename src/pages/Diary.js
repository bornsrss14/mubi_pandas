import { useContext, useEffect, useState } from "react";
import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";

import { FilterDiary } from "../storage/kindOfTabs";
import { UserContext } from "../App";
import ratingService from "../services/ratingService";
import BasicReview from "../components/BasicReview";
import { useReview } from "../contexts/ReviewProvider";

export const Diary = () => {
  const { mainUserData } = useContext(UserContext);
  const [allRatings, setAllRatings] = useState();
  //Definir la función para recuperar todas las Reviews que he hecho

  const { allPosters, allReviews } = useReview();
  useEffect(() => {
    const fetchRatings = async () => {
      try {
        if (!mainUserData?.id) {
          console.log("Somethign went wrong trying yo fetch user id");
          return;
        }
        const response = await ratingService.getByUser(mainUserData?.id);
        setAllRatings(response);
      } catch (error) {
        console.log("I failed, try later");
        alert(error.message || "Error al obtener ratings  (╯°□°）╯");
      }
    };
    if (mainUserData?.id) {
      fetchRatings();
    }
  }, [mainUserData?.id]);

  const normalizedReviews = allReviews?.data?.map((review) => {
    const ratingObj = allRatings?.data.find((r) => r.id === review.id_rating);
    const posterObj = allPosters?.find(
      (poster) => poster.id === review.id_tmdb
    );

    return {
      ...review,
      title: posterObj?.title,
      date: posterObj?.release_date,
      rating: ratingObj?.rating ?? null,
      poster: posterObj?.poster_path ?? null,
    };
  });
  return (
    <>
      <FilterMovies arrayFilters={FilterDiary}></FilterMovies>
      <ContainerFilms>
        <p>Aquí solo van las reviews que hice</p>
        <div>
          {" "}
          {normalizedReviews?.map((review) => (
            <>
              <BasicReview
                key={review.id}
                objeto={review}
                spoilers={false}
              ></BasicReview>
              {/*    <p>
                {review?.title}- <span>{review?.date}</span>
              </p>
              <p>
                {formatDateTime(review?.updated_at ?? review?.created_at)
                  .slice(0, 6)
                  .toUpperCase()}
              </p>
              <p>{review?.review}</p>
              <Rating
                toRate={false}
                stroke={1.5}
                noStars={review?.rating}
                starSize={"14"}
                customColor="rgb(2, 221, 2)"
              ></Rating>
              <LinkPoster
                mubi={review}
                key={review.id}
                posterUrl={`${TMDB_IMAGE_BASE_URL}w500${review?.poster}`}
                width={7}
              ></LinkPoster> */}
            </>
          ))}
        </div>
      </ContainerFilms>
    </>
  );
};

export default Diary;
