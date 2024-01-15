import { useEffect, useRef, useState } from "react";
import { createHasErrors } from "../../helpers/validators";
import { format } from "date-fns";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastContext } from "../../contexts/ToastContext";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [values, setValues] = useState({
        title: '',
        description: '',
        eventType: '',
        ticketPrice: '',
    });
    const [errors, setErrors] = useState({});
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDate] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [formattedDate, setFormattedDate] = useState('');
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const { showToast } = useContext(ToastContext);
    const { user } = useContext(AuthContext);

    const toggleCalendar = (e) => {
        e.preventDefault();
        setShowCalendar(prev => !prev);
    };

    useEffect(() => {
        if (!user) return navigate('/', { replace: true });
    }, [user, navigate]);

    useEffect(() => {
        if (date) {
            setFormattedDate(format(date, "MM/dd/yyyy"));
        }
    }, [date]);

    const chooseImageClick = () => fileInputRef.current.click();

    const handleSelectFile = (e) => setSelectedFile(e.target.files[0]);

    const handleChange = (e) => {
        setValues(old => ({
            ...old,
            [e.target.name]: e.target.value,
        }))
    };

    const handleBlur = (e) => {
        setErrors(old => ({
            ...old,
            [e.target.name]: createHasErrors[e.target.name](e.target.value)
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const key in values) {
            formData.append(key, values[key]);
        }
        formData.append('file', selectedFile);
        formData.append('date', date);

        console.log(formData);
    }

    const isButtonDisabled = () => {
        const booleanErrors = Object.values(errors);
        if (booleanErrors.some(x => x === true)) return true;

        if (booleanErrors.length < 4) return true;

        if (!date) return true;

        if (!selectedFile) return true;

        return false;
    }

    return (
        <div className="bg-indigo-500 flex items-center justify-center min-h-screen">
            <div className="lg:w-96 w-80 mb-32 p-6 shadow-2xl border-4 mt-2 border-gray-700 bg-white rounded-xl">
                <h1 className="text-center font-bold m-6 text-black text-2xl lg:text-3xl">Create an Event</h1>
                <form onSubmit={handleSubmit} className="flex justify-center gap-3 items-center flex-col">
                    {errors.title && <div className="font-semibold text-red-500 text-center">Title should be between 5 and 20 characters.</div>}
                    <input onBlur={handleBlur} onChange={handleChange} value={values.title} name="title" className={`border-2 mb-2 shadow-2xl border-black focus:outline-none focus:border-blue-500 p-1 px-2 rounded-lg ${errors.title && 'border-red-500'}`} type="text" placeholder="Title..." />
                    {errors.description && <div className="font-semibold text-red-500 text-center">Description should be between 5 and 25 characters.</div>}
                    <textarea onBlur={handleBlur} onChange={handleChange} value={values.description} name="description" className={`border-2 mt-0 m-3 shadow-2xl border-black focus:outline-none focus:border-blue-500 p-1 px-2 rounded-lg ${errors.description && 'border-red-500'}`} id="description" cols="22" rows="3" placeholder="Description..."></textarea>
                    <div className="text-center gap-4 mb-2 flex items-center justify-center">
                        <button onClick={toggleCalendar} className="border-2 border-black flex items-center bg-slate-500 p-1.5 px-2 rounded-lg text-white hover:bg-slate-700 ease-in-out duration-150">{date ? formattedDate : 'Select Date'}</button>
                        <input type="button" onClick={chooseImageClick} className="p-1.5 cursor-pointer border-2 border-black bg-blue-600 hover:bg-blue-800 ease-in-out duration-150 rounded-lg text-white" value={selectedFile ? 'Image Selected' : 'Choose An Image'} />
                    </div>
                    {showCalendar && <Calendar onChange={setDate} minDate={new Date()} value={date} />}
                    {errors.eventType && <div className="font-semibold text-red-500 text-center">Event type should be between 3 and 20 characters.</div>}
                    <input onBlur={handleBlur} onChange={handleChange} value={values.eventType} name="eventType" className={`border-2 mb-2 shadow-2xl border-black focus:outline-none focus:border-blue-500 p-1 px-2 rounded-lg ${errors.eventType && 'border-red-500'}`} type="text" placeholder="Event Type..." />
                    {errors.ticketPrice && <div className="font-semibold text-red-500 text-center">Ticket price should be between 1$ and 9999$.</div>}
                    <input onBlur={handleBlur} onChange={handleChange} value={values.ticketPrice} name="ticketPrice" className={`border-2 mb-2 shadow-2xl border-black focus:outline-none focus:border-blue-500 p-1 px-2 rounded-lg ${errors.ticketPrice && 'border-red-500'}`} type="number" placeholder="Ticket Price..." />
                    <input disabled={isButtonDisabled()} type="submit" value={'Create'} className={`bg-indigo-500 text-lg p-2 rounded-lg text-white font-semibold hover:bg-indigo-700 ease-in-out duration-150 border-2 border-black w-24 h-12 mt-3 ${isButtonDisabled() ? 'cursor-not-allowed' : 'cursor-pointer'}`} />
                </form>
                <input ref={fileInputRef} onChange={handleSelectFile} hidden type="file" accept="image/jpeg, image/jpg, image/png" />
            </div>
        </div>
    )
}

export default Create;