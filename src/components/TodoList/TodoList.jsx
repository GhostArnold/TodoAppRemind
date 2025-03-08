import Todo from '../Todo/Todo';
const TodoList = ({ todos, deleteTodo }) => {
  // Вывод списка
  return todos.map((todo, index) => {
    return (
      <Todo todo={todo} key={index} deleteTodo={deleteTodo} index={index} />
    );
  });
};

export default TodoList;
