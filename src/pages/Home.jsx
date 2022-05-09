import React from "react";
import CreateTodo from "../container/CreateTodo";
import TodoList from "../container/TodoList";

const Home = () => {
  return (
    <>
      <CreateTodo />
      <TodoList />
    </>
  );
};

export default Home;
