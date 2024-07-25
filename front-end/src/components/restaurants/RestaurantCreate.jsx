import { useState } from "react";
import { CUISINES, PRICE_RANGES } from "../../constants/constants";

export default function RestaurantCreate(
    { onClose }
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

    return (
        <>
            <div className="overlay">
                <div className="backdrop" onClick={onClose}>
                </div>
                    <div className="modal">
                        <h1>Add restaurant</h1>
                            <button>Add</button>
                            <button onClick={onClose}>Cancel</button>
                    </div>
            </div>
        </>
    )
}