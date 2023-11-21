import { useState } from 'react';

import useTodo from '../../hooks/useTodo';

import TextField from '../common/TextField';

export default function ToDoTextField() {
  const [text, setText] = useState('');

  const { addTodo } = useTodo();

  const handleChangeText = (value: string) => {
    setText(value);
  };

  const handleEnterInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (text.length && e.key === 'Enter') {
      const trimText = text.trim();

      addTodo(trimText);
      setText('');
    }
  };

  const handleClickAddBtn = (todo: string) => {
    addTodo(todo);
    setText('');
  };

  return (
    <div className="flex justify-between p-3 w-full bg-bgDark dark:bg-dimBg">
      <TextField
        placeholder="Add Todo"
        value={text}
        onChangeText={handleChangeText}
        onClickAddBtn={handleClickAddBtn}
        onEnterInput={handleEnterInput}
      />
    </div>
  );
}
