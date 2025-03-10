import Todo from '../Todo/Todo';
const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  // Вывод списка
  return todos.map((todo) => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    );
  });
};

export default TodoList;
