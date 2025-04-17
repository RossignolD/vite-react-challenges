import React from "react";
import "../../reset.css";
import DeleteButton from "../DeleteButton/DeleteButton.jsx";
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog.jsx";
import { useParams } from "react-router";
import styles from "./BlogPostDetail.module.css";
import CommentList from "../CommentList/CommentList.jsx";

const sampleComments = [
  {
    author: "Charlie D.",
    date: "2022-08-09T13:47",
    text: "Great post!",
    avatar: "https://picsum.photos/id/1/200",
  },

  {
    author: "Bob C.",
    date: "2020-11-30T08:15",
    text: "Love the new blog layout; keep up the good work",
    avatar: "https://picsum.photos/id/18/200",
  },

  {
    author: "Alice B.",
    date: "2019-05-23T16:28",
    text: "First comment!",
    avatar: "https://picsum.photos/id/40/200",
  },
];

function BlogPostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  if (!post) {
    return <p>Blog post not found.</p>;
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleDeleteClick = () => {
    setIsDialogOpen(true);
    console.log(isDialogOpen);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const handleConfirmDelete = () => {
    // Logic to delete the post
    console.log(`Post with id ${post.id} deleted`);
    setIsDialogOpen(false);
  };

  return (
    <div className={styles.blogPostDetail}>
      {isDialogOpen && (
        <ConfirmationDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          onConfirm={handleConfirmDelete}
        ></ConfirmationDialog>
      )}
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.author}>By {post.author}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <DeleteButton onClick={handleDeleteClick}></DeleteButton>
      <CommentList comments={sampleComments} />
    </div>
  );
}

export default BlogPostDetail;
