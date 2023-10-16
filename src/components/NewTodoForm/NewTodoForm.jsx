import React,{useState} from 'react'
import './NewTodoForm.css';
function NewTodoForm(props) {
  const [newItem,SetnewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.addTodo(newItem)
    SetnewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="input-text">
        <label>item here</label>
        <input
          value={newItem}
          onChange={e => SetnewItem(e.target.value)}
          type="text"
          id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}

export default NewTodoForm;
