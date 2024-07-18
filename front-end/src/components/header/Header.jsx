import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>Restaurants</Link></li>
                        <li><Link>Map</Link></li>
                    </ul>
                </nav>
                <nav>
                    <Link>Search</Link>
                </nav>
                <nav>
                    <ul>
                        <li><Link>Register</Link></li>
                        <li><Link>Login</Link></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}