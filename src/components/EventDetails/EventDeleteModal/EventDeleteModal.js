import { useState } from "react"
import Spinner from "../../Spinner/Spinner";
import WarningLogo from "../../svg/WarningLogo";
import * as eventService from '../../../services/eventService';
import { useNavigate } from "react-router-dom";

const EventDeleteModal = ({ handleDeleteModalClose, eventId, token, eventTitle, showToast }) => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleDelete = () => {
        setIsLoading(true);
        eventService.del(eventId, token)
            .then(res => {
                setIsLoading(false);
                handleDeleteModalClose('deleted');
                showToast(`Successfully deleted ${res.title}.`);
                navigate('/events');
            })
            .catch(err => {
                setIsLoading(false);
                handleDeleteModalClose('deleted');
                showToast('Something went wrong. Please try again later.', true);
                navigate('/');
            })
    }

    return (
        isLoading ? <Spinner /> :
            <div id="backdrop" onClick={handleDeleteModalClose} className="fixed z-50 inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
                <div className="bg-slate-100 text-center m-4 font-semibold border-2 border-black rounded-lg p-2 transform translate-y-0 transition-transform duration-300 ease-in-out">
                    <WarningLogo size={8} color={'red'} />
                    <div>
                        Are you sure you want to delete {eventTitle}? Remember, there's no going back!
                    </div>
                    <button onClick={handleDelete} className="m-4 border-2 text-white bg-red-500 font-semibold border-black px-2 py-1 hover:bg-red-700 rounded-xl">Delete</button>
                    <button onClick={handleDeleteModalClose} id="close" className="m-4 hover:text-slate-500">Cancel</button>
                </div>
            </div>
    )
}

export default EventDeleteModal;