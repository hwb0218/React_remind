import { useState } from 'react';
import TodoProvider from '../context/ToDoContext';

import ToDoCategories, { Categories } from './todo/ToDoCategories';
import ToDoList from './todo/ToDoList';
import ToDoTextField from './todo/ToDoTextField';

export default function AppToDo() {
  const [selectedCategory, setSelectedCategory] = useState<Categories>('all');

  const handleClickCategory = (category: Categories) => {
    setSelectedCategory(category);
  };

  return (
    <TodoProvider>
      <div className="h-[60vh] mx-auto w-full max-w-3xl flex flex-col justify-between items-center border-solid rounded-md bg-white overflow-hidden">
        <ToDoCategories
          onClickCategory={handleClickCategory}
          selectedCategory={selectedCategory}
        />
        <ToDoList category={selectedCategory} />
        <ToDoTextField />
      </div>
    </TodoProvider>
  );
}
