import { useContext } from 'react';

import { TodoContext } from '../context/ToDoContext';

export default function useTodo() {
  const {
    todos, addTodo, updateTodo, deleteTodo,
  } = useContext(TodoContext);

  return {
    todos, addTodo, updateTodo, deleteTodo,
  };
}
