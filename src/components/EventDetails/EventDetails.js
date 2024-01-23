import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import * as eventService from '../../services/eventService';
import { useContext } from "react";
import { ToastContext } from "../../contexts/ToastContext";
import Spinner from "../Spinner/Spinner";
import ChevronLeft from "../svg/ChevronLeft";
import DetailsFooter from "./DetailsFooter/DetailsFooter";
import { format } from "date-fns";
import * as userService from '../../services/userService';

const EventDetails = () => {
    const [event, setEvent] = useState({});
    const [eventCreator, setEventCreator] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState(new Date());
    const { eventId } = useParams();

    const { showToast } = useContext(ToastContext);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        eventService.getOne(eventId)
            .then(res => {
                if (res.message) return navigate('/404')
                setEvent(res);
                setDate(res.eventDate);
                userService.getBasicInfo(res._ownerId)
                    .then(res => {
                        setIsLoading(false);
                        setEventCreator(res);
                    })
                    .catch(err => {
                        setIsLoading(false);
                        showToast('Something went wrong. Please try again later.', true);
                        navigate('/');
                    })
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
                <div className="grid lg:grid-cols-8 mt-10 grid-cols-1">
                    <div className="flex col-span-5 items-start">
                        <div className="w-5/6 lg:ml-16 ml-6">
                            <div className="border-t-2 font-bold text-xl border-b-2 border-gray-300 p-3">
                                Created By
                            </div>
                            <div className="border-b-2 border-gray-300 p-3">
                                <div className="font-bold text-2xl lg:text-4xl">About The Event</div>
                                <div className="font-semibold text-xl text-gray-700 mt-4 lg:text-2xl">{event.description}</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 relative mx-16 w-96 col-span-3 h-40 hidden flex-col lg:flex border-2 rounded-xl border-black shadow-2xl items-center justify-center">
                        <div className="grid grid-cols-2 mb-3 mt-12 gap-16">
                            <div className="font-extrabold text-2xl flex items-center justify-center">
                                ${event.ticketPrice} <span className="font-normal ml-2 text-lg">total</span>
                            </div>
                            <div className="flex font-bold text-lg items-center justify-center">{format(date, 'd MMM y')}</div>
                        </div>
                        <button className="w-80 mt-3 mb-6 bg-pink-700 rounded-lg font-semibold text-white text-lg px-1 py-3 hover:bg-pink-800 ease-in-out duration-150">Attend</button>
                    </div>
                </div>
                <DetailsFooter date={date} ticketPrice={event.ticketPrice} />
            </>
    )
}

export default EventDetails;