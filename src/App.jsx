import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Aos from 'aos'
import './App.css'
import All from './pages/All'
import Active from './pages/Active';
import Completed from './pages/Completed';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [active, setActive] = useState('')

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
    Aos.init()
    loadFromLocalStorage()
  }, [])

  // Save to Local Storage
  function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // useEffect(() => {
  //   window.addEventListener('beforeunload', saveToLocalStorage)

  //   return () => {
  //     window.removeEventListener('beforeunload', saveToLocalStorage)
  //   }

  // }, [todos])


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
    setTodos(todos.filter(todo => todo.completed === false))
  }

  // Complete Todo
  function completeTodo(todoId, e) {
    // console.log(e)
    const updatedTodo = todos.map(todo => todo.id === todoId ?
      // todo.completed = e.currentTarget.checked
      { ...todo, completed: e.currentTarget.checked }
      : todo
    )
    setTodos(updatedTodo)
    // console.log(todoId)
  }

  return (
    <>
      <Header />
      <Navbar active={active} setActive={setActive} />

      <Routes>
        <Route index element={
          <All todos={todos} completeTodo={completeTodo} addTodo={addTodo} setActive={setActive} />
        } />

        <Route path='/active' element={
          <Active todos={todos} completeTodo={completeTodo} addTodo={addTodo} setActive={setActive} />
        } />

        <Route path='/completed' element={
          <Completed todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} deleteTodos={deleteTodos} setActive={setActive} />
        } />
      </Routes>

      <Footer />
    </>
  )
}

export default App
