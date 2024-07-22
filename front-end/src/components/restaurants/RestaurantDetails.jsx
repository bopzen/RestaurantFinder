import Map from "../map/Map";



export default function RestaurantDetails() {
    return (
        <section className="restaurant-details">
            <div className="restaurant-details-container">
                <div className="restaurant-details-top">
                    <div className="restaurant-avatar">
                        <img src="/logos/restaurant-avatar.png" alt="" />
                    </div>
                    <div className="restaurant-details-top-right">
                        <h3>RESTAURANT NAME</h3>
                        <p>Sofia, 1 Bulgaria str</p>
                        <div className="rating-details">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                            <p>3.5</p>
                            <p>(100)</p>
                        </div>
                        <div className="restaurant-info"> 
                            <div>
                                <p><i class="fa-solid fa-utensils"></i></p>
                                <p><i class="fa-solid fa-money-bill-1-wave"></i></p>
                            </div>
                            <div>
                                <p><b>Cuisine:</b> Italian</p>
                                <p><b>Price range:</b> 20 to 30 lv.</p>
                            </div>
                        </div>
                        <div className="extras">
                            <i class="fa-solid fa-wifi"></i>
                            <i class="fa-solid fa-square-parking"></i>
                            <i class="fa-regular fa-credit-card"></i>
                        </div>
                    </div>
                </div>

                <div className="restaurant-details-bottom">
                    <h4>Working Hours</h4>
                    <table>
                        <thead>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>11:00-23:00</td>
                                <td>11:00-23:00</td>
                                <td>11:00-23:00</td>
                                <td>11:00-23:00</td>
                                <td>11:00-23:00</td>
                                <td>11:00-23:00</td>
                                <td>Closed</td>
                            </tr>
    
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="restaurant-map-container">
                <Map />
            </div>
            <div className="restaurant-pictures-container">
                <div className="restaurant-photo-container">
                    <img src="/images/restaurant-interior.jpg" alt="restaurant-pic" />
                </div>
                <div className="restaurant-photo-container">
                    <img src="/images/restaurant-interior.jpg" alt="restaurant-pic" />
                </div>
                <div className="restaurant-photo-container">
                    <img src="/images/restaurant-interior.jpg" alt="restaurant-pic" />
                </div>
                <div className="restaurant-photo-container">
                    <img src="/images/restaurant-interior.jpg" alt="restaurant-pic" />
                </div>

            </div>
        </section>
    )
}