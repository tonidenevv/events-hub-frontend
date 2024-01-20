import { useState } from "react";

const ExpiredFilter = () => {
    const [selectedRadio, setSelectedRadio] = useState(null);

    const handleRadioChange = (e) => {
        setSelectedRadio(e.target.value);
    };

    const isChecked = (radioValue) => {
        return radioValue === selectedRadio;
    }
    return (
        <div className="border-b-2 border-slate-300 pb-5">
            <div className="font-semibold my-4 ml-8 text-lg">
                Expired/Non-Expired
            </div>
            <div className="flex justify-center items-center">
                <div className="grid gap-3 grid-cols-3">
                    <input checked={isChecked('anyExpiry')} onChange={handleRadioChange} className="hidden" type="radio" name="attendingCount" id="anyExpiry" value="anyExpiry" />
                    <label htmlFor="anyExpiry" className={`cursor-pointer rounded-xl p-1 flex justify-center items-center text-center font-semibold border-2 ${isChecked('anyExpiry') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>Both</label>
                    <input checked={isChecked('nonExpiredFilter')} onChange={handleRadioChange} className="hidden" type="radio" name="attendingCount" id="nonExpiredFilter" value="nonExpiredFilter" />
                    <label htmlFor="nonExpiredFilter" className={`cursor-pointer rounded-xl p-1 flex justify-center items-center text-center font-semibold border-2 ${isChecked('nonExpiredFilter') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>Non-Expired</label>
                    <input checked={isChecked('expiredFilter')} onChange={handleRadioChange} className="hidden" type="radio" name="attendingCount" id="expiredFilter" value="expiredFilter" />
                    <label htmlFor="expiredFilter" className={`cursor-pointer rounded-xl p-1 flex justify-center items-center text-center font-semibold border-2 ${isChecked('expiredFilter') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>Expired</label>
                </div>
            </div>
        </div>
    )
}

export default ExpiredFilter;