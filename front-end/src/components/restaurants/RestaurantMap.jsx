import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { BASE_API_URL, SOFIA_COORDINATES } from "../../constants/constants";
import ShowStars from '../reviews/ShowStars';

const customIcon = new L.Icon({
    iconUrl: './logos/restaurant-logo-red.png',
    iconSize: [40, 40],
    iconAnchor: [16, 16],
    popupAnchor: [5, -20]
});


export default function RestaurantMap() {
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

    const positions = restaurants.map(r => [Number(r.geolocation.latitude), Number(r.geolocation.longitude)]);
    const center = positions.length > 0
        ? [
            positions.reduce((acc, [lat]) => acc + lat, 0) / positions.length,
            positions.reduce((acc, [, lng]) => acc + lng, 0) / positions.length
        ]
        : SOFIA_COORDINATES;

    return (
        <section className="big-map-container">
            <div className="big-map">
                <div className='leaflet-container'>
                    <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {restaurants.map(restaurant => (
                            <Marker
                                key={restaurant._id}
                                position={[restaurant.geolocation.latitude, restaurant.geolocation.longitude]}
                                icon={customIcon}
                            >
                                <Popup>
                                    <div className="popup-map">
                                        <Link to={`/restaurants/${restaurant._id}`}><h3>{restaurant.name}</h3></Link>
                                        <div className="popup-info-wrapper">
                                            <div>
                                                <div className="restaurant-avatar-map">
                                                    <img src={restaurant.profilePictureURL} alt="restaurant-profile-picture" />
                                                </div>
                                                <div className="rating-map">
                                                    <ShowStars rating={restaurant.averageRating} />
                                                </div>
                                            </div>
                                            <div className="details-map">
                                                <h4><i className="fa-solid fa-utensils"></i> {restaurant.cuisine}</h4>
                                                <p><i className="fa-solid fa-money-bill-1-wave"></i> {restaurant.priceRange}</p>
                                                <p><i className="fa-solid fa-location-dot"></i> {restaurant.address.city}, {restaurant.address.streetNumber} {restaurant.address.street} str.</p>
                                                <p><i className="fa-solid fa-globe"></i><a href={restaurant.contacts.website} target="_blank" rel="noopener noreferrer"> {restaurant.contacts?.website}</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </section>


    );
};
