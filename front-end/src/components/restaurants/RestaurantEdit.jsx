import { useState, useEffect } from "react";
import { BASE_API_URL, CUISINES, PRICE_RANGES } from "../../constants/constants";

export default function RestaurantEdit(
    { restaurantId, onClose }
) {

    const [formData, setFormData] = useState({
        name: '',
        cuisine: '',
        priceRange: '',
        capacity: '',
        about: '',
        profilePictureURL: '',
        address: {
            city: '',
            street: '',
            streetNumber: ''
        },
        geolocation: {
            latitude: '',
            longitude: ''
        },
        contacts: {
            email: '',
            phoneNumber: '',
            website: ''
        },
        extras: {
            hasWifi: false,
            hasParking: false,
            acceptCard: false
        },
        workingHours: {
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
        },
        picturesURL: []
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const cuisines = CUISINES;
    const priceRanges = PRICE_RANGES;

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await fetch(`${BASE_API_URL}/restaurants/${restaurantId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchRestaurant();
    }, [restaurantId]);
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                extras: {
                    ...prevData.extras,
                    [name]: checked
                }
            }));
        } else if (name.includes('.')) {
            const [key, subkey] = name.split('.');
            setFormData((prevData) => ({
                ...prevData,
                [key]: {
                    ...prevData[key],
                    [subkey]: value
                }
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch(`${BASE_API_URL}/restaurants/${restaurantId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response error');
            }

            const result = await response.json();
            setSuccess('Restaurant updated successfully!');
            onClose();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="overlay">
                <div className="backdrop" onClick={onClose}>
                </div>
                    <div className="modal create-restaurant-modal">
                        <h1>Edit Restaurant</h1>
                        <form className="create-form" onSubmit={handleSubmit}>
                            <div className="create-form-top">
                                <div className="create-form-left">
                                    <div>
                                        <label>
                                            Name:
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Cuisine:
                                            <select
                                                name="cuisine"
                                                value={formData.cuisine}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Cuisine</option>
                                                {cuisines.map((cuisine) => (
                                                    <option key={cuisine} value={cuisine}>
                                                        {cuisine}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Price Range:
                                            <select
                                                name="priceRange"
                                                value={formData.priceRange}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Price Range</option>
                                                {priceRanges.map((range) => (
                                                    <option key={range} value={range}>
                                                        {range}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>
                                        <br />
                                    </div>
                                    <div>
                                        <label>
                                            Capacity:
                                            <input
                                                type="number"
                                                name="capacity"
                                                value={formData.capacity}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            About:
                                            <textarea
                                                name="about"
                                                value={formData.about}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Profile Picture URL:
                                            <input
                                                type="text"
                                                name="profilePictureURL"
                                                value={formData.profilePictureURL}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div className="form-address">
                                        <h4>Address</h4>
                                        <label>
                                            City:
                                            <input
                                                type="text"
                                                name="address.city"
                                                value={formData.address.city}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                        <label>
                                            Street:
                                            <input
                                                type="text"
                                                name="address.street"
                                                value={formData.address.street}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                        <label>
                                            Street Number:
                                            <input
                                                type="text"
                                                name="address.streetNumber"
                                                value={formData.address.streetNumber}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div className="form-geolocation"> 
                                        <h4>Geolocation</h4>
                                        <label>
                                            Latitude:
                                            <input
                                                type="number"
                                                step="any"
                                                name="geolocation.latitude"
                                                value={formData.geolocation.latitude}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                        <label>
                                            Longitude:
                                            <input
                                                type="number"
                                                step="any"
                                                name="geolocation.longitude"
                                                value={formData.geolocation.longitude}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="create-form-left">
                                    <div className="form-contacts">
                                        <h4>Contacts</h4>
                                        <label>
                                            Email:
                                            <input
                                                type="email"
                                                name="contacts.email"
                                                value={formData.contacts.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                        <label>
                                            Phone Number:
                                            <input
                                                type="text"
                                                name="contacts.phoneNumber"
                                                value={formData.contacts.phoneNumber}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                        <label>
                                            Website:
                                            <input
                                                type="text"
                                                name="contacts.website"
                                                value={formData.contacts.website}
                                                onChange={handleChange}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <h4>Extras</h4>
                                        <label>
                                            Has Wifi:
                                            <input
                                                type="checkbox"
                                                name="hasWifi"
                                                checked={formData.extras.hasWifi}
                                                onChange={handleChange}
                                            />
                                        </label>
                                        <label>
                                            Has Parking:
                                            <input
                                                type="checkbox"
                                                name="hasParking"
                                                checked={formData.extras.hasParking}
                                                onChange={handleChange}
                                            />
                                        </label>
                                        <label>
                                            Accepts Card:
                                            <input
                                                type="checkbox"
                                                name="acceptCard"
                                                checked={formData.extras.acceptCard}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="form-working-hours">
                                        <h4>Working Hours</h4>
                                        {Object.keys(formData.workingHours).map((day) => (
                                            <label key={day}>
                                                {day}:
                                                <input
                                                    type="text"
                                                    name={`workingHours.${day}`}
                                                    value={formData.workingHours[day]}
                                                    onChange={handleChange}
                                                    required
                                                />                                    
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            
                            <div className="create-form-pictures">
                                <h4>Pictures URL</h4>
                                <label>
                                    Pictures URL (comma separated):
                                    <input
                                        id="picture-input"
                                        type="text"
                                        name="picturesURL"
                                        value={formData.picturesURL.join(',')}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            picturesURL: e.target.value.split(',')
                                        })}
                                    />
                                </label>
                            </div>
                            <div className="create-form-buttons">
                                <button className="form-submit-btn"type="submit" disabled={loading}>
                                    {loading ? 'Editing...' : 'Edit Restaurant'}
                                </button>
                                <button className="form-cancel-btn" onClick={onClose}>Cancel</button>
                            </div>
                        </form>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        {success && <div style={{ color: 'green' }}>{success}</div>}
                    </div>
            </div>
        </>
    )
}