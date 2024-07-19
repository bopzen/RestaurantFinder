import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-main">
                    <nav>
                        <p>Restaurant Finder</p>
                    </nav>
                    <nav>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><a href="https://github.com/bopzen/RestaurantFinder" target='_blank'>GitHub Project Repo</a></li>

                            <li>
                            <a href="https://github.com/bopzen" target='_blank'><i className="fab fa-github"></i></a>
                            <a href="https://facebook.com/boyantodorov" target='_blank'><i className="fab fa-facebook"></i></a>
                            <a href="https://linkedin.com/in/boyantodorov" target='_blank'><i className="fab fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <p>© 2024 BOPZEN SoftUni React Final Project Defense Restaurant Finder App</p>
                </div>
            </footer>
        </>
    )
}