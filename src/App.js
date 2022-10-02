
import React, { useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState(initialState);
  const [editTodo, setEditTodo] = React.useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList 
          todos={todos} 
          setTodos={setTodos}
          setEditTodo={setEditTodo}
           />
        </div>

      </div>
    </div>
  );
}

export default App;
