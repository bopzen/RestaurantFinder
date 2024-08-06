import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="home-background">
                <img src="/images/lime-near-roasted-meat-salad.jpg" alt="" />

                <div className="welcome-message">
                    <h1>Welcome to </h1>
                    <h1>Restaurant Finder</h1>
                    <h3>Not sure where to eat today?</h3>
                    <h3>We got you covered</h3>
                    <h3>Choose the best restaurant around you</h3>
                </div>
                <div className="welcome-buttons">
                    <Link className="welcome-btn" to="/restaurants">RESTAURANTS</Link>
                    <Link className="welcome-btn" to="/map">RESTAURANTS MAP</Link>
                </div>
            </div>
        </>
    )
}