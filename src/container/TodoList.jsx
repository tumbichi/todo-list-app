import React from "react";
import { useTodos } from "../contexts/TodoContext/hooks/useTodos";
import TaskItem from "../components/TaskItem";

const TodoList = () => {
  const { tasks, toogleCompletedTo } = useTodos();

  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.title}
            title={task.title}
            completed={task.completed}
            onChangeSelected={() => toogleCompletedTo(task.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
