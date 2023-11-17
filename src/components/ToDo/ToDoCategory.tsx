import { Categories } from './ToDoCategories';

type ToDoCategoryProps = {
  category: Categories;
  onClickCategory: (status: Categories) => void;
}

export default function ToDoCategory({ category, onClickCategory }: ToDoCategoryProps) {
  return (
    <li>
      <button type="button" onClick={() => onClickCategory(category)}>{category}</button>
    </li>
  );
}
