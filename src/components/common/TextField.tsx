type TextFieldProps = {
  value: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
  onClickAddTodo: (todo: string) => void;
  onEnterInput?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function TextField({
  value, placeholder, onChangeText, onClickAddTodo, onEnterInput,
}: TextFieldProps) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        onKeyUp={onEnterInput && ((e) => onEnterInput(e))}
      />
      <span><button type="button" onClick={() => onClickAddTodo(value)}>추가</button></span>
    </div>
  );
}
