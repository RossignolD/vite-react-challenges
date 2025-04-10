import React from "react";
import styles from "./DeleteButton.module.css";

const DeleteButton = ({ onClick }) => {
  return (
    <button className={styles.deleteButton} onClick={onClick}>
      Delete Blog Post
    </button>
  );
};

export default DeleteButton;
