import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm/TodoForm';
import './App.scss';

function App() {
  // Создаём состояние для списка задач
  const [todos, setTodos] = useState([]);
  // Функция с помощью которой мы будем добавлять новую задачу
  function addTodoHanler(text) {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  }
  function deleteTodoHandler(id) {
    setTodos(
      // Знак _ исполняет роль затычки
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  }
  // Чтобы отметить завершённые задачи
  function toggleTodoHandler(id) {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Форма добавления */}
      <TodoForm addTodo={addTodoHanler} />
      {/* Вывод списка задач */}
      {/* можно ещё todos.length === 0, но не рекомендуется */}
      {!todos.length && <h3>List is empty</h3>}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  );
}

export default App;
