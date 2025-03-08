import { useState } from 'react';
const TodoForm = ({ addTodo }) => {
  // Состояние текста в инпуте
  const [text, setText] = useState('');
  // Функция добавляющая в массив задач задачу из формы
  const onSubmitHanler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form action="" onSubmit={onSubmitHanler}>
      <input
        type="text"
        placeholder="Enter new todo"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
