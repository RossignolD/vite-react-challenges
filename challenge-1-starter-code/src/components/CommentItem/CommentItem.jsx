import React from "react";
import "../../reset.css";
import styles from "./CommentItem.module.css";

const CommentItem = ({ name, date, text, avatar }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div>
      <div className={styles.commentItem}>
        <img
          className={styles.avatar}
          src={avatar}
          alt={`Avatar of ${name}`}
        ></img>
        <div className={styles.commentContents}>
          <div className={styles.commentInfo}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.formattedDate}>{formattedDate}</p>
          </div>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
