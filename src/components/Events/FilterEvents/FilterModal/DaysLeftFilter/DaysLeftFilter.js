const DaysLeftFilter = ({ daysLeftSelectedRadio, setDaysLeftSelectedRadio }) => {
    const handleRadioChange = (e) => {
        setDaysLeftSelectedRadio(e.target.value);
    };

    const isChecked = (radioValue) => {
        return radioValue === daysLeftSelectedRadio;
    }

    return (
        <div className="border-b-2 border-slate-300 pb-5">
            <div className="font-semibold my-4 ml-8 text-lg">
                Days until the Event
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-5 px-3 gap-6 lg:gap-10">
                    <input checked={isChecked('anyDays')} onChange={handleRadioChange} className="hidden" type="radio" name="daysLeft" id="anyDays" value="anyDays" />
                    <label htmlFor="anyDays" className={`cursor-pointer rounded-full h-9 w-9 flex justify-center items-center text-center text-sm font-semibold border-2 ${isChecked('anyDays') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>Any</label>
                    <input checked={isChecked('zeroDayRadio')} onChange={handleRadioChange} className="hidden" type="radio" name="daysLeft" id="zeroDayRadio" value="zeroDayRadio" />
                    <label htmlFor="zeroDayRadio" className={`cursor-pointer rounded-full h-9 w-9 flex justify-center items-center text-center font-semibold border-2 ${isChecked('zeroDayRadio') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>0</label>
                    <input checked={isChecked('oneDayRadio')} onChange={handleRadioChange} className="hidden" type="radio" name="daysLeft" id="oneDayRadio" value="oneDayRadio" />
                    <label htmlFor="oneDayRadio" className={`cursor-pointer rounded-full h-9 w-9 flex justify-center items-center text-center font-semibold border-2 ${isChecked('oneDayRadio') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>1</label>
                    <input checked={isChecked('twoDayRadio')} onChange={handleRadioChange} className="hidden" type="radio" name="daysLeft" id="twoDayRadio" value="twoDayRadio" />
                    <label htmlFor="twoDayRadio" className={`cursor-pointer rounded-full h-9 w-9 flex justify-center items-center text-center font-semibold border-2 ${isChecked('twoDayRadio') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>2</label>
                    <input checked={isChecked('threePlusRadio')} onChange={handleRadioChange} className="hidden" type="radio" name="daysLeft" id="threePlusRadio" value="threePlusRadio" />
                    <label htmlFor="threePlusRadio" className={`cursor-pointer rounded-full h-9 w-9 flex justify-center items-center text-center font-semibold border-2 ${isChecked('threePlusRadio') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>3+</label>
                </div>
            </div>
        </div>
    )
}

export default DaysLeftFilter;