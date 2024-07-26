import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-main">
                    <Link to="/">
                        <nav className='footer-logo'>
                            <img className="medium-logo" src="/logos/restaurant-logo-white.png" alt="restaurant-logo-red" />
                            <div>
                                <p>Restaurant</p>
                                <p>Finder</p>
                            </div>
                        </nav>               
                    </Link>

                    <nav>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><a href="https://github.com/bopzen/RestaurantFinder" target='_blank'>GitHub Project Repo</a></li>

                            <li className='footer-social-links'>
                            <a href="https://github.com/bopzen" target='_blank'><i className="fab fa-github"></i></a>
                            <a href="https://facebook.com/boyantodorov" target='_blank'><i className="fab fa-facebook"></i></a>
                            <a href="https://linkedin.com/in/boyantodorov" target='_blank'><i className="fab fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='footer-bottom'>
                    <p>© 2024 BOPZEN | RestaurantFinder | SoftUni React Final Project Defense | Restaurant Finder App</p>
                </div>
            </footer>
        </>
    )
}