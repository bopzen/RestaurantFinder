import { useApi } from "../../hooks/useApi";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import RestaurantListItem from "./RestaurantListItem";

export default function RestaurantList() {
    const { data, loading, error } = useApi('http://localhost:3030/jsonstore/restaurants');
    console.log(data);

    return (
        <section className="restaurant-list-section">
            {loading && <LoadingSpinner />}
            
            <h1>Find the best restaurant around you</h1>
            <div className="restaurant-list-container">
        
                {data && Object.values(data).map((restaurant) => (
                    <RestaurantListItem key={restaurant._id} />
                ))}

            </div>
        </section>

    )
}
