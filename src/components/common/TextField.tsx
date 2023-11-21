type TextFieldProps = {
  value: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
  onClickAddBtn: (todo: string) => void;
  onEnterInput?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function TextField({
  value, placeholder, onChangeText, onClickAddBtn, onEnterInput,
}: TextFieldProps) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        onKeyUp={onEnterInput && ((e) => onEnterInput(e))}
        className="p-1 flex-auto rounded-l-sm"
      />
      <span>
        <button
          type="button"
          onClick={() => onClickAddBtn(value)}
          className="py-1 px-5 rounded-r-sm bg-accent hover:brightness-125 whitespace-nowrap font-bold dark:text-white"
        >
          추가
        </button>
      </span>
    </>
  );
}
