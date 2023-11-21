import { useRef } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import ToDoCategory from './ToDoCategory';

const cagetories = ['all', 'active', 'completed'] as const;

export type Categories = typeof cagetories[number];

type ToDoCategoriesProps = {
  selectedCategory: Categories;
  onClickCategory: (status: Categories) => void;
}

export default function ToDoCategories({
  selectedCategory,
  onClickCategory,
}: ToDoCategoriesProps) {
  const { toggle } = useDarkMode();

  const id = useRef(new Date().getTime());

  return (
    <div className="flex w-full p-3 bg-bgDark dark:bg-dimBg">
      <button type="button" onClick={toggle} className="dark:text-white">다크모드 버튼</button>
      <ul className="flex justify-between ml-auto">
        {cagetories.map((category: Categories) => (
          <ToDoCategory
            key={`${id}-${category}`}
            category={category}
            selectedCategory={selectedCategory === category}
            onClickCategory={onClickCategory}
          />
        ))}
      </ul>
    </div>
  );
}
