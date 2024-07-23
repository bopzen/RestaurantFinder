export default function Logout({
    onClose,
}) {
    return (
        <>
            <div className="overlay">
                <div className="backdrop" onClick={onClose}>
                </div>
                    <div className="modal">
                        <h1>Are you sure you want to log out?</h1>
                            <button>Yes</button>
                            <button onClick={onClose}>No</button>
                    </div>
            </div>

        </>
    )
}