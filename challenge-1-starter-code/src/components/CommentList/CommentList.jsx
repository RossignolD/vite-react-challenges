import React from "react";
import CommentItem from "../CommentItem/CommentItem.jsx";
import "../../reset.css";
import styles from "./CommentList.module.css";

function CommentList({ comments }) {
  if (comments.length == 0) {
    return <div className={styles.container}>No comments available</div>;
  } else {
    return (
      <div className={styles.container}>
        {comments.map((comment) => (
          <CommentItem
            name={comment.author}
            date={comment.date}
            text={comment.text}
            avatar={comment.avatar}
          />
        ))}
      </div>
    );
  }
}

export default CommentList;
