import { ToDo } from '../../reducers/todo.reducer';

type ToDoItemProps = {
  todo: ToDo;
  index: number;
  onUpdateTodo: (index: number, checked: boolean) => void;
  onDeleteTodo: (id: string) => void;
}

export default function ToDoItem({
  todo,
  index,
  onUpdateTodo,
  onDeleteTodo,
}: ToDoItemProps) {
  return (
    <li className="flex my-4 mx-2 text-dimBg dark:text-white font-bold">
      <div>
        <input
          id={index.toString()}
          type="checkbox"
          checked={todo.category === 'completed'}
          onChange={(e) => onUpdateTodo(index, e.currentTarget.checked)}
        />
        <label htmlFor={index.toString()} className="ml-1 select-none">{todo.text}</label>
      </div>
      <div className="ml-auto">
        <button
          type="button"
          onClick={() => onDeleteTodo(todo.id)}
        >
          휴지통
        </button>
      </div>
    </li>
  );
}
