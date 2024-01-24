import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import * as eventService from '../../services/eventService';
import { useContext } from "react";
import { ToastContext } from "../../contexts/ToastContext";
import { AuthContext } from '../../contexts/AuthContext';
import Spinner from "../Spinner/Spinner";
import DetailsFooter from "./DetailsFooter/DetailsFooter";
import * as userService from '../../services/userService';
import LargeDevicesInfoContainer from "./LargeDevicesInfoContainer/LargeDevicesInfoContainer";
import CreatedBy from "./CreatedBy/CreatedBy";
import TitleImageField from "./TitleImageField/TitleImageField";
import EventInfoField from "./EventDescription/EventDescription";
import DeleteButton from "./DeleteButton/DeleteButton";
import EditButton from "./EditButton/EditButton";
import CommentSection from "./CommentSection/CommentSection";

const EventDetails = () => {
    const [event, setEvent] = useState({});
    const [eventCreator, setEventCreator] = useState({});
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState(new Date());
    const [isOwner, setIsOwner] = useState(false);
    const { eventId } = useParams();

    const { showToast } = useContext(ToastContext);
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        eventService.getOne(eventId)
            .then(res => {
                if (res.message) return navigate('/404')
                setEvent(res);
                setDate(res.eventDate);
                setComments(res.comments);
                setIsOwner(res._ownerId === user?._id);
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
    }, [eventId, navigate, showToast, user?._id]);

    const handleComment = (commentInfo) => setComments(old => [commentInfo, ...old]);

    return (
        isLoading ? <Spinner /> :
            <>
                <div className="flex justify-center relative">
                    <TitleImageField title={event.title} image={event.imageUrl} />
                </div>
                {isOwner &&
                    <div className="flex items-center lg:gap-32 gap-16 justify-center mt-8">
                        <EditButton />
                        <DeleteButton />
                    </div>
                }
                <div className="grid lg:grid-cols-8 mt-10 grid-cols-1">
                    <div className="flex col-span-5 items-start">
                        <div className="w-5/6 lg:ml-16 ml-6">
                            <CreatedBy avatar={eventCreator?.avatarUrl} isOwner={isOwner} gender={eventCreator.gender} username={eventCreator.username} />
                            <EventInfoField header={"About The Event"} paragraph={event.description} />
                        </div>
                    </div>
                    <LargeDevicesInfoContainer isOwner={isOwner} ticketPrice={event.ticketPrice} attendingCount={event.attending?.length} date={date} />
                </div>
                <CommentSection comments={comments} handleComment={handleComment} event={event} />
                <DetailsFooter isOwner={isOwner} date={date} attendingCount={event.attending?.length} ticketPrice={event.ticketPrice} />
            </>
    )
}

export default EventDetails;