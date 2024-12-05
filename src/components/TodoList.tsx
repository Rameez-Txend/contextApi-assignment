import React, { useContext } from "react"
import TodoContext from "../contexts/todocontext";



function TodoList({}) {

  const { todos, setTodos } = useContext(TodoContext);


  const deleteTodo= (_id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== _id)
    }
    )
  }

  const toggleTodo = (id, completed) => {
    setTodos(
      currentTodos => {
        return currentTodos.map(todo => {
          if(todo.id === id){
            return {...todo, completed}
          }

          return todo
        })
      }
    )
  }


  return (
    <>
    <ul>
      {todos.length === 0 && "No Todos"}
      {todos.map(todos => {
        return <li key={todos.id}>
        <label>
          <input type="checkbox" checked={todos.checked} onChange={e => toggleTodo(todos.id, e.target.checked)}/>
          {todos.title}
        </label>
        <button
         onClick={() => deleteTodo(todos.id)}
         >Delete</button>
      </li>
      })}
      
    </ul>
    </>
  )
}

export default TodoList



// onChange={e => toggleTodo(todo.id, e.target.checked)