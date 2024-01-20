import { useState } from "react";

const AttendingCountFilter = () => {
    const [selectedRadio, setSelectedRadio] = useState('anyAttending');

    const handleRadioChange = (e) => {
        setSelectedRadio(e.target.value);
    };

    const isChecked = (radioValue) => {
        return radioValue === selectedRadio;
    }

    return (
        <div className="border-b-2 border-slate-300 pb-5">
            <div className="font-semibold my-4 ml-8 text-lg">
                Attending Count
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-5 px-3 gap-6 lg:gap-10">
                    <input checked={isChecked('anyAttending')} onChange={handleRadioChange} className="hidden" type="radio" name="attendingCount" id="anyAttending" value="anyAttending" />
                    <label htmlFor="anyAttending" className={`cursor-pointer rounded-full h-9 w-9 flex justify-center items-center text-center text-sm font-semibold border-2 ${isChecked('anyAttending') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>Any</label>
                    <input checked={isChecked('oneAndMore')} onChange={handleRadioChange} className="hidden" type="radio" name="attendingCount" id="oneAndMore" value="oneAndMore" />
                    <label htmlFor="oneAndMore" className={`cursor-pointer rounded-full h-9 w-9 flex justify-center items-center text-center font-semibold border-2 ${isChecked('oneAndMore') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>1+</label>
                    <input checked={isChecked('threeAndMore')} onChange={handleRadioChange} className="hidden" type="radio" name="attendingCount" id="threeAndMore" value="threeAndMore" />
                    <label htmlFor="threeAndMore" className={`cursor-pointer rounded-full h-9 w-9 flex justify-center items-center text-center font-semibold border-2 ${isChecked('threeAndMore') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>3+</label>
                    <input checked={isChecked('fiveAndMore')} onChange={handleRadioChange} className="hidden" type="radio" name="attendingCount" id="fiveAndMore" value="fiveAndMore" />
                    <label htmlFor="fiveAndMore" className={`cursor-pointer rounded-full h-9 w-9 flex justify-center items-center text-center font-semibold border-2 ${isChecked('fiveAndMore') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>5+</label>
                    <input checked={isChecked('tenAndMore')} onChange={handleRadioChange} className="hidden" type="radio" name="attendingCount" id="tenAndMore" value="tenAndMore" />
                    <label htmlFor="tenAndMore" className={`cursor-pointer rounded-full h-9 w-9 flex justify-center items-center text-center font-semibold border-2 ${isChecked('tenAndMore') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>10+</label>
                </div>
            </div>
        </div>
    )
}

export default AttendingCountFilter;