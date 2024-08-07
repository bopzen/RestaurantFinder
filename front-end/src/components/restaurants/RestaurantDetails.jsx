import Map from "../map/Map";
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useApi } from '../../hooks/useApi';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { BASE_API_URL } from "../../constants/constants";
import ShowStars from "../reviews/ShowStars";

export default function RestaurantDetails() {
    const {id} = useParams();   

    const [restaurant, setRestaurant] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await fetch(`${BASE_API_URL}/data/restaurants/${id}`);
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
        };

        const fetchReviews = async () => {
            const urlSearchParams = new URLSearchParams({
                where: `restaurantId="${id}"`,
            })
            try {             
                const response = await fetch(`${BASE_API_URL}/data/reviews?${urlSearchParams.toString()}`);
                const result = await response.json();
                if (response.ok) {
                    setReviews(result);
                } else {
                    setError(result);
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchRestaurant();
        fetchReviews();
    }, [id]);

    const calculateAverageRating = () => {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        return totalRating / reviews.length;
    };

    const averageRating = calculateAverageRating();
    const reviewCount = reviews.length;

    if (loading) {
        return <div><LoadingSpinner /></div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!restaurant) {
        return <div>No restaurant data available</div>;
    }

    return (
        <>
            <section className="restaurant-details">
                <div className="restaurant-details-main">
                    <div className="restaurant-details-container">
                        <div className="restaurant-details-top">
                            <div className="restaurant-top-left">
                                <div className="restaurant-avatar">
                                    <img src={restaurant.profilePictureURL} alt="restaurant-profile-picture" />
                                </div>
                                <div className="restaurant-contact-details">
                                    <div>
                                        <p><i className="fa-solid fa-phone"></i></p>
                                        <p><i className="fa-solid fa-envelope"></i></p>
                                        <p><i className="fa-solid fa-globe"></i></p>
                                    </div>
                                    <div>
                                        <p>{restaurant.contacts.phoneNumber}</p>
                                        <p>{restaurant.contacts.email}</p>
                                        <a href={restaurant.contacts.website} target="_blank"><p>{restaurant.contacts.website}</p></a> 
                                    </div>     
                                </div>
                            </div>

                            <div className="restaurant-details-top-right">
                                <h3>{restaurant.name}</h3>
                                <p>{restaurant.address.city}, {restaurant.address.streetNumber} {restaurant.address.street} str.</p>
                                
                                <div className="rating-details">
                                    <ShowStars rating={averageRating} />
                                    <p>{averageRating.toFixed(1)}</p>
                                    <Link to={`/restaurants/${restaurant._id}/reviews`} restaurant={restaurant}><p>({reviewCount})</p></Link>
                                </div>
                                <div className="restaurant-info"> 
                                    <div>
                                        <p><i className="fa-solid fa-utensils"></i></p>
                                        <p><i className="fa-solid fa-money-bill-1-wave"></i></p>
                                        <p><i className="fa-solid fa-people-group"></i></p>
                                    </div>
                                    <div>
                                        <p><b>Cuisine:</b> {restaurant.cuisine}</p>
                                        <p><b>Price range:</b> {restaurant.priceRange}</p>
                                        <p><b>Capacity:</b> {restaurant.capacity}</p>
                                    </div>
                                </div>
                                <div className="extras">
                                    {restaurant.extras.hasWifi && <i className="fa-solid fa-wifi"></i>}
                                    
                                    {restaurant.extras.hasParking && <i className="fa-solid fa-square-parking"></i>}
                                    {restaurant.extras.acceptCard && <i className="fa-regular fa-credit-card"></i>}
                                </div>
                                
                            </div>
                        </div>

                        <div className="restaurant-details-bottom">
                            <h4>Working Hours</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                        <th>Sunday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{restaurant.workingHours.Monday}</td>
                                        <td>{restaurant.workingHours.Tuesday}</td>
                                        <td>{restaurant.workingHours.Wednesday}</td>
                                        <td>{restaurant.workingHours.Thursday}</td>
                                        <td>{restaurant.workingHours.Friday}</td>
                                        <td>{restaurant.workingHours.Saturday}</td>
                                        <td>{restaurant.workingHours.Sunday}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="restaurant-map-container">
                        <Map 
                            restaurant={restaurant}
                            reviewCount={reviewCount}
                            averageRating={averageRating}
                        />
                    </div>           
                    

                </div>    
                <div className="restaurant-pictures-container">
                    {restaurant.picturesURL && restaurant.picturesURL.map((pic, index) => (
                        <div key={index} className="restaurant-photo-container">
                            <img src={pic} alt={`restaurant-pic-${index}`} />
                        </div>
                    ))}

                </div>
                <div className="restaurant-about-container">
                    <h2>About {restaurant.name}</h2>
                    <p>{restaurant.about}</p>
                </div>
            </section>
        </>
        
    )
}