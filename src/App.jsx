import { useState , useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import All from './pages/All'
import Active from './pages/Active';
import Completed from './pages/Completed';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Do coding challenges',
      completed: false
    },
    {
      id: 2,
      text: 'Do coding challenges',
      completed: false
    },
    {
      id: 3,
      text: 'Do coding challenges',
      completed: true
    },
  ])

  // Load Task From Local Storage
  function loadFromLocalStorage() {
    const storeTodos = localStorage.getItem('todos');
    if (storeTodos) {
      setTodos(JSON.parse(storeTodos));
    }
  }

  useEffect(() => {
    loadFromLocalStorage()
  }, [])

  // Save to Local Storage
  function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  useEffect(() => {
    window.addEventListener('beforeunload', saveToLocalStorage)

    return () => {
      window.removeEventListener('beforeunload', saveToLocalStorage)
    }

  }, [todos])

  // Add todo
  function addTodo(todo) {
    const id = Math.floor(Math.random() * 1000) + 1
    const completed = false
    const newTodo = { id, completed, ...todo }
    setTodos([...todos, newTodo])
  }

  // Delete Completed Todo
  function deleteTodo(todoId) {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  // Delete Completed Todos
  function deleteTodos() {
    setTodos([])
  }

  // Complete Todo
  function completeTodo(todoId) {
    const updatedTodo = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
    setTodos(updatedTodo)
    // console.log(todoId)
  }

  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route index element={<All todos={todos} completeTodo={completeTodo} addTodo={addTodo} />} />
        <Route path='/active' element={<Active todos={todos} completeTodo={completeTodo} addTodo={addTodo} />} />
        <Route path='/completed' element={<Completed todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} deleteTodos={deleteTodos} />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
