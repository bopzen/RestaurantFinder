import { Link } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import Logout from '../auth/Logout';
import { useModal } from '../../hooks/useModal';

export default function Header() {
    const { email, role } = useContext(AuthContext);

    const {
        isVisible: showLogout,
        openModal: logoutClickHandler,
        closeModal: logoutCloseHandler,
    } = useModal();

    return (
        <>
            <header>
                <Link to="/">
                    <div className="header-logo">
                        <img className="medium-logo" src="/logos/restaurant-logo-red.png" alt="restaurant-logo-red" />
                        <div>
                            <p>Restaurant</p>
                            <p>Finder</p>
                        </div>               
                    </div>
                </Link>
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
                        {email ? (
                            <>
                                <li>Welcome, {email}</li>
                                
                                {role =="restaurant" &&
                                    <li><Link to="/dashboard">Dashboard</Link></li>}
                           
                                <li><div className="link-div" onClick={logoutClickHandler}>Logout</div></li>
                            </>
                            
                        ) : (
                            <>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </>                       
                        )}
                                             
                    </ul>
                </nav>
            </header>
            {showLogout && <Logout
                onClose = {logoutCloseHandler}
            />} 
        </>
    )
}