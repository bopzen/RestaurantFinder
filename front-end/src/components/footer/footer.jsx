import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer>
                <div class="footer-main">
                    <nav>
                        <p>Restaurant Finder</p>
                    </nav>
                    <nav>
                        <ul>
                            <li><Link>About</Link></li>
                            <li><a href="">GitHub Project Repo</a></li>
                        </ul>
                        <ul>
                            <li><a href="">GitHub</a></li>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">LinkedIn</a></li>
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