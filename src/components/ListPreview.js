import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PosterMovie from "../core/PosterMovie";
import ProfilePicUsername from "../core/ProfilePicUsername";
import TotalChat from "../core/TotalChat";

export const ListPreview = () => {
  return (
    <>
      <div className="list-preview-container">
        <div className="poster-list-container">
          <PosterMovie
            width={6.5}
            posterUrl={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFO7Tv5Ahlh95y7329wyWIjjrZr2uMMhG2gQ&s"
            }
          ></PosterMovie>
          <PosterMovie
            width={6.5}
            posterUrl={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosOuVPi9RJgc3cHQLV-HAT2ez5opUH1IyZg&s"
            }
          ></PosterMovie>
          <PosterMovie
            width={6.5}
            posterUrl={
              "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/mejores-posters-cine-terror-miedo/mv5bntc4odm2mtu2nf5bml5banbnxkftztgwntezntmynje-._v1_sy1000_cr0-0-647-1000_al_/137670471-1-esl-ES/MV5BNTc4ODM2MTU2NF5BMl5BanBnXkFtZTgwNTEzNTMyNjE-._V1_SY1000_CR0-0-647-1000_AL_.jpg?resize=980:*"
            }
          ></PosterMovie>
          <PosterMovie
            width={6.5}
            posterUrl={
              "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiM_jVG7c9A1gHbFI2k06PpBEWK4Kzk5EIUF0XYDT1T3a6d1PfywW7wDLMilVA5i0SfHY57cvuKpc-akvNIs1SgOLeTVfphqkqIMR1Ogw9HTf24eOsSf-st7wNs1x9i7kSSIc6uSievdj4/s1600/Annabelle-2014-Movie-Poster-750x1111.jpg"
            }
          ></PosterMovie>

          <PosterMovie
            width={6.5}
            posterUrl={
              "https://m.media-amazon.com/images/M/MV5BNzMxYWI2NWUtNTQzOC00YTk0LTg2YmUtNmU2NzZkZmJjZWU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            }
          ></PosterMovie>
        </div>
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
      </div>
    </>
  );
};

export default ListPreview;
