import { Link } from "react-router-dom";
import { useState, useContext  } from "react";
import AuthContext from "../../contexts/authContext.jsx";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (error) {
            setErrorMessage(error.message); 
        }
    };

    return (
        <div className="login-page">
            <div className="login-form-container">
                <img className="medium-logo" src="/logos/restaurant-logo-red.png" alt="restaurant-logo-red" />
                <h2>Login to your account</h2>
                <form onSubmit={handleSubmit}>
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

                    <button type="submit">Sign in</button>
                </form>

                <div className="sign-up">
                    <p>Not a member?</p>
                    <Link to="/register">Sign Up Here</Link>
                </div>

                {errorMessage && ( 
                        <div className="error-message">
                            {errorMessage}
                        </div>
                    )}
            </div>

        </div>
    )
}