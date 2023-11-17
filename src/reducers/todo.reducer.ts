export type ToDo = {
  id: string;
  text: string;
  category: 'active' | 'completed';
}

export type InitTodoState = {
  todos: ToDo[]
}

export enum TODO_ACTION_TYPE {
  ADDED = 'added',
  UPDATED = 'updated',
  DELETED = 'deleted',
}

type ReducerAction =
| { type: TODO_ACTION_TYPE.ADDED, payload: string }
| { type: TODO_ACTION_TYPE.UPDATED, payload: { index: number, checked: boolean } }
| { type: TODO_ACTION_TYPE.DELETED, payload: { id: string } }

export const initTodoState: InitTodoState = {
  todos: [],
};

const toDoReducer = (
  state: InitTodoState = initTodoState,
  { type, payload }: ReducerAction,
): InitTodoState => {
  switch (type) {
  case TODO_ACTION_TYPE.ADDED: {
    const todoId = `${new Date().getTime()}-${state.todos.length ? state.todos.length : 0}`;
    const newTodo: ToDo = {
      id: todoId,
      text: payload,
      category: 'active',
    };

    return {
      todos: [...state.todos, newTodo],
    };
  }
  case TODO_ACTION_TYPE.UPDATED: {
    const newTodos = [...state.todos];

    newTodos[payload.index].category = payload.checked ? 'completed' : 'active';

    return {
      todos: newTodos,
    };
  }
  case TODO_ACTION_TYPE.DELETED: {
    const newTodos = state.todos.filter((item) => item.id !== payload.id);
    return { todos: newTodos };
  }
  default:
    return state;
  }
};

export default toDoReducer;
