import RestaurantListItem from "./RestaurantListItem";

export default function RestaurantList() {
    return (
        <section className="restaurant-list-section">
            <h1>Find the best restaurant around you</h1>
            <div className="restaurant-list-container">
                
                <RestaurantListItem />
                <RestaurantListItem />
                <RestaurantListItem />
                <RestaurantListItem />
                <RestaurantListItem />
                <RestaurantListItem />
                <RestaurantListItem />
                <RestaurantListItem />
                <RestaurantListItem />
                <RestaurantListItem />
            </div>
        </section>

    )
}