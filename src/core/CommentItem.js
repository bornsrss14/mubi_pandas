import { useEffect, useState } from "react";
import { formatDateShortES, timeAgo } from "../utils/dateUtils";
import ProfilePicUsername from "./ProfilePicUsername";
import commentService from "../services/commentService";
import { IconDots, IconHeart, IconHeartFilled } from "@tabler/icons-react";

export const CommentItem = ({ objectComment }) => {
  const { replies_count, id } = objectComment;
  const [loadingReplies, setLoadingReplies] = useState(false);
  const [replies, setReplies] = useState([]);
  const [showReplies, setShowReplies] = useState(false);
  /*  */
  //tengo que pasarle el id_comment a la función de getReplies();

  const handleShow = () => {
    setShowReplies((prev) => !prev);
  };
  const getReplies = async (id_comment) => {
    try {
      setLoadingReplies(true);
      const response = await commentService.getReplies(id_comment);
      setReplies(response?.data || []);
    } catch (error) {
      console.error(
        `Error loading comments asociated this review ${id_comment}`,
      );
    } finally {
      setLoadingReplies(false);
    }
  };
  useEffect(() => {
    setReplies([]);
    getReplies(id);
  }, [id]);
  return (
    <div className="">
      <section className="caja_decide">
        <div>{objectComment?.id_parent === null ? "" : "anidado ↓ "}</div>
        <div className="comment-grid">
          <div className="container-pic-name">
            <ProfilePicUsername
              imgProfile={
                objectComment?.profile_pic_url ||
                "https://a.ltrbxd.com/resized/avatar/upload/4/9/9/2/4/8/shard/avtr-0-80-0-80-crop.jpg?v=f409bcda26"
              }
              withNickname={false}
            ></ProfilePicUsername>
            <div className="name-created">
              <p className="nickname">
                {objectComment?.given_name} {objectComment?.family_name}
              </p>
              <p style={{ fontWeight: "100", letterSpacing: ".1rem" }}>
                {formatDateShortES(objectComment?.created_at) || "10h ago"}
              </p>
            </div>
          </div>
          <div className="container-comment">
            {
              <p>
                {objectComment?.comment_txt ||
                  " When Harry Met Sally is one of cinemas few perfect films in my opinion. The loss of Rob Reiner and Nora Ephron before that, is palpable 🙏🏾"}
              </p>
            }
          </div>
          {replies_count >= 1 && (
            <button className="btn-show-replies" onClick={handleShow}>
              {showReplies ? (
                "⎯⎯ Hide replies"
              ) : (
                <p>
                  ⎯⎯ View <span>{replies_count}</span> replies
                </p>
              )}
            </button>
          )}
        </div>
        {showReplies && (
          <div>
            {replies?.map((rep, i) => (
              <div className="reply-comment" key={i}>
                <div>
                  <ProfilePicUsername
                    imgProfile={rep?.profile_pic_url}
                    withNickname={true}
                    userName={rep?.username}
                  ></ProfilePicUsername>

                  <p>{rep?.comment_txt}</p>
                </div>
                <div className="reactions-reply">
                  <p className="get-ago ">4d</p>
                  <button className="reply">Reply</button>
                  {/* Al pulsar sobre el boton de Reply voy a abrir una caja de texto donde pueda yo escribir otro comentario
                  referido  */}
                  <IconHeartFilled size={"1rem"} color="red"></IconHeartFilled>
                  <IconDots
                    size={"1rem"}
                    color="white
                  "
                  ></IconDots>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CommentItem;
