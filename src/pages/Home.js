import { Link } from "react-router-dom";
import PosterMovie from "../core/PosterMovie";
import Rating from "../core/Rating";
import ProfilePicUsername from "../core/ProfilePicUsername";
import ReviewPreview from "../components/ReviewPreview";
import ListPreview from "../components/ListPreview";
import { useEffect, useRef } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import MasonryArticleItem from "../components/MasonryArticleItem";
import MainFooter from "../components/MainFooter";
import {
  arrayFirstList,
  arraySecondList,
  arrayThirdList,
} from "../storage/posterGridList";
import TagElement from "../core/TagElement";
import FooterListPreview from "../components/FooterListPreview";

export const Home = ({ userNikname = "bornsrss" }) => {
  const miLista = arrayFirstList;
  const usrRef = useRef(null);
  {
    const galleryImages = [
      <MasonryArticleItem
        titleMasonryItem="Cinema Talk, Sep-Oct 2025"
        srcBanner={
          "https://a.ltrbxd.com/resized/story/image/1/6/2/3/5/2/1/8/shard/46032/image-bedaypzo-704-704-0-0-fill.jpg?k=f342605c7a"
        }
      >
        {<p>by Bilgesu Sisman, Director of Cinematheque</p>}
      </MasonryArticleItem>,
      <MasonryArticleItem
        titleMasonryItem="Director Lee Sang-il and Chloé Zhao to Receive the 38th TIFF Kurosawa Akira Award"
        srcBanner={
          "https://a.ltrbxd.com/resized/story/image/2/3/7/6/6/9/shard/46021/image-jxexeaps-704-704-0-0-fill.jpg?k=7220171d59"
        }
      >
        <p className="clamp-text-masonry-item">
          Gaspar Noé, an avant-garde filmmaker, has cultivated a provocative and
          boundary-pushing filmography that challenges conventional storytelling
          norms. Known for his unflinching exploration of taboo subjects and
          experimental visual techniques, Noé gained attention with
          "Irreversible" (2002), a controversial and non-linear narrative that
          left an indelible impact. His psychedelic and visually stunning film
          "Enter the Void" (2009) further solidified his reputation as a
          cinematic maverick. Noé continued to push the boundaries with "Love"
          (2015), a sexually explicit drama shot in 3D. In…
        </p>
      </MasonryArticleItem>,
      <MasonryArticleItem
        titleMasonryItem="Director Lee Sang-il and Chloé Zhao to Receive the 38th TIFF Kurosawa Akira Award"
        srcBanner={
          "https://a.ltrbxd.com/resized/story/image/2/3/7/6/6/9/shard/46021/image-jxexeaps-704-704-0-0-fill.jpg?k=7220171d59"
        }
      >
        <p className="clamp-text-masonry-item">
          Gaspar Noé, an avant-garde filmmaker, has cultivated a provocative and
          boundary-pushing filmography that challenges conventional storytelling
          norms. Known for his unflinching exploration of taboo subjects and
          experimental visual techniques, Noé gained attention with
          "Irreversible" (2002), a controversial and non-linear narrative that
          left an indelible impact. His psychedelic and visually stunning film
          "Enter the Void" (2009) further solidified his reputation as a
          cinematic maverick. Noé continued to push the boundaries with "Love"
          (2015), a sexually explicit drama shot in 3D. Ior his unflinching
          exploration of taboo subjects and experimental visual techniques, Noé
          gained attention with "Irreversible" (2002), a controversial and
          non-linear narrative that left an indelible impact. His psychedelic
          and visually stunning film "Enter the Void" (2009) further solidified
          his reputation as a cinematic maverick. Noé continued to push th
        </p>
      </MasonryArticleItem>,

      <MasonryArticleItem
        titleMasonryItem="Receive the 38th TIFF Kurosawa Akira Award"
        srcBanner={
          "https://a.ltrbxd.com/resized/story/image/2/3/0/2/8/0/0/0/shard/46049/image-rvhdejrn-704-704-0-0-fill.jpg?k=f6d0b2b266"
        }
      >
        <p className="clamp-text-masonry-item">
          LG OLED's Filmmaker Mode is the perfect way to watch films at home.
          It's a standardized picture preset for TVs that was developed by the
          UHD Alliance in response to filmmakers unhappy with the way their
          films looked on most TVs, with inaccurate color and aggressive motion
          “smoothing” being two of the main sticking points.
        </p>
      </MasonryArticleItem>,
      <MasonryArticleItem
        titleMasonryItem="Director Lee Sang-il and Chloé Zhao to Receive the 38th TIFF Kurosawa Akira Award"
        srcBanner={
          "https://a.ltrbxd.com/resized/story/image/2/3/7/6/6/9/shard/46021/image-jxexeaps-704-704-0-0-fill.jpg?k=7220171d59"
        }
      >
        <p className="clamp-text-masonry-item">
          Gaspar Noé, an avant-garde filmmaker, has cultivated a provocative and
          boundary-pushing filmography that challenges conventional storytelling
          norms. Known for his unflinching exploration of taboo subjects and
          experimental visual techniques, Noé gained attention with
          "Irreversible" (2002), a controversial and non-linear narrative that
          left an indelible impact. His psychedelic and visually stunning film
          "Enter the Void" (2009) further solidified his reputation as a
          cinematic maverick. Noé continued to push the boundaries with "Love"
          (2015), a sexually explicit drama shot in 3D. In…
        </p>
      </MasonryArticleItem>,

      <MasonryArticleItem
        titleMasonryItem="Filming the Wild: Ben Masters on Nature, Cinema & The American Southwest"
        srcBanner={
          "https://a.ltrbxd.com/resized/story/image/7/8/8/4/8/9/2/shard/46014/image-pwcoyqbq-704-704-0-0-fill.jpg?k=8b79a581d5"
        }
      >
        <p className="clamp-text-masonry-item">
          The 38th Tokyo International Film Festival (TIFF), to be held from
          October 27 to November 5, 2025, is pleased to announce the recipients
          of the 2025 Kurosawa Akira Award. The award honors the renowned
          auteur’s legacy and ongoing influence. It is presented to filmmakers
          who have made waves in cinema and are expected to help guide the
          industry's future. Last year’s recipients were notable filmmakers
          Miyake Sho (Two Seasons, Two Strangers) and Fu Tien-yu (Day Off).
        </p>
      </MasonryArticleItem>,
      <MasonryArticleItem
        srcBanner={
          "https://a.ltrbxd.com/resized/story/image/1/2/9/3/5/3/5/5/shard/45941/image-ohvmzvxg-704-704-0-0-fill.jpg?k=c5360257e2"
        }
        titleMasonryItem="New Release Screening Added! Eva Victor’s Sorry, Baby to premiere in West MI at Monoform"
      >
        <p className="clamp-text-masonry-item">
          The AFI Silver Theatre and Cultural Center announced today the full
          slate of films for the 2025 AFI Latin American Film Festival, which
          will take place September 18–October 9 at the historic AFI Silver
          Theatre and Cultural Center in Silver Spring, MD. Now in its 36th
          year, the festival is one of the largest and longest-running showcases
          of Latin American cinema in the United States, dedicated to presenting
          Latin America’s prolific and versatile talent during National Hispanic
          Heritage Month. This year’s…
        </p>
      </MasonryArticleItem>,
      <MasonryArticleItem
        titleMasonryItem={
          "Noah Baumbach’s Jay Kelly will be this year’s BFI London Film Festival Cunard Gala!"
        }
        srcBanner={
          "https://a.ltrbxd.com/resized/story/image/4/8/3/3/8/5/5/shard/46013/image-mnyqktrd-704-704-0-0-fill.jpg?k=a054f4dd49"
        }
      >
        {
          <p className="clamp-text-masonry-item">
            This year’s BFI London Film Festival Cunard Gala will be the UK
            premiere of Noah Baumbach’s Jay Kelly at the Southbank Centre’s
            Royal Festival Hall on Friday 10 October. Written by Noah Baumbach
            and Emily Mortimer, the comedy-drama features an ensemble cast
            including George Clooney, Adam Sandler, Laura Dern, Billy Crudup and
            Riley Keough.
          </p>
        }
      </MasonryArticleItem>,
    ];

    useEffect(() => {
      if (usrRef.current) {
        const msnry = new Masonry(usrRef.current, {
          itemSelector: ".masonry-item",
          columnWidth: ".masonry-sizer",
          gutter: 16,
          percentPosition: true,
        });
        imagesLoaded(usrRef.current, () => {
          msnry.layout();
        });
      }
    }, []);
    return (
      <div className="section-persentage">
        <section className="welcome-msg">
          <p className="username-txt">
            Welcome back{" "}
            <span
              style={{
                borderBottom: ".51px solid white",
                paddingBottom: ".5px",
              }}
            >
              <Link to={"/user-profile"}> {userNikname}</Link>
            </span>
            <span className="username-txt-second">
              . Here's what we've been watching...
            </span>
          </p>
          <p className="username-txt-third">
            This homepage will become customized as you{" "}
            <strong>follow active members</strong> on pandas.
          </p>
        </section>

        <TagElement txt={"NEW ON MUBI"}></TagElement>
        <section className="div-new-on-mubi section-persentage">
          <PosterMovie
            posterUrl={
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThMmQN_yXAf5wfRINPKMJVdsBlbccvKwgaEHn2mc0Gc7EPZx3rUF6m4M0fxa0lnC4rWZwSEQ"
            }
            width={10}
          >
            <div className="ratingUser">
              <ProfilePicUsername
                userName="pandas"
                imgProfile={
                  "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/cards-tatoki%2Fshiba-perrito.jpg?alt=media&token=4b3718b8-823d-4368-b83c-3a68086c0cd4"
                }
                withIcon={false}
                measure={"20px"}
              />
            </div>
            <div className="ratingAndDate">
              {" "}
              <Rating
                customColor="white"
                starSize={8}
                noStars={5}
                widthContainer="1rem"
              ></Rating>
              <p>4 Agu</p>
            </div>
          </PosterMovie>
          <PosterMovie
            posterUrl={"https://m.media-amazon.com/images/I/61Emapd1JJL.jpg"}
            width={10}
          >
            <div className="ratingUser">
              <ProfilePicUsername
                userName="sebs092"
                imgProfile={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFE95IGCiq5am4IWF5cyG-ZXN0QnKvakuDDA&s"
                }
                withIcon={false}
                measure={"20px"}
              />
            </div>
            <div className="ratingAndDate">
              {" "}
              <Rating
                customColor="white"
                starSize={8}
                noStars={3}
                widthContainer="40%"
              ></Rating>
              <p>4 Agu</p>
            </div>
          </PosterMovie>

          <PosterMovie
            width={10}
            posterUrl={
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQvoe8xaMfWFXUOD8UoFXNYWtCacTXKFNxlNps-Va7srK8EciqRIvoSfgh1cHdreXgzfmGT4_rIvtob3-Al2iblCuM12fGuUsgAMVSi7A"
            }
          >
            {" "}
            <div className="ratingUser">
              <ProfilePicUsername
                userName="ella-eli"
                imgProfile={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaLa9saeNyN6hC-rhX1lFUqsOP2htI8Jzxw&s"
                }
                withIcon={false}
                measure={"20px"}
              />
            </div>
            <div className="ratingAndDate">
              {" "}
              <Rating
                customColor="white"
                starSize={8}
                noStars={3}
                widthContainer="40%"
              ></Rating>
              <p>4 Agu</p>
            </div>
          </PosterMovie>

          <PosterMovie
            posterUrl={
              "https://a.ltrbxd.com/resized/film-poster/8/1/9/4/2/9/819429-the-other-zoey-0-460-0-690-crop.jpg?v=709a167e69"
            }
            width={10}
          >
            {" "}
            <div className="ratingUser">
              <ProfilePicUsername
                userName="jenniLeu"
                imgProfile={
                  "https://media.diariolasamericas.com/p/2c4401aff9b3be4e861ab27c120f04e8/adjuntos/216/imagenes/000/213/0000213998/855x0/smart/fotogaleria-las-actrices-mejor-pagadas-hollywood.jpg"
                }
                withIcon={false}
                measure={"20px"}
              />
            </div>
            <div className="ratingAndDate">
              {" "}
              <Rating customColor="white" starSize={8} noStars={1}></Rating>
              <p>4 Agu</p>
            </div>
          </PosterMovie>
          <PosterMovie
            posterUrl={
              "data:image/jpeg;base64,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"
            }
            width={10}
          >
            {" "}
            <div className="ratingUser">
              <ProfilePicUsername
                userName="pandas"
                imgProfile={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZ5R7s3wzs8MbrqE3zVzFi1J8JnY2z0q9kpBTZ13-lssyyG6InQ9P3sEJWydGsnvXCBE&usqp=CAU"
                }
                withIcon={false}
                measure={"20px"}
              />
            </div>
            <div className="ratingAndDate">
              {" "}
              <Rating
                customColor="white"
                starSize={8}
                noStars={4}
                widthContainer="40%"
              ></Rating>
              <p>4 Agu</p>
            </div>
          </PosterMovie>
          <PosterMovie
            posterUrl={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JBzmhPa3xx8ixOGd1stD_V2Kq2BWoHbhg1kfqplhQtthtePiLbViqvNBtnKNkOpH6LWlYA"
            }
            width={10}
          >
            {" "}
            <div className="ratingUser">
              <ProfilePicUsername
                userName="meangirls"
                imgProfile={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_T5DCLd57YSsHJr3mtKeXvQRsb2_vVXnqg&s"
                }
                withIcon={false}
                measure={"20px"}
              />
            </div>
            <div className="ratingAndDate">
              {" "}
              <Rating
                customColor="white"
                starSize={8}
                noStars={4}
                widthContainer="40%"
              ></Rating>
              <p>4 Agu</p>
            </div>
          </PosterMovie>
        </section>
        {/* Aquí comienza el poster solo, sin la sección de children */}

        <TagElement txt={"POPULAR ON MUBI"}></TagElement>
        <section className="div-new-on-mubi section-persentage">
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://images.mubicdn.net/images/artworks/451427/cache-451427-1645806327/images-original.png"
              }
              width={10}
            />
          </Link>
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                " https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRb4s0szOVKmJPZDnQgb7TyhMlWFW2_qeoq1CVVXR9MZGkNyD-OGxyOnYDOJOMGGNB6_lJT"
              }
              width={10}
            />
          </Link>
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://upload.wikimedia.org/wikipedia/en/3/32/Superman_%282025_film%29_poster.jpg"
              }
              width={10}
            />
          </Link>
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://a.ltrbxd.com/resized/film-poster/1/6/4/4/7/9/164479-dumb-patrol-0-460-0-690-crop.jpg?v=ab595ae390"
              }
              width={10}
            />
          </Link>
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9uGf6hrJrdacDNQjKQNa1hU2EBAnDgWcvafdM7mnNNN3mPM3rfODurZlx7qDKEgvRQkKf"
              }
              width={10}
            />
          </Link>
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                " https://upload.wikimedia.org/wikipedia/en/6/63/Birdman_poster.png"
              }
              width={10}
            />
          </Link>
        </section>

        <TagElement txt={"popular reviews this week"}></TagElement>
        <section className="grid-container-reviews section-persentage">
          <ReviewPreview
            reviewTotalLikes={123}
            noStars={2}
            starSize={12}
            mubiPoster={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZGwt4UOEIf8ACq3eoi4_k09p_jS3dfawtw&s"
            }
            userName={"seb0s"}
            imgProfile={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFE95IGCiq5am4IWF5cyG-ZXN0QnKvakuDDA&s"
            }
          >
            <div>
              Saur good. Can I be invited to Anna and Kristoff's wedding
            </div>
          </ReviewPreview>
          <ReviewPreview
            reviewTotalLikes={43}
            noStars={4}
            starSize={12}
            mubiPoster={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxWfYCNTioqpHZf5SyC9aatwKR08kkT-VdA&s"
            }
            userName={"karl87s"}
            imgProfile={
              "https://i.pinimg.com/474x/06/62/83/0662830d859987b84a0ac5c661c93cb9.jpg"
            }
          >
            <div>
              indescribably perfect use of Chappell Roan's "Good Luck, Babe!"
            </div>
          </ReviewPreview>
          <ReviewPreview
            starSize={12}
            reviewTotalLikes={389}
            noStars={5}
            mubiPoster={
              "https://i0.wp.com/es.rollingstone.com/wp-content/uploads/2022/04/poster_precious.jpg?resize=663%2C1000&ssl=1"
            }
            userName={"rosidelrio"}
            imgProfile={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9f3ob2s3MOIrmzWCAbgtDo_pm6ZYqMYjog&s"
            }
          >
            <div>ummm… phenomenal??!</div>
          </ReviewPreview>
          <ReviewPreview
            starSize={12}
            reviewTotalLikes={3}
            noStars={1}
            mubiPoster={
              "https://lumiere-a.akamaihd.net/v1/images/romulus_payoff_poster_las_bc34960b.jpeg?region=0,0,770,1100"
            }
            userName={"jorge98"}
            imgProfile={
              "https://media.licdn.com/dms/image/v2/D4D03AQEgfjXw1GFM9w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680117037879?e=2147483647&v=beta&t=kXqygO95I1ndEoyvpfz8TlDtxa8W4NZPbUpid5nrtE8"
            }
          >
            <div>
              i’m just glad we’re seeing kids go outside again instead of being
              glued to their ipad screens
            </div>
          </ReviewPreview>
          <ReviewPreview
            starSize={12}
            reviewTotalLikes={1}
            noStars={4}
            mubiPoster={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsq0Fcdmg5FcmvKjzUxLecW3LQ59wemLagqA&s"
            }
            userName={"seb0s"}
            imgProfile={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFE95IGCiq5am4IWF5cyG-ZXN0QnKvakuDDA&s"
            }
          >
            <div> Not Bad, Or you could just watch The Incredibles again.</div>
          </ReviewPreview>
          <ReviewPreview
            starSize={12}
            reviewTotalLikes={189}
            noStars={3}
            mubiPoster={
              "https://m.media-amazon.com/images/I/71Jazc-7zWL._UF894,1000_QL80_.jpg"
            }
            userName={"vannebuga"}
            imgProfile={
              "https://www.elbuentono.com.mx/wp-content/uploads/2014/02/vanesabuganza.jpg"
            }
          >
            <div>
              {" "}
              how do you think the teachers at abbott elementary would have
              handled this?
            </div>
          </ReviewPreview>
        </section>
        <section className="section-persentage">
          <TagElement txt={"popular lists"}></TagElement>

          <div className="container-lists-home">
            <ListPreview arrayListPoster={arrayFirstList}>
              <FooterListPreview></FooterListPreview>
              {/* children */}
            </ListPreview>

            <ListPreview arrayListPoster={arraySecondList}>
              <FooterListPreview></FooterListPreview>
              {/* children */}
            </ListPreview>

            <ListPreview arrayListPoster={arrayThirdList}>
              <FooterListPreview></FooterListPreview>
              {/* children */}
            </ListPreview>
          </div>
        </section>
        <section className="section-persentage">
          <TagElement txt={"Recent stories"}></TagElement>

          <div>
            <div ref={usrRef} className="masonry-grid">
              <div className="masonry-sizer"></div>
              {galleryImages.slice(0, 5).map((src, i) => {
                return (
                  <div key={i} className="masonry-item">
                    {src}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <MainFooter></MainFooter>
      </div>
    );
  }
};
export default Home;
