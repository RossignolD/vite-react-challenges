import React, { useState, useEffect } from "react";
import "../../reset.css";
import styles from "./BlogPostForm.module.css";
console.log(styles);

const BlogPostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [author, setAuthor] = useState(post?.author || "");
  const [date, setDate] = useState(post?.date || "");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!title) newErrors.title = "Required";
    if (!content) newErrors.content = "Required";
    if (!author) newErrors.author = "Required";
    if (!date) newErrors.date = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit({ title, content, author, date });
    }
  };

  return (
    <form className={styles.blogPostForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <div className={styles.inputRow}>
          <label className={styles.label} htmlFor="title">
            Title
          </label>

          <input
            className={styles.input}
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {errors.title && <p className={styles.error}>{errors.title}</p>}
      </div>

      <div className={styles.formGroup}>
        <div className={styles.inputRow}>
          <label className={styles.label} htmlFor="content">
            Content
          </label>
          <textarea
            className={styles.textarea}
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {errors.content && <p className={styles.error}>{errors.content}</p>}
      </div>

      <div className={styles.formGroup}>
        <div className={styles.inputRow}>
          <label className={styles.label} htmlFor="author">
            Author
          </label>

          <input
            className={styles.input}
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        {errors.author && <p className={styles.error}>{errors.author}</p>}
      </div>

      <div className={styles.formGroup}>
        <div className={styles.inputRow}>
          <label className={styles.label} htmlFor="date">
            Date
          </label>

          <input
            className={styles.input}
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {errors.date && <p className={styles.error}>{errors.date}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogPostForm;
