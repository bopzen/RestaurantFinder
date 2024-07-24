import { Link } from "react-router-dom";

export default function RestaurantListItem(
    { restaurant }
) {
    return (    
        <div className="restaurant-list-item-container">
            <Link to={`/restaurants/${restaurant._id}`}><h3>{restaurant.name}</h3></Link>
            <div className="restaurant-avatar">
                <img src={restaurant.profilePictureURL} alt="restaurant-profile-picture" />
            </div>
            <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
            <div className="restaurant-info"> 
                <div>
                    <p><i className="fa-solid fa-utensils"></i></p>
                    <p><i className="fa-solid fa-money-bill-1-wave"></i></p>
                    <p><i className="fa-solid fa-location-dot"></i></p>
                </div>
                <div>
                    <h4>{restaurant.cuisine}</h4>
                    <p>{restaurant.priceRange}</p>
                    <p>{restaurant.address.city}, {restaurant.address.streetNumber} {restaurant.address.street} str.</p>
                </div>
            </div>
        </div>
    )
}