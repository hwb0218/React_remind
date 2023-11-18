import useDarkMode from '../../hooks/useDarkMode';
import ToDoCategory from './ToDoCategory';

const cagetories = ['all', 'active', 'completed'] as const;

export type Categories = typeof cagetories[number];

type ToDoCategoriesProps = {
  onClickCategory: (status: Categories) => void;
}

export default function ToDoCategories({
  onClickCategory,
}: ToDoCategoriesProps) {
  const { toggle } = useDarkMode();

  return (
    <div>
      <button type="button" onClick={toggle}>Light</button>
      <ul>
        {cagetories.map((category: Categories) => {
          const id = `${new Date().getTime()}-${category}`;
          return (
            <ToDoCategory
              key={id}
              category={category}
              onClickCategory={onClickCategory}
            />
          );
        })}
      </ul>
    </div>
  );
}
