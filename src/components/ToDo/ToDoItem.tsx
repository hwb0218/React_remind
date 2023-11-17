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
    <li>
      <div>
        <input
          type="checkbox"
          checked={todo.category === 'completed'}
          onClick={(e) => onUpdateTodo(index, e.currentTarget.checked)}
        />
        <span>{todo.text}</span>
      </div>
      <div>
        <button type="button" onClick={() => onDeleteTodo(todo.id)}>휴지통</button>
      </div>
    </li>
  );
}
