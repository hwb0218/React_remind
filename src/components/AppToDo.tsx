import { useState } from 'react';
import TodoProvider from '../context/ToDoContext';

import ToDoCategories, { Categories } from './ToDo/ToDoCategories';
import ToDoList from './ToDo/ToDoList';
import ToDoTextField from './ToDo/ToDoTextField';

export default function AppToDo() {
  const [selectedCategory, setSelectedCategory] = useState<Categories>('all');

  const handleClickCategory = (category: Categories) => {
    setSelectedCategory(category);
  };

  return (
    <TodoProvider>
      <ToDoCategories onClickCategory={handleClickCategory} />
      <ToDoList category={selectedCategory} />
      <ToDoTextField />
    </TodoProvider>
  );
}
