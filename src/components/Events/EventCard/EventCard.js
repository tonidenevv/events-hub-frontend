import { format } from "date-fns";
import { useRef, useState } from "react";

const EventCard = ({ event }) => {
    const [isBeingHovered, setIsBeingHovered] = useState(false);
    const imageRef = useRef(null);

    const handleHover = (state) => setIsBeingHovered(state);

    return (
        <div className="flex flex-col items-center justify-center relative rounded-2xl">
            <div onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)} className="absolute rounded-2xl ease-in-out duration-100 cursor-pointer w-9/12 h-[22rem] hover:bg-transparent/30 hover:w-10/12 hover:h-[23rem]  bg-black/50 text-white">
                <p className="font-bold text-2xl px-3 py-10">{event.title}</p>
                <p className="font-bold text-xl">{format(event.eventDate, "dd/MM/yyyy")}</p>
                <button>See Details</button>
            </div>
            <img src={event.imageUrl} ref={imageRef} className={`rounded-2xl object-cover ease-in-out duration-100 ${isBeingHovered ? 'h-[23rem] w-10/12' : 'w-9/12 h-[22rem]'}`} alt="Event" />
        </div>
    )
}

export default EventCard;