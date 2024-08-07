import { BASE_API_URL } from "../../constants/constants";
import { useEffect, useState } from "react";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import RestaurantListItem from "./RestaurantListItem";

export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loadingReviews, setLoadingReviews] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch(`${BASE_API_URL}/data/restaurants`);
                const result = await response.json();
                if (response.ok) {
                    setRestaurants(result);
                } else {
                    setError(result);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    useEffect(() => {
        const fetchReviewsForRestaurants = async () => {
            const updatedRestaurants = await Promise.all(
                restaurants.map(async (restaurant) => {
                    const urlSearchParams = new URLSearchParams({
                        where: `restaurantId="${restaurant._id}"`,
                    })
                    try {
                        const response = await fetch(`${BASE_API_URL}/data/reviews?${urlSearchParams.toString()}`);
                        const reviews = await response.json();
                        const reviewCount = reviews.length;
                        const averageRating = reviewCount
                            ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviewCount
                            : 0;
                        return { ...restaurant, reviewCount, averageRating };
                    } catch {
                        return { ...restaurant, reviewCount: 0, averageRating: 0 };
                    }
                })
            );
            setRestaurants(updatedRestaurants);
            setLoadingReviews(false);
        };

        if (restaurants.length > 0) {
            fetchReviewsForRestaurants();
        }
    }, [restaurants.length]);

    if (loading || loadingReviews) {
        return <div><LoadingSpinner /></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!restaurants || restaurants.length === 0) {
        return <div>No restaurant data available</div>;
    }

    return (
        <section className="restaurant-list-section">
            <h1>Find the best restaurant around you</h1>
            <div className="restaurant-list-container">   
                {restaurants.map((restaurant) => (
                    <RestaurantListItem 
                        key={restaurant._id} 
                        restaurant={restaurant}
                        reviewCount={restaurant.reviewCount}
                        averageRating={restaurant.averageRating}
                    />
                ))}
            </div>
        </section>
    );
}
