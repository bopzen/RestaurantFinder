export default function About() {
    return (
        <>
            <section className="about">
                <h1>About RestaurantFinder App</h1>
                <div className="about-container">
                    <div className="about-left">
                        <h2>Hello, my name is Boyan Todorov and have recently graduated as a Full-stack Python developer. I am currently expanding my knowledge studying React at SoftUni.</h2>
                        <h3>This is my project for my React course final assessment</h3>
                        <p><b>RestaurantFinder</b> is a web application developed with React. The main purpose of the application is to show a catalog of restaurants in the area, so the client can choose a restaurant to visit.</p>
                        <p>Clients will be able to leave reviews on any restaurant.</p>
                    </div>
                    <div className="about-image-container">
                        <img src="/images/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg" alt="about" />
                    </div>
                </div>

            </section>
            
        </>
    )
}