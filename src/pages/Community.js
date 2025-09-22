import React from "react";
import MemberItem from "../components/MemberItem";

export const Community = () => {
  return (
    <>
      <section className="section-persentage">
        <div>
          <h3 className="username-txt">
            Film lovers, critics and friends — find popular members.{" "}
          </h3>
        </div>
        <div className="subtitle-section">
          <p>FEATURED MEMBERS</p>
        </div>
        <div className="members-grid">
          <MemberItem
            name={"Paola Buganza"}
            stats={"1.2k films • 304 reviews"}
            picture={
              "https://lh3.ggpht.com/-HhvKzwlzKZQ/UYeuWCrDhCI/AAAAAAAAgOo/x4h2Z0aGSUY/s1600/1367707835-picsay.jpg"
            }
          ></MemberItem>
          <MemberItem
            name={"Anna Herron"}
            stats={"1.2k films • 304 reviews"}
            picture={
              "https://tse1.mm.bing.net/th/id/OIP.ciMAWpWor1MeagmUt9jBPwHaHa?pid=Api&P=0&h=180"
            }
          ></MemberItem>
          <MemberItem
            name={"Kioy Ohh"}
            stats={"1.2k films • 304 reviews"}
            picture={
              "https://i-d.co/wp-content/uploads/2024/05/untitled-article-1465358355-body-image-1465358568.jpg?quality=90&w=750"
            }
          ></MemberItem>
          <MemberItem
            name={"Ivana Bueno"}
            stats={"1.2k films • 304 reviews"}
            picture={
              "https://danseclassique.info/wp-content/uploads/2019/01/ivana-bueno-garces-2018-08.jpg"
            }
          ></MemberItem>
        </div>
      </section>
      <section className="section-persentage">
        <p>Aquí pretendo que random se muestre una lista para seguir</p>
      </section>
    </>
  );
};

export default Community;
