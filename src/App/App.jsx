import { useState } from 'react';
import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm/TodoForm';
import './App.scss';

function App() {
  // Создаём состояние для списка задач
  const [todos, setTodos] = useState([]);
  // Функция с помощью которой мы будем добавлять новую задачу
  function addTodoHanler(text) {
    setTodos([...todos, text]);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Форма добавления */}
      <TodoForm addTodo={addTodoHanler} />
      {/* Вывод списка задач */}
      {/* можно ещё todos.length === 0, но не рекомендуется */}
      {!todos.length && <h3>List is empty</h3>}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
