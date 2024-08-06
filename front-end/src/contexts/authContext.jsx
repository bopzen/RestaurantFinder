import React, { createContext, useState, useEffect } from 'react';
import { BASE_API_URL } from '../constants/constants';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || "");
    const [role, setRole] = useState(null);
    const navigate = useNavigate();



    const register = async (email, password, role) => {
        const response = await fetch(`${BASE_API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, role })
        });

        if (response.ok) {
            const data = await response.json();
            setEmail(data.email);
            setToken(data.token);
            setRole(data.role);
            localStorage.setItem('email', JSON.stringify(data.email));
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('role', data.role);
            console.log(data)
            navigate("/");
        } else {
            throw new Error('Registration failed');
        }
    };

    const login = async (email, password) => {
        const response = await fetch(`${BASE_API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            setEmail(data.email);
            setToken(data.accessToken);
            setRole(data.role);
            localStorage.setItem('email', JSON.stringify(data.email));
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('role', data.role);
            console.log(data)
            navigate("/");
        } else {
            throw new Error('Login failed');
        }
    };

    const logout = async () => {
        const response = await fetch(`${BASE_API_URL}/users/logout`, {
            method: 'GET',
            headers: {
                'X-Authorization': token
            }
        });

        if (response.status === 204) {
            setEmail(null);
            setToken(null);
            setRole(null);
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            localStorage.removeItem('role');
        } else {
            throw new Error('Logout failed');
        }
    };

    return (
        <AuthContext.Provider value={{ email, role, token, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
