import RestaurantCreate from '../restaurants/RestaurantCreate';
import RestaurantEdit from '../restaurants/RestaurantEdit';
import RestaurantDelete from '../restaurants/RestaurantDelete';
import { useModal } from '../../hooks/useModal';

export default function Dashboard() {

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


    return (
        <>
            <h1>Dashboard</h1>
            <div className="my-restaurants">
                <h2>My Restaurants</h2>

                <ul>
                    <li>Restaurant 1 <button onClick={editRestaurantClickHandler}>Edit</button> <button onClick={deleteRestaurantClickHandler}>Delete</button></li>
                    <li>Restaurant 2 <button onClick={editRestaurantClickHandler}>Edit</button> <button onClick={deleteRestaurantClickHandler}>Delete</button></li>
                    <li>Restaurant 3 <button onClick={editRestaurantClickHandler}>Edit</button> <button onClick={deleteRestaurantClickHandler}>Delete</button></li>
                </ul>

            </div>
            
            <button onClick={createRestaurantClickHandler}>Add new restaurant</button>

            { showCreateRestaurant && <RestaurantCreate 
                onClose={createRestaurantCloseHandler}
            />}

            { showEditRestaurant && <RestaurantEdit
                onClose={editRestaurantCloseHandler}
            />}

            { showDeleteRestaurant && <RestaurantDelete 
                onClose={deleteRestaurantCloseHandler}
            />}
        </>
    )
}