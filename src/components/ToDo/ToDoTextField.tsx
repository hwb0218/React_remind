import { useState } from 'react';

import useTodo from '../../hooks/useTodo';

import TextField from '../common/TextField';

export default function ToDoTextField() {
  const { addTodo } = useTodo();
  const [text, setText] = useState('');

  const handleChangeText = (value: string) => {
    setText(value);
  };

  const handleEnterInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (text.length && e.key === 'Enter') {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <div>
      <TextField
        placeholder="Add Todo"
        value={text}
        onChangeText={handleChangeText}
        onClickAddTodo={addTodo}
        onEnterInput={handleEnterInput}
      />
    </div>
  );
}
