import { RiTodoFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { IoMdCheckmark } from 'react-icons/io';
import styles from './Todo.module.scss';
const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div
      className={`${styles.item} ${todo.isCompleted ? styles.completed : ''}`}
    >
      <div className={styles.num}>
        <RiTodoFill className={styles.icon} />
        {todo.text}
      </div>
      <div className={styles.functional}>
        <MdDelete
          onClick={() => deleteTodo(todo.id)}
          className={`${styles.icon} ${styles.delete}`}
        />
        <IoMdCheckmark
          onClick={() => toggleTodo(todo.id)}
          className={`${styles.icon} ${styles.completed}`}
        />
      </div>
    </div>
  );
};

export default Todo;
