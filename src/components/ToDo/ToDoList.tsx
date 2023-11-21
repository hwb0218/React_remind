import ToDoItem from './ToDoItem';

import useTodo from '../../hooks/useTodo';

import filterTodos from '../../utils/filterTodos';

import { Categories } from './ToDoCategories';

type ToDoListProps = {
  category: Categories;
}

export default function ToDoList({ category }: ToDoListProps) {
  const { todos, updateTodo, deleteTodo } = useTodo();

  const filteredTodos = filterTodos(todos, category);

  return (
    <ul className="flex-auto w-full p-3 dark:bg-dimBg overflow-y-auto">
      {filteredTodos.map((todo, index) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          index={index}
          onUpdateTodo={updateTodo}
          onDeleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
