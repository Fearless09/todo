import { Link } from 'react-router-dom'

function Navbar({ active, setActive }) {

    return (
        <nav className='container' id='navbar'>
            <div className='hstack justify-between text-center'>
                <Link className={`nav-link ${active == 'all'? 'active': ''}`} to="/" onClick={() => setActive('all')}>All</Link>
                <Link className={`nav-link ${active == 'active' ? 'active' : ''}`} to="/active" onClick={() => setActive('active')}>Active</Link>
                <Link className={`nav-link ${active == 'completed' ? 'active' : ''}`} to="/completed" onClick={() => setActive('completed')}>Completed</Link>
            </div>
        </nav>
    )
}

export default Navbar
