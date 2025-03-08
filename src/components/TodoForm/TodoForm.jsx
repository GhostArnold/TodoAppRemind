import { useState } from 'react';
import styles from './TodoForm.module.scss';
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
    <form action="" onSubmit={onSubmitHanler} className={styles.addItem}>
      <input
        type="text"
        placeholder="Enter new todo"
        onChange={(e) => setText(e.target.value)}
        value={text}
        className={styles.addEntry}
      />
      <button type="submit" className={styles.addBtn}>
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
