import styles from './Todo.module.scss';
const Todo = ({ todo, deleteTodo, index }) => {
  return (
    <div onDoubleClick={() => deleteTodo(index)} className={styles.item}>
      <div>{todo}</div>
    </div>
  );
};

export default Todo;
