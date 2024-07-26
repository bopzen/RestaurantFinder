import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Logout from '../auth/Logout';
import { useModal } from '../../hooks/useModal';

export default function Header() {

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
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><div className="link-div" onClick={logoutClickHandler}>Logout</div></li>
                    </ul>
                </nav>
            </header>
            {showLogout && <Logout
                onClose = {logoutCloseHandler}
            />} 
        </>
    )
}