export default function RestaurantDelete(
    { onClose }
) {
    return (
        <>
            <div className="overlay">
                <div className="backdrop" onClick={onClose}>
                </div>
                    <div className="modal">
                        <h1>Are you sure you want to delete this restaurant?</h1>
                            <button>Yes</button>
                            <button onClick={onClose}>No</button>
                    </div>
            </div>
        </>
    )
}