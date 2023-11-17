import React, { createContext } from 'react';

import { initTodoState } from '../reducers/todo.reducer';

import useTodoContext, { useTodoContextType } from '../hooks/useTodoContext';

type TodoProviderProps = {
  children: React.ReactNode;
}

const initTodoContextState: useTodoContextType = {
  todos: initTodoState.todos,
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
};

export const TodoContext = createContext<useTodoContextType>(initTodoContextState);

export default function TodoProvider({ children }: TodoProviderProps) {
  return (
    <TodoContext.Provider value={useTodoContext(initTodoState)}>{children}</TodoContext.Provider>
  );
}
