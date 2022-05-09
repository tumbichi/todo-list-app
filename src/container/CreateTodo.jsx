import React, { useState } from "react";
import { useTodos } from "../contexts/TodoContext/hooks/useTodos";

const CreateTodo = () => {
  const { createTask } = useTodos();
  const [title, setTitle] = useState();

  const handleClick = (e) => {
    createTask(title);
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default CreateTodo;
