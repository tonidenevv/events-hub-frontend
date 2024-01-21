import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import * as eventService from '../../services/eventService';
import { useContext } from "react";
import { ToastContext } from "../../contexts/ToastContext";
import Spinner from "../Spinner/Spinner";

const EventDetails = () => {
    const [event, setEvent] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { eventId } = useParams();

    const { showToast } = useContext(ToastContext);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        eventService.getOne(eventId)
            .then(res => {
                if (res.message) return navigate('/404')
                setIsLoading(false);
                setEvent(res);
            })
            .catch(err => {
                setIsLoading(false);
                showToast('Something went wrong. Please try again later.', true);
                navigate('/');
            })
    }, [eventId, navigate, showToast]);

    return (
        isLoading ? <Spinner /> :
            <div className="flex justify-center">
                <div className="lg:w-8/12 flex items-center flex-col">
                    <div className="mt-10 lg:ml-0 ml-2 font-bold text-4xl">{event.title}</div>
                    <div className="mt-4 rounded-2xl lg:w-3/6 w-11/12 h-96 cursor-pointer">
                        <img className="w-full h-full rounded-2xl shadow-2xl hover:brightness-75" src={event.imageUrl} alt="Event" />
                    </div>
                </div>
            </div>
    )
}

export default EventDetails;