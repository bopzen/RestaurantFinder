export default function RestaurantListItem() {
    return (
        <div className="restaurant-list-item-container">
            <h3>RESTAURANT NAME</h3>
            <div className="restaurant-avatar">
                <img src="/logos/restaurant-avatar.png" alt="" />
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
                    <h4>Italian</h4>
                    <p>20 to 30 lv.</p>
                    <p>Sofia, 1 Bulgaria str</p>
                </div>
            </div>
        </div>
    )
}