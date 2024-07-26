import { Link } from "react-router-dom";

export default function Login() {
 
    return (
        <div className="login-page">
            <div className="login-form-container">
                <img className="medium-logo" src="/logos/restaurant-logo-red.png" alt="restaurant-logo-red" />
                <h3>Login to your account</h3>
                <form action="">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"/>

                    <button type="submit">Sign in</button>
                </form>

                <div className="sign-up">
                    <p>Not a member?</p>
                    <Link to="/register">Sign Up Here</Link>
                </div>
            </div>

        </div>
    )
}