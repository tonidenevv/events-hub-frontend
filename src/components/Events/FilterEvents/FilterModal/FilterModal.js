import CloseLogo from '../../../svg/CloseLogo';

const FilterModal = ({ closeFilterModal }) => {
    return (
        <div onClick={closeFilterModal} id="backdrop" className="bg-opacity-30 inset-0 z-50 backdrop-blur-sm fixed flex justify-center items-center">
            <div className="bg-slate-200 border-2 border-black relative">
                <div className='absolute right-2 top-2 hover:text-gray-500 cursor-pointer ease-in-out duration-100 rounded-full'><CloseLogo /></div>
                <div className='m-10'>FIlter Modal</div>
            </div>
        </div>
    );
}

export default FilterModal;