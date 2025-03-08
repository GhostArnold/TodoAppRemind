import Todo from '../Todo/Todo';
const TodoList = ({ todos }) => {
  // Вывод списка
  return todos.map((todo, index) => {
    return <Todo todo={todo} key={index} />;
  });
};

export default TodoList;
