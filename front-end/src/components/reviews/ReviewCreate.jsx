import { useState, useContext } from "react";
import AuthContext from "../../contexts/authContext.jsx";
import { BASE_API_URL } from "../../constants/constants";

export default function ReviewCreate({ restaurantId, onClose, onSuccess }) {
    const { token, email } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        rating: '',
        comment: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        const reviewData = {
            email,
            rating: parseInt(formData.rating),
            comment: formData.comment,
            restaurantId: restaurantId,
            _createdOn: Date.now(), 
        };

        try {
            const response = await fetch(`${BASE_API_URL}/data/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': token,
                },
                body: JSON.stringify(reviewData),
            });

            if (!response.ok) {
                throw new Error('Network response error');
            }

            const result = await response.json();
            setSuccess('Review created successfully!');
            onSuccess();
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
                <div className="backdrop" onClick={onClose}></div>
                <div className="modal">
                    <h1>Create Review</h1>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <form onSubmit={handleSubmit}>
                        <label>
                            Rating:
                            <select
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select rating</option>
                                <option value="1">1 Star</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                            </select>
                        </label>
                        <label>
                            Comment:
                            <textarea
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Posting...' : 'Post'}
                        </button>
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
