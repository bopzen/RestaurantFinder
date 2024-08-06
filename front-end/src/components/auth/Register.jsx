import { Link } from "react-router-dom";
import { useState, useContext  } from "react";
import AuthContext from "../../contexts/authContext.jsx";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('restaurant');
    const { register } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(email, password, role);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="register-page">
            <div className="register-form-container">
                <img className="medium-logo" src="/logos/restaurant-logo-red.png" alt="restaurant-logo-red" />
                <h2>Register to your account</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="role">Are you a restaurant or a client?</label>
                    <div className="radio">
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="client">Client</option>
                        <option value="restaurant">Restaurant</option>
                    </select>
                    </div>

                    <label htmlFor="email">Email address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Sign Up</button>
                </form>

                <div className="sign-in">
                    <p>Already a member?</p>
                    <Link to="/login">Sign In Here</Link>
                </div>
            </div>
        </div>
    )
}