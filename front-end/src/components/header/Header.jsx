import { Link } from 'react-router-dom'

export default function Header({
    onLogout,
}) {
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
                <nav className='account-section'>
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><div className="link-div" onClick={onLogout}>Logout</div></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}