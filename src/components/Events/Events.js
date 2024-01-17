import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as eventService from '../../services/eventService';
import { useContext } from "react";
import { ToastContext } from '../../contexts/ToastContext';
import Spinner from '../Spinner/Spinner';
import Search from "./Search/Search";
import EventCard from "./EventCard/EventCard";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [foundEvents, setFoundEvents] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    const navigate = useNavigate();

    const { showToast } = useContext(ToastContext);

    useEffect(() => {
        setIsLoading(true);
        eventService.getAll()
            .then(res => {
                setIsLoading(false);
                setEvents(res);
            })
            .catch(err => {
                setIsLoading(false);
                showToast('There was an error processing your request. Try again later.', true);
                navigate('/');
            })
    }, [navigate, showToast]);

    const getSearchValue = (searchValue) => {
        setShowSearch(true);
        if (!searchValue) setFoundEvents(events);

        const foundEvents = events.filter(x => x.title.toLowerCase().includes(searchValue.toLowerCase()));

        setFoundEvents(foundEvents);
    };

    return (
        isLoading ? <Spinner /> :
            <>
                <Search events={events} getSearchValue={getSearchValue} />
                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-14 mx-auto p-4 py-12">
                    {showSearch
                        ? foundEvents.length === 0 ? <div className="col-span-4 text-center font-bold mt-20 text-4xl">No events found.</div> : foundEvents.map(x => <EventCard key={x._id} event={x} />)
                        : events.map(x => <EventCard key={x._id} event={x} />)
                    }
                </div>
            </>
    )
}

export default Events;  