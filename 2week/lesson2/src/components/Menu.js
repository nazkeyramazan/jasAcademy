import {Link} from 'react-router-dom'

function Menu(){
    return <nav>
        <Link to="/">Fibonacci</Link>
        <Link to="/factorial">Factorial</Link>
    </nav>
}


export default Menu;