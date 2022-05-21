import React, {useEffect, useState} from 'react';
import './App.css';
import { TodoContext } from './contexts/TodoContext';
import { InputContext } from './contexts/InputContext';
import Todo from './components/todo2';
import Input from './components/input2';

function App() {
  let boardList = [
    {
      id: 1,
      todoname: '운동하기',
      completed: false,
    },
    {
      id: 2,
      todoname: 'SNS 꾸미기',
      completed: false,
    },
    {
      id: 3,
      todoname: '사진 정리하기',
      completed: false,
    },
  ];

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    e.preventDefault();
    setTodos([
      {
        id: todos.length + 1,
        todoname: input,
        completed: false,
      },
      ...todos,
    ]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <InputContext.Provider value={{ input, insertTodo, handleChangeText }}>
        <Input />
      </InputContext.Provider>
      {todos ? todos.map((todo, idx) => {
        return (
          <TodoContext.Provider key={todo.id} value={{ todo, updateTodo, deleteTodo }}>
            <Todo />
          </TodoContext.Provider>
        );
      }) : null}
    </div>
    );
}

export default App;
