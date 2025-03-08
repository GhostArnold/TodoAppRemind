import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.scss';
const Todo = ({ todo, deleteTodo, index }) => {
  return (
    <div onDoubleClick={() => deleteTodo(index)} className={styles.item}>
      <RiTodoFill className={styles.icon} />
      <div>{todo}</div>
    </div>
  );
};

export default Todo;
