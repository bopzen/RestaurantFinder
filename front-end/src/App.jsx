import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx';
import RestaurantList from './components/restaurants/RestaurantList.jsx';
import NotFound from './components/not-found/NotFound.jsx';
import RestaurantMap from './components/restaurants/RestaurantMap.jsx';
import SearchResults from './components/search/SearchResults.jsx';
import Register from './components/auth/Register.jsx';
import Login from './components/auth/Login.jsx';
import Logout from './components/auth/Logout.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import About from './components/about/About.jsx';
import RestaurantDetails from './components/restaurants/RestaurantDetails.jsx';
import Map from './components/map/Map.jsx'
import { AuthProvider } from './contexts/authContext.jsx';
import AuthRoute from './components/auth/AuthRoute.jsx';
import Unauthorized from './components/auth/Unauthorized.jsx';
import RestaurantReviews from './components/reviews/RestaurantReviews.jsx';

function App() {
    return (
        <AuthProvider>
            <Header
            />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<AuthRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                    

                    <Route path="/restaurants" element={<RestaurantList />} />
                    <Route path="/restaurants/:id" element={<RestaurantDetails />} />
                    <Route path="/restaurants/:restaurantId/reviews" element={<RestaurantReviews />} />

                    <Route path="/map" element={<RestaurantMap />} />
                    <Route path="/search" element={<SearchResults />} />
                    
                    <Route path="/unauthorized" element={<Unauthorized />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </AuthProvider>
    )
}

export default App
