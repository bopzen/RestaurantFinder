import { Link } from "react-router-dom";
import ShowStars from "../reviews/ShowStars";

export default function RestaurantListItem(
    { restaurant, reviewCount, averageRating }
) {

    return (
        <Link to={`/restaurants/${restaurant._id}`} >
            <div className="restaurant-list-item-container">
                <h3>{restaurant.name}</h3>
                <div className="restaurant-avatar">
                    <img src={restaurant.profilePictureURL} alt="restaurant-profile-picture" />
                </div>
                <div className="rating">
                    <ShowStars rating={averageRating} />
                    <div className="rating-stats">
                        <p>{averageRating.toFixed(1)}</p>
                        <p>({reviewCount})</p>
                    </div>
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
        </Link>
    )
}