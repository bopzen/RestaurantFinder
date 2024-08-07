import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { BASE_API_URL } from "../../constants/constants";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import { useEffect, useState } from "react";

export default function RestaurantReviews() {
    const { restaurantId } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loadingReviews, setLoadingReviews] = useState(true);
    const [errorReviews, setErrorReviews] = useState(null);


    const fetchRestaurant= async () => {
        try {
            const response = await fetch(`${BASE_API_URL}/data/restaurants/${restaurantId}`);
            const result = await response.json();
            if (response.ok) {
                setRestaurant(result);
            } else {
                setError(result);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
      
    }



    const urlSearchParams = new URLSearchParams({
        where: `restaurantId="${restaurantId}"`,
    })

    const fetchReviews = async () => {
        try {
            const response = await fetch(`${BASE_API_URL}/data/reviews?${urlSearchParams.toString()}`);
            const result = await response.json();
            if (response.ok) {
                setReviews(result);
            } else {
                setErrorReviews(result);
            }
            console.log(result)
        } catch (err) {
            setErrorReviews(err.message);
        } finally {
            setLoadingReviews(false);
        }
      
    }
    
    useEffect(() => {
        fetchRestaurant();
        fetchReviews();
    }, [restaurantId]);

    if (loading) {
        return <div><LoadingSpinner /></div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!restaurant || restaurant.length == 0) {
        return <div>No restaurant data available</div>;
    }

    if (loadingReviews) {
        return <div><LoadingSpinner /></div>;
    }

    if (error) {
        return <div>Error: {errorReviews.message}</div>;
    }

    if (!reviews || reviews.length == 0) {
        return <div>No reviews available</div>;
    }
    
    

    return (
        <section className="restaurant-reviews">
            <h1>{restaurant.name} reviews</h1>
            <ul>
                {reviews.map((review) => (
                    <li key={review._id}>
                        <h4>Comment: {review.comment}</h4>
                        <p>Rating: {review.rating}</p>
                        <p>By: {review.email}</p>
                    </li>
                ))}
            </ul>
        </section>
    )

}