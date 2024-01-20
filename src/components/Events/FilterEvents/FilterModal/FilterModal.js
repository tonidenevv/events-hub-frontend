import CloseLogo from '../../../svg/CloseLogo';
import AttendingCountFilter from './AttendingCountFilter/AttendingCountFilter';
import DaysLeftFilter from './DaysLeftFilter/DaysLeftFilter';
import ExpiredFilter from './ExpiredFilter/ExpiredFilter';
import ModalFooter from './ModalFooter/ModalFooter';
import PriceSlider from './PriceSlider/PriceSlider';

const FilterModal = ({ closeFilterModal }) => {
    return (
        <div onClick={closeFilterModal} id="backdrop" className="bg-opacity-30 inset-0 z-50 backdrop-blur-sm fixed flex justify-center items-center">
            <div className="bg-slate-100 border-2 rounded-lg flex flex-col lg:w-[28rem] w-80 h-[32rem] shadow-2xl border-black relative lg:rounded-sm overflow-y-auto">
                <div>
                    <div className='absolute right-2 top-2 z-10 hover:text-gray-500 cursor-pointer ease-in-out duration-100 rounded-full'><CloseLogo /></div>
                    <div className="text-center top-2 absolute right-0 left-0 border-b-2 pb-0.5 text-lg border-slate-300">Filters</div>
                </div>
                <PriceSlider />
                <DaysLeftFilter />
                <AttendingCountFilter />
                <ExpiredFilter />
                <ModalFooter />
            </div>
        </div>
    );
}

export default FilterModal;