import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import * as eventService from '../../services/eventService';
import { useContext } from "react";
import { ToastContext } from "../../contexts/ToastContext";
import Spinner from "../Spinner/Spinner";
import ChevronLeft from "../svg/ChevronLeft";
import DetailsFooter from "./DetailsFooter/DetailsFooter";

const EventDetails = () => {
    const [event, setEvent] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState(new Date());
    const { eventId } = useParams();

    const { showToast } = useContext(ToastContext);
    const navigate = useNavigate();

    // console.log(format(event.eventDate, "yyyy-MM-dd"))
    // console.log(event.eventDate);

    useEffect(() => {
        setIsLoading(true);
        eventService.getOne(eventId)
            .then(res => {
                if (res.message) return navigate('/404')
                setIsLoading(false);
                setEvent(res);
                setDate(res.eventDate);
            })
            .catch(err => {
                setIsLoading(false);
                showToast('Something went wrong. Please try again later.', true);
                navigate('/');
            })
    }, [eventId, navigate, showToast]);

    const handleBackClick = () => {
        navigate('/events');
    }

    console.log(event);

    return (
        isLoading ? <Spinner /> :
            <>
                <div className="flex justify-center relative">
                    <button onClick={handleBackClick} className="lg:left-6 lg:top-6 left-3 top-3 absolute flex cursor-pointer hover:text-gray-600"><ChevronLeft />Back</button>
                    <div className="lg:w-8/12 flex mt-8 lg:mt-0 items-center flex-col">
                        <div className="flex w-full h-full flex-col items-center">
                            <div className="lg:mt-10 mt-6 text-center order-2 lg:ml-0 ml-2 font-bold text-4xl lg:text-5xl">{event.title}</div>
                            <div className="mt-4 rounded-2xl lg:order-2 lg:w-3/6 w-11/12 h-96 cursor-pointer">
                                <img className="w-full h-full rounded-2xl shadow-2xl hover:brightness-75" src={event.imageUrl} alt="Event" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start mt-10">
                    <div className="w-5/6 lg:ml-16 ml-6">
                        <div className="font-bold text-2xl lg:text-4xl">About The Event</div>
                        <div className="font-semibold text-2xl text-gray-700 mt-4 lg:text-3xl">{event.description}</div>
                    </div>
                </div>
                <DetailsFooter date={date} ticketPrice={event.ticketPrice} />
            </>
    )
}

export default EventDetails;