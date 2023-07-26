import React, { useEffect } from 'react'
import Addtodo from '../components/Addtodo'
import Todos from '../components/Todos'



function All({ todos, completeTodo, addTodo, setActive }) {

    useEffect(() => {
        setActive('all')
        // Aos.init()
    }, [])
    const del = false

    return (
        <div className='container all' data-aos='fade-up-right'>
            <Addtodo addTodo={addTodo} />
            <Todos todos={todos} completeTodo={completeTodo} del={del} />
            {todos.length > 0 ? ''
                : <p className='text-center empty-text'>No Todo</p>
            }
        </div>
    )
}

export default All
