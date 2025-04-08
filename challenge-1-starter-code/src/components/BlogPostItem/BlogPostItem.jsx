// src/App.jsx
import React from "react";
import "../../reset.css";
import styles from "./BlogPostItem.module.css";
import { Link } from "react-router";

function BlogPostItem({ title, summary, date, url }) {
  return (
    <div className={styles.blogPostItem}>
      <Link to={url} className={styles.title}>
        <h2>{title}</h2>{" "}
      </Link>
      <p className={styles.summary}>{summary}</p>

      <p className={styles.date}>Published on {date}</p>
    </div>
  );
}

export default BlogPostItem;
