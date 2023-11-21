import { Categories } from './ToDoCategories';

type ToDoCategoryProps = {
  category: Categories;
  selectedCategory: boolean;
  onClickCategory: (status: Categories) => void;
}

export default function ToDoCategory({
  category,
  selectedCategory,
  onClickCategory,
}: ToDoCategoryProps) {
  return (
    <li className={`[&:nth-child(2)]:mx-3 text-accent font-bold hover:opacity-100 ${selectedCategory ? 'opacity-100' : 'opacity-70'} `}>
      <button type="button" onClick={() => onClickCategory(category)}>{category}</button>
    </li>
  );
}
