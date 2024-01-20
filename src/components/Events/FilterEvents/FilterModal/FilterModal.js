import { useState } from 'react';
import CloseLogo from '../../../svg/CloseLogo';
import AttendingCountFilter from './AttendingCountFilter/AttendingCountFilter';
import DaysLeftFilter from './DaysLeftFilter/DaysLeftFilter';
import ExpiredFilter from './ExpiredFilter/ExpiredFilter';
import ModalFooter from './ModalFooter/ModalFooter';
import PriceSlider from './PriceSlider/PriceSlider';
import { differenceInCalendarDays } from 'date-fns';

const FilterModal = ({ closeFilterModal, events, getFilteredEvents }) => {
    const MIN_MAX_PRICE = [1, 9999];
    const [daysLeftSelectedRadio, setDaysLeftSelectedRadio] = useState('anyDays');
    const [attendingCountSelectedRadio, setAttendingCountSelectedRadio] = useState('anyAttending');
    const [expiredSelectedRadio, setExpiredSelectedRadio] = useState('anyExpiry');

    const [priceSliderValues, setPriceSliderValues] = useState(MIN_MAX_PRICE);
    const [priceInputValues, setPriceInputValues] = useState(MIN_MAX_PRICE);

    const handleClear = () => {
        setDaysLeftSelectedRadio('anyDays');
        setAttendingCountSelectedRadio('anyAttending');
        setExpiredSelectedRadio('anyExpiry');
        setPriceSliderValues(MIN_MAX_PRICE);
        setPriceInputValues(MIN_MAX_PRICE);
    }

    const handleFilter = (e) => {
        let filteredEvents = handlePriceFilter(events, priceSliderValues);
        filteredEvents = handleDaysUntilFilter(filteredEvents, daysLeftSelectedRadio);
        filteredEvents = handleAttendingCountFilter(filteredEvents, attendingCountSelectedRadio);
        filteredEvents = handleExpiredFilter(filteredEvents, expiredSelectedRadio);

        getFilteredEvents(filteredEvents);
        closeFilterModal(e);
    }

    const handlePriceFilter = (events, priceRange) => events.filter(x => x.ticketPrice >= priceRange[0] && x.ticketPrice <= priceRange[1]);

    const handleDaysUntilFilter = (events, selectedRadio) => {
        if (selectedRadio === 'anyDays') return events;

        if (selectedRadio === 'oneDayRadio') return events.filter(x => daysDifferenceFromToday(x.eventDate) === 1);

        if (selectedRadio === 'twoDayRadio') return events.filter(x => daysDifferenceFromToday(x.eventDate) === 2);

        if (selectedRadio === 'threeDayRadio') return events.filter(x => daysDifferenceFromToday(x.eventDate) === 3);

        if (selectedRadio === 'fourPlusRadio') return events.filter(x => daysDifferenceFromToday(x.eventDate) >= 4);
    }

    const handleAttendingCountFilter = (events, selectedRadio) => {
        if (selectedRadio === 'anyAttending') return events;

        if (selectedRadio === 'oneAndMore') return events.filter(x => x.attending.length >= 1);

        if (selectedRadio === 'threeAndMore') return events.filter(x => x.attending.length >= 3);

        if (selectedRadio === 'fiveAndMore') return events.filter(x => x.attending.length >= 5);

        if (selectedRadio === 'tenAndMore') return events.filter(x => x.attending.length >= 10);
    }

    function daysDifferenceFromToday(eventDate) {
        return differenceInCalendarDays(eventDate, new Date());
    }

    const handleExpiredFilter = (events, selectedRadio) => {
        if (selectedRadio === 'anyExpiry') return events;

        if (selectedRadio === 'nonExpiredFilter') return events.filter(x => daysDifferenceFromToday(x.eventDate) >= 0);

        if (selectedRadio === 'expiredFilter') return events.filter(x => daysDifferenceFromToday(x.eventDate) < 0);
    }

    return (
        <div onClick={closeFilterModal} id="backdrop" className="bg-opacity-30 inset-0 z-50 backdrop-blur-sm fixed flex justify-center items-center">
            <div className="bg-slate-100 border-2 rounded-lg flex flex-col md:w-[28rem] w-[22.5rem] h-[32rem] shadow-2xl border-black relative lg:rounded-sm overflow-y-auto">
                <div>
                    <div className='absolute right-2 top-2 z-10 hover:text-gray-500 cursor-pointer ease-in-out duration-100 rounded-full'><CloseLogo /></div>
                    <div className="text-center top-2 absolute right-0 left-0 border-b-2 pb-0.5 text-lg border-slate-300">Filters</div>
                </div>
                <PriceSlider priceSliderValues={priceSliderValues} setPriceSliderValues={setPriceSliderValues} priceInputValues={priceInputValues} setPriceInputValues={setPriceInputValues} />
                <DaysLeftFilter daysLeftSelectedRadio={daysLeftSelectedRadio} setDaysLeftSelectedRadio={setDaysLeftSelectedRadio} />
                <AttendingCountFilter attendingCountSelectedRadio={attendingCountSelectedRadio} setAttendingCountSelectedRadio={setAttendingCountSelectedRadio} />
                <ExpiredFilter expiredSelectedRadio={expiredSelectedRadio} setExpiredSelectedRadio={setExpiredSelectedRadio} />
                <ModalFooter handleClear={handleClear} handleFilter={handleFilter} />
            </div>
        </div>
    );
}

export default FilterModal;