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
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.formattedDate}>{formattedDate}</span>
        <img className={styles.avatar} src={avatar} alt={`Avatar of ${name}`} />
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
