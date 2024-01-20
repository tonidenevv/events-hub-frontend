import { useState } from 'react';
import CloseLogo from '../../../svg/CloseLogo';
import AttendingCountFilter from './AttendingCountFilter/AttendingCountFilter';
import DaysLeftFilter from './DaysLeftFilter/DaysLeftFilter';
import ExpiredFilter from './ExpiredFilter/ExpiredFilter';
import ModalFooter from './ModalFooter/ModalFooter';
import PriceSlider from './PriceSlider/PriceSlider';
import filters from './filters';

const FilterModal = ({ closeFilterModal, events, getFilteredEvents, daysLeftSelectedRadio, setDaysLeftSelectedRadio, attendingCountSelectedRadio, setAttendingCountSelectedRadio, expiredSelectedRadio, setExpiredSelectedRadio, priceSliderValues, setPriceSliderValues, priceInputValues, setPriceInputValues }) => {
    const MIN_MAX_PRICE = [1, 9999];

    const handleClear = () => {
        setDaysLeftSelectedRadio('anyDays');
        setAttendingCountSelectedRadio('anyAttending');
        setExpiredSelectedRadio('anyExpiry');
        setPriceSliderValues(MIN_MAX_PRICE);
        setPriceInputValues(MIN_MAX_PRICE);
    }

    const handleFilter = (e) => {
        let filteredEvents = filters.handlePriceFilter(events, priceSliderValues);
        filteredEvents = filters.handleDaysUntilFilter(filteredEvents, daysLeftSelectedRadio);
        filteredEvents = filters.handleAttendingCountFilter(filteredEvents, attendingCountSelectedRadio);
        filteredEvents = filters.handleExpiredFilter(filteredEvents, expiredSelectedRadio);

        getFilteredEvents(filteredEvents);
        closeFilterModal(e);
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