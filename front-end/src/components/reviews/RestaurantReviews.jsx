import { useParams } from "react-router-dom";
import { BASE_API_URL } from "../../constants/constants";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../contexts/authContext.jsx";
import ShowStars from "./ShowStars";
import { useModal } from "../../hooks/useModal.js";
import ReviewCreate from "./ReviewCreate.jsx";

export default function RestaurantReviews() {
    const { email, role } = useContext(AuthContext);
    const { restaurantId } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loadingReviews, setLoadingReviews] = useState(true);
    const [errorReviews, setErrorReviews] = useState(null);

    const {
        isVisible: showCreateReview,
        openModal: createReviewClickHandler,
        closeModal: createReviewCloseHandler,
    } = useModal();

    const handleCreateReviewSuccess = () => {
        fetchReviews();
    };


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

    const hasReviewed = reviews.some(review => review.email === email);
    
    const formatDate = (dateString) => {
        let date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('en-GB', options);
    }

    const sortedReviews = reviews.sort((a, b) => b._createdOn - a._createdOn);
    
    return (
        <section className="restaurant-reviews">
            <h1>{restaurant.name} reviews</h1>
            {role =="client" && !hasReviewed &&
                <button onClick={createReviewClickHandler}>Write a review</button>
            }
            <div className="restaurant-reviews-container">
                {sortedReviews.map((review) => (
                    <div className="restaurant-review-card" key={review._id}>
                        <div>
                            <b><p>{review.email}</p></b>
                            <ShowStars rating={review.rating}/>
                            <p>{formatDate(review._createdOn)}</p>
                        </div>   
                        <p>
                            <i class="fa-solid fa-quote-left"></i> {review.comment} <i class="fa-solid fa-quote-right"></i>
                        </p>
                    </div>
                ))}
            </div>

            {showCreateReview && <ReviewCreate
                onClose = {createReviewCloseHandler}
                onSuccess = {handleCreateReviewSuccess}
                restaurantId = {restaurantId}
            />} 

        </section>
    )

}