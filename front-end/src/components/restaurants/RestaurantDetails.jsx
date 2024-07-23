import Map from "../map/Map";



export default function RestaurantDetails() {
    return (
        <section className="restaurant-details">
            <div className="restaurant-details-main">
                <div className="restaurant-details-container">
                    <div className="restaurant-details-top">
                        <div className="restaurant-avatar">
                            <img src="/logos/restaurant-avatar.png" alt="" />
                        </div>
                        <div className="restaurant-details-top-right">
                            <h3>RESTAURANT NAME</h3>
                            <p>Sofia, 1 Bulgaria str</p>
                            <div className="rating-details">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <i className="fa-regular fa-star"></i>
                                <p>3.5</p>
                                <p>(100)</p>
                            </div>
                            <div className="restaurant-info"> 
                                <div>
                                    <p><i className="fa-solid fa-utensils"></i></p>
                                    <p><i className="fa-solid fa-money-bill-1-wave"></i></p>
                                </div>
                                <div>
                                    <p><b>Cuisine:</b> Italian</p>
                                    <p><b>Price range:</b> 20 to 30 lv.</p>
                                </div>
                            </div>
                            <div className="extras">
                                <i className="fa-solid fa-wifi"></i>
                                <i className="fa-solid fa-square-parking"></i>
                                <i className="fa-regular fa-credit-card"></i>
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
                <div className="restaurant-photo-container">
                    <img src="/images/restaurant-interior.jpg" alt="restaurant-pic" />
                </div>

            </div>
            <div className="restaurant-about-container">
                <h2>About RESTAURANT NAME</h2>
                <p>Welcome to Gourmet Haven, a culinary paradise nestled in the heart of the city. Our restaurant is renowned for its eclectic fusion of global flavors, artfully crafted to create a memorable dining experience. With a menu that changes seasonally, we source the freshest ingredients from local farms and international markets, ensuring every dish bursts with vibrant, authentic flavors. Step into our elegantly designed space, where contemporary décor meets rustic charm, creating a warm and inviting atmosphere. Whether you're dining with friends, family, or that special someone, Gourmet Haven offers the perfect setting for any occasion. Our knowledgeable and attentive staff are dedicated to providing impeccable service, ensuring your visit is nothing short of extraordinary. Indulge in our signature dishes, such as the truffle-infused risotto, the succulent lamb chops marinated in exotic spices, or our decadent chocolate fondant. Complement your meal with a selection from our extensive wine list, featuring both local vintages and international favorites. At Gourmet Haven, we believe that dining is not just about food; it's about creating lasting memories. Join us for an unforgettable culinary journey that will delight your taste buds and leave you craving more. Book your table today and discover why Gourmet Haven is the city's premier dining destination.</p>
            </div>
        </section>
    )
}