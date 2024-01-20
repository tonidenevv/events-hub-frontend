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
                <div className="grid gap-3 grid-cols-2">
                    <input checked={isChecked('tenAndMore')} onChange={handleRadioChange} className="hidden" type="radio" name="attendingCount" id="tenAndMore" value="tenAndMore" />
                    <label htmlFor="tenAndMore" className={`cursor-pointer rounded-full h-9 w-9 flex justify-center items-center text-center font-semibold border-2 ${isChecked('tenAndMore') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>10+</label>
                    <input checked={isChecked('tenAndMore')} onChange={handleRadioChange} className="hidden" type="radio" name="attendingCount" id="tenAndMore" value="tenAndMore" />
                    <label htmlFor="tenAndMore" className={`cursor-pointer rounded-full h-9 w-9 flex justify-center items-center text-center font-semibold border-2 ${isChecked('tenAndMore') ? 'bg-black border-white text-white' : 'bg-white border-black text-black hover:bg-slate-200'}`}>10+</label>
                </div>
            </div>
        </div>
    )
}

export default ExpiredFilter;