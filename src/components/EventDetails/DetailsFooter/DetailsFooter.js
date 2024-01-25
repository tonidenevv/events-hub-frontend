import { format } from "date-fns";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as eventService from '../../../services/eventService';

const DetailsFooter = ({ date, ticketPrice, eventAttending, user, isOwner, showToast }) => {

    const [attendingCount, setAttendingCount] = useState(eventAttending?.length);
    const [isAttending, setIsAttending] = useState(eventAttending?.some(x => x === user._id));

    const { eventId } = useParams();
    const navigate = useNavigate();

    const handleAttend = () => {
        if (!user) return navigate('/login');

        eventService.attend(user.token, eventId)
            .then(res => {
                setIsAttending(res.attending.some(x => x === user._id));
                setAttendingCount(res.attending.length);
            })
            .catch(err => {
                showToast('Something went wrong. Please try again later.', true);
                navigate('/');
            })
    }

    return (
        <div className="sticky bottom-0 border-t-2 lg:hidden p-3 shadow-2xl items-center border-gray-200 bg-white grid grid-cols-2">
            <div className="font-semibold flex justify-center items-center flex-col text-lg lg:text-xl">
                <div className="flex flex-col items-start">
                    <div>${ticketPrice}</div>
                    <div>{format(date, 'd MMM y')}</div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <button disabled={isOwner} onClick={handleAttend} className={`bg-pink-700 text-white lg:text-xl font-semibold px-3 py-1.5 border-2 border-black rounded-lg hover:bg-pink-900 ease-in-out duration-150 ${isOwner && 'cursor-not-allowed brightness-75'}`}>{isAttending ? 'Attending' : 'Attend'}</button>
                <div className="font-semibold text-sm mt-1">{attendingCount === 0 && !isOwner ? 'Be the first one to attend!' : `Currently ${attendingCount} attending!`}</div>
            </div>
        </div>
    )
}

export default DetailsFooter;