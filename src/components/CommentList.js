import React from "react";
import Comment from "./Comment";

const CommentList = ({ commentsList }) => {
  return commentsList.map((commentList, index) => (
    <div key={index}>
      <Comment comments={commentList} />
      <div className="ms-5 border-l-black border-l-2">
        <CommentList commentsList={commentList.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
