import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="register-page">
            <div className="register-form-container">
                <img className="medium-logo" src="/logos/restaurant-logo-red.png" alt="restaurant-logo-red" />
                <h3>Register to your account</h3>
                <form action="">
                    <label htmlFor="role">Are you a restaurant or a client?</label>
                    <div className="radio">
                        <label for="restaurant">Restaurant</label>
                        <input type="radio" id="restaurant" name="role" value="restaurant"/>
                        <label for="client">Client</label>
                        <input type="radio" id="client" name="role" value="client"/>
                    </div>

                    


                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"/>
                    <label htmlFor="password">Repeat Password</label>
                    <input type="password" id="password" name="password"/>

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