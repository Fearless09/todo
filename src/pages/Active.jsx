import React, { useEffect } from 'react'
import Addtodo from '../components/Addtodo'
import Todos from '../components/Todos'

function Active({ todos, completeTodo, addTodo, setActive }) {
    const del = false
    useEffect(() => {
        setActive('active')
    }, [])
    const newTodos = todos.filter(todo => todo.completed === false)

    return (
        <div className='container all' data-aos='zoom-in'>
            <Addtodo addTodo={addTodo} />
            <Todos todos={newTodos} completeTodo={completeTodo} del={del} />
            {newTodos.length > 0 ? ''
                : <p className='text-center empty-text'>No Active Todo</p>
            }
        </div>
    )
}

export default Active
