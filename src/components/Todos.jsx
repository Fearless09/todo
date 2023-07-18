import React from 'react'

import Todo from './Todo'

function Todos({ todos, completeTodo, del, deleteTodo }) {
    return (
        <div className='todos'>
            {todos.map((todo, index) => (
                <React.Fragment key={index}>
                    <Todo todo={todo} completeTodo={completeTodo} del={del} deleteTodo={deleteTodo} />
                </React.Fragment>
            ))}
        </div>
    )
}

export default Todos
