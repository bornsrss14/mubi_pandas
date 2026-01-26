import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import commentService from "../services/commentService";

export const useComments = () => {
  const { mainUserData } = useContext(UserContext);
  const COMMENTS_LIMIT = 3;
  let REVIEW_ID = 23;

  const [commentsByRev, setCommentsByRev] = useState([]);
  const [loadingC, setLoadingC] = useState();
  const [errorC, setErrorC] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [commentData, setCommentData] = useState({
    id_review: null,
    id_user: mainUserData?.id || 4, //cambiar
    comment_txt: "", //
    id_parent: null,
  });
  const [pagination, setPagination] = useState({
    page: 1,
    hasMore: true,
    total: 0,
  });
  //Fixed/constant values → use directly from scope (no parameter needed)
  const getCommentsByReview = useCallback(
    async (page = 1) => {
      if (!REVIEW_ID) return;
      try {
        setLoadingC(true);
        setErrorC(null);
        const response = await commentService.getByReviewId(
          REVIEW_ID,
          page,
          COMMENTS_LIMIT,
        );
        if (page === 1) {
          setCommentsByRev(response?.data || []);
        } else {
          setCommentsByRev((prev) => [...prev, ...(response?.data || [])]);
        }
        setPagination({
          page: response?.pagination?.page,
          hasMore: response?.pagination?.hasMore,
          total: response?.pagination?.total || 0,
        });
        console.log("Pagination updated at", {
          page: response?.pagination?.page,
          hasMore: response?.pagination?.hasMore,
          total: response?.pagination?.total,
        });
      } catch (error) {
        console.error(
          `Error loading comments asociated this review ${commentData?.id_review}`,
        );
        setErrorC(error.message);
      } finally {
        setLoadingC(false);
      }
    },
    [REVIEW_ID, commentData],
  );
  // load the first page with the initial comments
  useEffect(() => {
    setCommentsByRev([]);
    setPagination({ page: 1, hasMore: true, total: 0 });
    getCommentsByReview(1);
  }, [REVIEW_ID, getCommentsByReview]);

  const loadMoreComments = useCallback(() => {
    console.log("Load more comments clicked! (°ロ°) !");
    console.log("Pagination bbefore", pagination);
    if (!loadingC && pagination?.hasMore) {
      getCommentsByReview(pagination?.page + 1);
    } else {
      console.log(
        "BLOQUEADO - loading comments:",
        loadingC,
        "has more comments",
        pagination?.hasMore,
      );
    }
  }, [loadingC, pagination, getCommentsByReview]);

  const handleAddComment = useCallback(
    async (commentData) => {
      if (!commentData?.comment_txt.trim()) {
        throw new Error("Comment can not be empty");
      }
      try {
        setSubmitting(true);
        const comment = {
          id_review: REVIEW_ID,
          id_user: mainUserData?.id || 4, //change fallback
          comment_txt: commentData.comment_txt.trim(),
          id_parent: commentData.id_parent,
        };
        const response = await commentService.addComment(comment);
        if (commentData?.id_parent) {
          //if id_parent exists, indicates this commentis a reply to another comment
          setCommentsByRev((prev) =>
            prev.map((c) =>
              c.id === commentData.id_parent
                ? { ...c, replies_count: (c.replies_count || 0) + 1 }
                : c,
            ),
          );
        } else {
          //main comment - add to the top
          setCommentsByRev((prev) => [response.data, ...prev]);
          setPagination((prev) => ({
            ...prev,
            total: prev.total + 1,
          }));
        }
        setCommentData({
          id_review: 23,
          id_user: mainUserData?.id || 4, //cambiar
          comment_txt: "",
          id_parent: null,
        });
        return response.data;
        //add refreshComments function from CommentProviderContext;
        //2. Reset commentData?.comment_txt: ➜ "" empty;
      } catch (error) {
        console.error("Error creating comment", error);
        alert(error.message || "Error (╯°□°）╯💬");
      } finally {
        setSubmitting(false);
      }
    },
    [REVIEW_ID, mainUserData.id],
  );

  const deleteComment = useCallback(async (id) => {
    try {
      await commentService.delete(id);
      setCommentsByRev((prev) => prev.filter((cm) => cm.id !== id));
      setPagination((prev) => ({
        ...prev,
        total: prev.total - 1,
      }));
    } catch (error) {
      console.error("Error deleting comment", error);
    }
  }, []);

  const refreshUi = useCallback(async () => {
    setCommentsByRev([]);
    setPagination({ page: 1, hasMore: true, total: 0 });
    getCommentsByReview(1);
  }, [getCommentsByReview]);
  return {
    commentData,
    setCommentData,
    commentsByRev,
    loading: loadingC,
    error: errorC,
    submitting,
    pagination,
    handleAddComment,
    deleteComment,
    loadMoreComments,
    refreshUi,
  };
};
