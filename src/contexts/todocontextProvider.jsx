import React, { useState } from 'react';
import TodoContext from './todocontext';
  
  const TodoContextProvider = ({children}) =>  {

    const [todos, setTodos] = useState([])
	return (
	  <div>
        <TodoContext.Provider value={{todos,setTodos}}>
          {children}
        </TodoContext.Provider>
	  </div>
	);
  }
  
  export default TodoContextProvider;
  