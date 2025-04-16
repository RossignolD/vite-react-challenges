import React, { useEffect, useRef } from "react";
import "../../reset.css";
import styles from "./ConfirmationDialog.module.css";

const ConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
  console.log("hello");
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen == true) {
      dialogRef.current?.focus();
    }
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        ref={dialogRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.dialogTitle}>Confirm Deletion</h2>
        <p className={styles.dialogDescription}>
          Are you sure you want to delete this post?
        </p>
        <div className={styles.buttons}>
          {" "}
          <button onClick={onClose} className={styles.cancelButton}>
            Cancel
          </button>
          <button onClick={onConfirm} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
