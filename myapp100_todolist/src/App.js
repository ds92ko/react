import React, {useEffect, useState} from 'react';
import './App.css';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import TextField from '@mui/material/TextField';

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
      <form onSubmit={insertTodo}>
        {/* <input type='text' required={true} value={input} onChange={handleChangeText}/> */}
        <TextField id="standard-basic" variant="standard" required={true} value={input} onChange={handleChangeText} />
        <input type='submit' value='Create' />
      </form>
      {todos ? todos.map((todo, idx) => {
        return (
          <div className='todo' key={todo.id}>
            <h3>
              <label className={todo.completed ? 'completed' : null} onClick={() => {updateTodo(todo.id)}}>
                {todo.todoname}
              </label>
              <label onClick={() => deleteTodo(todo.id)}><DeleteRoundedIcon /></label>
            </h3>
          </div>
        );
      }) : null}
    </div>
    );
}

export default App;
