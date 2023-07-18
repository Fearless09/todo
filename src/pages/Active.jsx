import React from 'react'
import Addtodo from '../components/Addtodo'
import Todos from '../components/Todos'

function Active({ todos, completeTodo, addTodo }) {
    const del = false
    const newTodos = todos.filter(todo => todo.completed === false)

    return (
        <div className='container all'>
            <Addtodo addTodo={addTodo} />
            <Todos todos={newTodos} completeTodo={completeTodo} del={del} />
            {newTodos.length > 0 ? ''
                : <p className='text-center empty-text'>No Active Todo</p>
            }
        </div>
    )
}

export default Active
