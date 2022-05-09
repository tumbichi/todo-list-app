import React from "react";
import styles from "./TaskItem.module.css";

const TaskItem = ({ title, completed, onChangeSelected }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => onChangeSelected(!e.target.checked)}
      />
    </div>
  );
};

export default TaskItem;
