export default function RestaurantEdit(
    { onClose }
) {
    return (
        <>
            <div className="overlay">
                <div className="backdrop" onClick={onClose}>
                </div>
                    <div className="modal">
                        <h1>Edit restaurant</h1>
                            <button>Add</button>
                            <button onClick={onClose}>Cancel</button>
                    </div>
            </div>
        </>
    )
}