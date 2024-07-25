import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map(
    { restaurant }
) {

    const position = [restaurant.geolocation.latitude, restaurant.geolocation.longitude];

    return (
        <div className='leaflet-container'>
            <MapContainer center={position} zoom={17} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <div className="popup-map">
                            <h3>{restaurant.name}</h3>
                            <div className="popup-info-wrapper">
                                <div>
                                    <div className="restaurant-avatar-map">
                                        <img src={restaurant.profilePictureURL} alt="restaurant-profile-picture" />
                                    </div>
                                    <div className="rating-map">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                </div>

                            <div className="details-map">
                                <h4><i className="fa-solid fa-utensils"></i> {restaurant.cuisine}</h4>
                                <p><i className="fa-solid fa-money-bill-1-wave"></i> {restaurant.priceRange}</p>
                                <p><i className="fa-solid fa-location-dot"></i> {restaurant.address.city}, {restaurant.address.streetNumber} {restaurant.address.street} str.</p>
                                <p><i className="fa-solid fa-globe"></i><a href={restaurant.contacts.website} target="_blank"> {restaurant.contacts?.website}</a></p>
                            </div>
                            </div>
                        </div>                    
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}