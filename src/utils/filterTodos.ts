import { Categories } from '../components/todo/ToDoCategories';
import { ToDo } from '../reducers/todo.reducer';

const filterTodos = (todos: ToDo[], currentCategory: Categories) => {
  const filterdTodosByCategory = currentCategory === 'all'
    ? todos
    : todos.filter((todo) => todo.category === currentCategory);

  return filterdTodosByCategory;
};

export default filterTodos;
