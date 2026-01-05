import ProfilePicUsername from "./ProfilePicUsername";

export const CommentItem = () => {
  return (
    <section className="caja_decide">
      <div className="comment-grid">
        <div className="container-pic-name">
          <ProfilePicUsername
            imgProfile={
              "https://a.ltrbxd.com/resized/avatar/upload/4/9/9/2/4/8/shard/avtr-0-80-0-80-crop.jpg?v=f409bcda26"
            }
            withNickname={false}
          ></ProfilePicUsername>
          <div className="name-created">
            <p className="nickname">Jhon Noire</p>
            <p style={{ fontWeight: "100", letterSpacing: ".1rem" }}>10h ago</p>
          </div>
        </div>
        <div className="container-comment">
          <p>
            When Harry Met Sally is one of cinema's few perfect films in my
            opinion. The loss of Rob Reiner, and Nora Ephron before that, is
            palpable 🙏🏾
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommentItem;
