import { useContext  } from "react";
import AuthContext from "../../contexts/authContext.jsx";


export default function Logout(
    { onClose }
) {
    
    const { logout } = useContext(AuthContext);

    const handleSubmit = async () => {
        try {
            await logout();
            
        } catch (error) {
            console.error(error.message);
        }
        onClose();
    };

    return (
        <>
            <div className="overlay">
                <div className="backdrop" onClick={onClose}>
                </div>
                    <div className="modal logout-modal">
                        <h1>Are you sure you want to log out?</h1>
                        <div>
                            <button onClick={handleSubmit}>Yes</button>
                            <button onClick={onClose}>No</button>
                        </div>
                    </div>
            </div>
        </>
    )
}