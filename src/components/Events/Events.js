import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as eventService from '../../services/eventService';
import { useContext } from "react";
import { ToastContext } from '../../contexts/ToastContext';
import Spinner from '../Spinner/Spinner';
import Search from "./Search/Search";
import EventCard from "./EventCard/EventCard";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton";
import FilterEvents from "./FilterEvents/FilterEvents";
import FilterModal from "./FilterEvents/FilterModal/FilterModal";
import shouldHideOverflow from "../../helpers/shouldHideOverflow";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [foundEvents, setFoundEvents] = useState([]);
    const [searchedEvents, setSearchedEvents] = useState(null);
    const [filteredEvents, setFilteredEvents] = useState(null);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [searchedValue, setSearchedValue] = useState(null);
    const [filtersCount, setFiltersCount] = useState(0);

    const MIN_MAX_PRICE = [1, 9999];
    const [daysLeftSelectedRadio, setDaysLeftSelectedRadio] = useState('anyDays');
    const [attendingCountSelectedRadio, setAttendingCountSelectedRadio] = useState('anyAttending');
    const [expiredSelectedRadio, setExpiredSelectedRadio] = useState('anyExpiry');

    const [priceSliderValues, setPriceSliderValues] = useState(MIN_MAX_PRICE);
    const [priceInputValues, setPriceInputValues] = useState(MIN_MAX_PRICE);

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

        setSearchedValue(searchValue);

        const found = events.filter(x => x.title.toLowerCase().includes(searchValue.toLowerCase()));

        setSearchedEvents(found);

        if (!filteredEvents) return setFoundEvents(found);

        if (filteredEvents) return setFoundEvents(filteredEvents.filter(x => x.title.toLowerCase().includes(searchValue.toLowerCase())));
    };

    const handleFilterClick = () => {
        setShowFilterModal(true);
        shouldHideOverflow(true);
    }

    const closeFilterModal = (e) => {
        if (e.target.id === 'backdrop' || e.target.id === 'close') {
            setShowFilterModal(false);
            shouldHideOverflow(false);
        }
    }

    const getFilteredEvents = (eventsAfterFilter, filterCount) => {
        setFilteredEvents(eventsAfterFilter);
        setFiltersCount(filterCount);

        if (!searchedEvents) return setFoundEvents(eventsAfterFilter);

        return setFoundEvents(eventsAfterFilter.filter(x => x.title.toLowerCase().includes(searchedValue.toLowerCase())));
    }

    return (
        isLoading ? <Spinner /> :
            <>
                <div>
                    <div className="flex justify-center items-center mt-16">
                        <Search events={events} getSearchValue={getSearchValue} />
                        <FilterEvents filtersCount={filtersCount} handleFilterClick={handleFilterClick} />
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-14 mx-auto p-4 py-12">
                        {searchedEvents || filteredEvents
                            ? foundEvents.length === 0 ? <div className="col-span-4 text-center font-bold mt-20 text-4xl">No events found.</div> : foundEvents.map(x => <EventCard key={x._id} event={x} />)
                            : events.map(x => <EventCard key={x._id} event={x} />)
                        }
                    </div>
                    <ScrollTopButton />
                    {showFilterModal && <FilterModal events={events} getFilteredEvents={getFilteredEvents} closeFilterModal={closeFilterModal} priceSliderValues={priceSliderValues} setPriceSliderValues={setPriceSliderValues} priceInputValues={priceInputValues} setPriceInputValues={setPriceInputValues} daysLeftSelectedRadio={daysLeftSelectedRadio} setDaysLeftSelectedRadio={setDaysLeftSelectedRadio} attendingCountSelectedRadio={attendingCountSelectedRadio} setAttendingCountSelectedRadio={setAttendingCountSelectedRadio} expiredSelectedRadio={expiredSelectedRadio} setExpiredSelectedRadio={setExpiredSelectedRadio} />}
                </div>
            </>
    )
}

export default Events;  