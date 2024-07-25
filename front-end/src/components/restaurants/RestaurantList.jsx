import { useApi } from "../../hooks/useApi";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import RestaurantListItem from "./RestaurantListItem";

export default function RestaurantList() {
    const { data, loading, error } = useApi('http://localhost:3030/jsonstore/restaurants', {}, null);

    if (loading) {
        return <div><LoadingSpinner /></div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data || Object.keys(data).length == 0) {
        return <div>No restaurant data available</div>;
    }

    return (
        <section className="restaurant-list-section">

            <h1>Find the best restaurant around you</h1>
            <div className="restaurant-list-container">   
                {data && Object.values(data).map((restaurant) => (
                    <RestaurantListItem key={restaurant._id} restaurant={restaurant}/>
                ))}
            </div>
        </section>
    )
}
