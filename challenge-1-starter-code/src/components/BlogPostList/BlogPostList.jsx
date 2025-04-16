import React from "react";
import BlogPostItem from "../BlogPostItem/BlogPostItem.jsx";
import BlogPostForm from "../BlogPostForm/BlogPostForm.jsx";
import "../../reset.css";
import styles from "./BlogPostList.module.css";

function BlogPostList({ posts }) {
  if (posts.length == 0) {
    return <div className={styles.container}>No blog posts available</div>;
  } else {
    return (
      <div className={styles.container}>
        {posts.map((post) => (
          <BlogPostItem
            key={post.id}
            id={post.id}
            title={post.title}
            summary={post.summary}
            date={post.date}
            url={post.url}
          />
        ))}
      </div>
    );
  }
}

export default BlogPostList;
