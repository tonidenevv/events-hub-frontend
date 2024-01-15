import { useRef, useState } from "react";
import ChevronDown from "../svg/ChevronDown";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Create = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const fileInputRef = useRef(null);

    const toggleCalendar = (e) => {
        e.preventDefault();
        setShowCalendar(prev => !prev);
    };

    const [date, setDate] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    console.log(date);
    console.log(typeof date);

    const chooseImageClick = () => fileInputRef.current.click();

    return (
        <div className="bg-indigo-500 flex items-center justify-center min-h-screen">
            <div className="lg:w-96 w-80 mb-32 p-6 shadow-2xl border-4 mt-2 border-gray-700 bg-white rounded-xl">
                <h1 className="text-center font-bold m-12 text-black text-3xl">Create an Event</h1>
                <form className="flex justify-center items-center flex-col">
                    <input name="title" className="border-2 mb-2 shadow-2xl border-black focus:outline-none focus:border-blue-500 p-1 px-2 rounded-lg" type="text" placeholder="Title..." />
                    <textarea name="description" className="border-2 lg:m-5 m-3 shadow-2xl border-black focus:outline-none focus:border-blue-500 p-1 px-2 rounded-lg" id="description" cols="22" rows="3" placeholder="Description..."></textarea>
                </form>
                <input ref={fileInputRef} hidden type="file" accept="image/jpeg, image/jpg, image/png" />
                <div className="text-center gap-4 mb-2 flex items-center justify-center">
                    <button onClick={toggleCalendar} className="border-2 border-black flex items-center bg-slate-500 p-1.5 px-2 rounded-lg text-white hover:bg-slate-700 ease-in-out duration-150">{date ? 'date' : 'Select Date'}</button>
                    <input type="button" onClick={chooseImageClick} className="p-1.5 cursor-pointer border-2 border-black bg-blue-600 hover:bg-blue-800 ease-in-out duration-150 rounded-lg text-white" value={'Choose An Image'} />
                </div>
                {showCalendar && <Calendar onChange={setDate} minDate={new Date()} value={date} />}
            </div>
        </div>
    )
}

export default Create;