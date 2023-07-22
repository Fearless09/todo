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
            <form className="hstack justify-between" onSubmit={addButton}>
                <input type="text" placeholder='add details' value={text} onChange={e => setText(e.target.value)} name="addtodo-input" id="addtodo-input" required />
                <button type='submit' className='btn btn-primary'>Add</button>
            </form>
        </div>
    )
}

export default Addtodo
