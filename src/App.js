import { useState } from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';

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
    <>
    <NewTodoForm addTodo={addTodo}/>
    <h1 className="Header">Todo List</h1>
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return <li>
        <label>
          <input type="checkbox" 
          checked={todo.completed}
          onChange={e => toggleTodo(todo.id, e.target.checked)} />
          {todo.title}
        </label>
        <button onClick={() => deleteTodo(todo.id)} 
        className="btn btn-delete">Delete</button>
      </li>
      })}
    </ul>
    </>
  );
}

export default App;
