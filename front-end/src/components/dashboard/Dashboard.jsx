import RestaurantCreate from '../restaurants/RestaurantCreate';
import RestaurantEdit from '../restaurants/RestaurantEdit';
import RestaurantDelete from '../restaurants/RestaurantDelete';
import { BASE_API_URL } from "../../constants/constants";
import { useApi } from "../../hooks/useApi";
import { useState, useContext, useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import AuthContext from "../../contexts/authContext.jsx";



import LoadingSpinner from '../loading-spinner/LoadingSpinner.jsx';

export default function Dashboard() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userId } = useContext(AuthContext);
    const [restaurantId, setRestaurantId] = useState(null);

    

    const {
        isVisible: showCreateRestaurant,
        openModal: createRestaurantClickHandler,
        closeModal: createRestaurantCloseHandler,
    } = useModal();

    const {
        isVisible: showEditRestaurant,
        openModal: editRestaurantClickHandler,
        closeModal: editRestaurantCloseHandler,
    } = useModal();

    const {
        isVisible: showDeleteRestaurant,
        openModal: deleteRestaurantClickHandler,
        closeModal: deleteRestaurantCloseHandler,
    } = useModal();

    

    const handleEditOpenModal = (id) => {
        setRestaurantId(id);
        editRestaurantClickHandler();
    };

    const handleEditCloseModal = () => {
        editRestaurantCloseHandler();
        setRestaurantId(null);
    };

    const handleDeletOpeneModal = (id) => {
        setRestaurantId(id);
        deleteRestaurantClickHandler();
    };

    const handleDeleteCloseModal = () => {
        deleteRestaurantCloseHandler();
        setRestaurantId(null);
    };

    const handleUpdateSuccess = () => {
        fetchData();
    };

    const handleDeleteSuccess = () => {
        fetchData();
    };

    const urlSearchParams = new URLSearchParams({
        where: `_ownerId="${userId}"`
    })

    const fetchData = async () => {
        try {
            const response = await fetch(`${BASE_API_URL}/data/restaurants?${urlSearchParams.toString()}`);
            const result = await response.json();
            if (response.ok) {
                setData(result);
            } else {
                setError(result);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
      
    }
    
    useEffect(() => {
        fetchData();
    }, [userId]);

    if (loading) {
        return <div><LoadingSpinner /></div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data || data.length == 0) {
        return <div>No restaurant data available</div>;
    }

    return (
        <>
            <section className="dashboard">
                <h1>Dashboard</h1>
                <div className="my-restaurants">
                    <h2>My Restaurants</h2>
                    <ul>
                        {data.map((restaurant) => (
                                <li key={restaurant._id}>
                                    {restaurant.name}
                                    <button onClick={() => handleEditOpenModal(restaurant._id)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDeletOpeneModal(restaurant._id)}>Delete</button>
                                </li>
                            ))}
                    </ul>
                </div>

                <button onClick={createRestaurantClickHandler}>Add new restaurant</button>

                {showCreateRestaurant && <RestaurantCreate
                    onClose={createRestaurantCloseHandler}
                />}

                {showEditRestaurant && <RestaurantEdit
                    restaurantId={restaurantId}
                    onSuccess={handleUpdateSuccess}
                    onClose={handleEditCloseModal}
                />}

                {showDeleteRestaurant && <RestaurantDelete
                    restaurantId={restaurantId}
                    onSuccess={handleDeleteSuccess}
                    onClose={handleDeleteCloseModal}
                />}
            </section>

        </>
    )
}