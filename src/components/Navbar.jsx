import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <nav className='container' id='navbar'>
            <div className='hstack justify-between text-center'>
                <Link className='nav-link active' to="/">All</Link>
                <Link className='nav-link' to="/active">Active</Link>
                <Link className='nav-link' to="/completed">Completed</Link>
            </div>
        </nav>
    )
}

export default Navbar
