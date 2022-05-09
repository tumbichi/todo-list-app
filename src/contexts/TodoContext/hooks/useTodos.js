import { useContext } from "react";
import { TodoContext } from "../TodoProvider";

export const useTodos = () => {
  const value = useContext(TodoContext);

  if (value === undefined) {
    throw new Error("Necesita tener un TodoProvider como padre/abuelo/etc");
  }

  return value;
};
