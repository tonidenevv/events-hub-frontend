import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import * as eventService from '../../services/eventService';
import { useContext } from "react";
import { ToastContext } from "../../contexts/ToastContext";
import Spinner from "../Spinner/Spinner";
import DetailsFooter from "./DetailsFooter/DetailsFooter";
import * as userService from '../../services/userService';
import LargeDevicesInfoContainer from "./LargeDevicesInfoContainer/LargeDevicesInfoContainer";
import CreatedBy from "./CreatedBy/CreatedBy";
import EventDescription from "./EventDescription/EventDescription";
import TitleImageField from "./TitleImageField/TitleImageField";

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

    return (
        isLoading ? <Spinner /> :
            <>
                <div className="flex justify-center relative">
                    <TitleImageField title={event.title} image={event.imageUrl} />
                </div>
                <div className="grid lg:grid-cols-8 mt-10 grid-cols-1">
                    <div className="flex col-span-5 items-start">
                        <div className="w-5/6 lg:ml-16 ml-6">
                            <CreatedBy avatar={eventCreator?.avatarUrl} gender={eventCreator.gender} username={eventCreator.username} />
                            <EventDescription description={event.description} />
                        </div>
                    </div>
                    <LargeDevicesInfoContainer ticketPrice={event.ticketPrice} date={date} />
                </div>
                <DetailsFooter date={date} ticketPrice={event.ticketPrice} />
            </>
    )
}

export default EventDetails;