import Todo from '../Todo/Todo';
const TodoList = ({ todos, deleteTodo }) => {
  // Вывод списка
  return todos.map((todo) => {
    return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />;
  });
};

export default TodoList;
