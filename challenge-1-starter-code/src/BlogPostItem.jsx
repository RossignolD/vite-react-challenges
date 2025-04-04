// src/App.jsx
import React from 'react';
import './BlogPostItem.css'; 

function BlogPostItem() {
  return (
    <div className="styles.blogPostItem">
      <Link to={url} className={styles.title}><h2>{title}</h2> </Link>
      <p className={styles.summary}>{summary}</p>

      <p className={styles.date}>Published on {formattedDate}</p>
    </div>
  );
}

export default BlogPostItem;
