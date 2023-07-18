import React, { useState } from 'react'

function Addtodo({ addTodo }) {
    const [text, setText] = useState('')

    function addButton(e) {
        e.preventDefault()
        addTodo({ text })

        setText('')
    }

    return (
        <div className='addtodo'>
            <div className="hstack justify-between">
                <input type="text" placeholder='add details' value={text} onChange={e => setText(e.target.value)} name="addtodo-input" id="addtodo-input" />
                <button className='btn btn-primary' onClick={addButton}>Add</button>
            </div>
        </div>
    )
}

export default Addtodo
