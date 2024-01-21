import { format, differenceInCalendarDays } from "date-fns";
import { useRef, useState } from "react";
import DollarSign from "../../svg/DollarSign";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
    const [isBeingHovered, setIsBeingHovered] = useState(false);
    const imageRef = useRef(null);

    const navigate = useNavigate();

    const handleHover = (state) => setIsBeingHovered(state);

    const dollarSignCount = (price) => {
        if (price < 100) return 1;

        if (price < 500) return 2;

        if (price < 1000) return 3;

        return 4;
    }

    const daysDifference = (eventDate) => {
        const daysLeft = differenceInCalendarDays(eventDate, new Date());

        if (daysLeft === 0) return 'Event is today!';

        if (daysLeft < 0) return 'Event is over.';

        if (daysLeft === 1) return 'Just one day left!';

        return `${daysLeft} days left!`
    }

    const handleNavigate = () => {
        navigate(`/events/${event._id}`);
    }

    return (
        <div onClick={handleNavigate} className="flex flex-col items-center justify-center relative rounded-2xl">
            <div onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)} className="absolute shadow-2xl rounded-2xl ease-in-out duration-100 cursor-pointer w-9/12 h-[22rem] hover:bg-transparent/40 hover:backdrop-blur-none hover:w-10/12 hover:h-[23rem] backdrop-blur-sm bg-black/70 text-white">
                <p className="font-bold text-2xl px-3 py-10">{event.title}</p>
                <p className="font-bold text-xl lg:w-4/6 md:w-3/6 absolute bottom-1 left-3">{format(event.eventDate, "dd/MM/yyyy")}</p>
                <div className="flex flex-col text-green-500 absolute right-3 bottom-3">
                    {Array.from({ length: dollarSignCount(event.ticketPrice) }).map((x, i) => <DollarSign key={i} />)}
                </div>
                <div className="absolute bottom-8 left-3 text-xl lg:w-4/6 md:w-3/6">{daysDifference(event.eventDate)}</div>
            </div>
            <img src={event.imageUrl} ref={imageRef} className={`rounded-2xl object-cover ease-in-out duration-100 ${isBeingHovered ? 'h-[23rem] w-10/12' : 'w-9/12 h-[22rem]'}`} alt="Event" />
        </div>
    )
}

export default EventCard;