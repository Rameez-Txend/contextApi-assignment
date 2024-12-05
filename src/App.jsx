import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoContextProvider from './contexts/todocontextProvider'


function App() {
  return (
    <TodoContextProvider>
    <TodoForm/> 
    <TodoList />   
    </TodoContextProvider>
  )
}

export default App
