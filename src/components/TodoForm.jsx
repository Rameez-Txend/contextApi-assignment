import React, { useContext, useState } from 'react'
import TodoContext from '../contexts/todocontext';


function TodoForm() {

const { setTodos } = useContext(TodoContext);


const addTodos = (title) =>{

  setTodos((currentTodos) => {
    return [
      ...currentTodos,
      {
        id: crypto.randomUUID, title, checked: false
      }
    ]
  })
}

    const [newItem, setNewItem] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();

        addTodos(newItem)

        setNewItem("")

    }
  return (
    <form onSubmit={handelSubmit}>
        <label htmlFor='todo'>Add Item : </label>
        <input id='todo' type='text' value={newItem} onChange={(e) =>setNewItem(e.target.value)}></input>
        <button type='submit'>Save </button>
    </form>
  )
}

export default TodoForm