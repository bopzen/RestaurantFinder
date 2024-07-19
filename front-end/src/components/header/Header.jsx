import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <img className="medium-logo" src="/logos/restaurant-logo-red.png" alt="restaurant-logo-red" />

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/restaurants">Restaurants</Link></li>
                        <li><Link to="/map">Map</Link></li>
                    </ul>
                </nav>
                <nav>
                    <Link to="/search">Search</Link>
                </nav>
                <nav>
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}