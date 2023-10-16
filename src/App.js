import { useState } from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm/NewTodoForm';
import TimeDate from './components/TimeDate/TimeDate';
import Weather from './components/weather/Weather';

function App() {

  const [todos,SetTodos] = useState([]);

  function addTodo(title) {
        SetTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id : crypto.randomUUID(), title, completed: false },
      ]

    })
  }

  function toggleTodo (id,completed) {
    SetTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    SetTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <div className="main">
      <div className="Time">
        <TimeDate/>
      </div>
    <div className="TodoList">
    <NewTodoForm addTodo={addTodo}/>
    <h1 className="Header" style={{textAlign:"center"}}>Todo List</h1>
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return <li key={todo.id}>
        <label>
          <input type="checkbox" 
          checked={todo.completed}
          onChange={e => toggleTodo(todo.id, e.target.checked)} />
          {todo.title}
        </label>
        <button onClick={() => deleteTodo(todo.id)} 
        className="btn-delete">Delete</button>
      </li>
      })}
    </ul>
    </div>
    <div className="Weather">
    <Weather />
    </div>
    </div>
  );
}

export default App;
