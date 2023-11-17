import { useReducer } from 'react';
import toDoReducer, { InitTodoState, TODO_ACTION_TYPE } from '../reducers/todo.reducer';

export default function useTodoContext(initTodoState: InitTodoState) {
  const [state, dispatch] = useReducer(toDoReducer, initTodoState);

  const addTodo = (todo: string) => {
    dispatch({ type: TODO_ACTION_TYPE.ADDED, payload: todo });
  };

  const updateTodo = (index: number, checked: boolean) => {
    dispatch({ type: TODO_ACTION_TYPE.UPDATED, payload: { index, checked } });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: TODO_ACTION_TYPE.DELETED, payload: { id } });
  };

  return {
    todos: state.todos, addTodo, updateTodo, deleteTodo,
  };
}

export type useTodoContextType = ReturnType<typeof useTodoContext>
