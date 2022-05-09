import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext(undefined);

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const toogleCompletedTo = (taskId) => {
    setTasks((prevState) =>
      prevState.map((prevTask) => {
        if (taskId === prevTask.id) {
          return {
            ...prevTask,
            completed: !prevTask.completed,
          };
        }

        return prevTask;
      })
    );
  };

  const createTask = (title) => {
    console.log("task", title);
    setTasks((prev) => {
      return [...prev, { id: prev.length + 1, title, completed: false }];
    });
  };

  const deleteTaskById = (taskId) => {
    /// ... logica de eliminar task
  };

  useEffect(() => {
    if (tasks.length !== 0) {
      localStorage.setItem("todos", JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    fetchTodos().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  return (
    <TodoContext.Provider value={{ tasks, toogleCompletedTo, createTask }}>
      {children}
    </TodoContext.Provider>
  );
};

const fetchTodos = async () => {
  return Promise.resolve([
    { id: 1, title: "Hacer compra", completed: false },
    { id: 2, title: "Hacer tarea", completed: true },
  ]);
};
