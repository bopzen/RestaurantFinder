import { useState, useEffect } from "react"
import { BASE_API_URL } from "../../constants/constants";

export default function RestaurantDelete(
    { restaurantId, onClose }
) {
    const [restaurantName, setRestaurantName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await fetch(`${BASE_API_URL}/restaurants/${restaurantId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRestaurantName(data.name);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchRestaurant();
    }, [restaurantId]);

    const handleDelete = async () => {
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch(`${BASE_API_URL}/restaurants/${restaurantId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setSuccess('Restaurant deleted successfully!');
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
                    <div className="modal delete-modal">
                        <h1>Are you sure you want to delete {restaurantName}?</h1>
                            <div className="create-form-buttons">
                                <button className="form-submit-btn" onClick={handleDelete}>Delete</button>
                                <button className="form-cancel-btn" onClick={onClose}>Cancel</button>
                            </div>

                    </div>
            </div>
        </>
    )
}