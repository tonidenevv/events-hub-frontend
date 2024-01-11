import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userService from '../../services/userService';
import hasErrors from "../../helpers/validators";
import Spinner from "../Spinner/Spinner";
import WarningLogo from "../svg/WarningLogo";
import SettingsLogo from "../svg/SettingsLogo";

const Settings = () => {
    const { user } = useContext(AuthContext);
    const [currUser, setCurrUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [selectedFile, setSelectedFile] = useState(false);
    const [image, setImage] = useState(null);
    const [values, setValues] = useState({
        username: currUser.username,
        email: currUser.email,
    });
    const [isChecked, setIsChecked] = useState(false);
    const initialValues = useMemo(() => {
        return {
            username: user.username,
            email: user.email,
        }
    }, [user]);
    const fileUploadRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return navigate('/login', { replace: true });

        userService.getOne(user.token, user._id)
            .then(res => {
                if (res.message) return navigate('/login', { replace: true });

                setIsLoading(false);

                setCurrUser(res);
                setValues({ username: res.username, email: res.email });
            })
            .catch(err => console.log(err));
    }, [navigate, user]);

    const handleImageClick = () => fileUploadRef.current.click();

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);

        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target.result);
            }
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setImage(false);
        }
    }

    const handleChange = (e) => {
        setValues(old => ({
            ...old,
            [e.target.name]: e.target.value,
        }))
    }

    const isButtonDisabled = () => {
        if (hasErrors.username(values.username) || hasErrors.email(values.email)) return true;

        if (initialValues.username === values.username && initialValues.email === values.email && !selectedFile) return true;

        return false;
    }

    const handleSaveClick = () => {
        console.log('clicked');
    }


    const handleToggle = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        isLoading ? <Spinner /> :
            <>
                <h1 className="text-center lg:m-10 m-6 lg:text-5xl text-5xl mt-16 font-body font-semibold">Settings</h1>
                <div className="relative hover:shadow-2xl flex lg:flex-row flex-col items-center shadow-sm lg:flex-col-2 md:flex-col-2 border-black border-4 ease-in-out md:mx-36 justify-center duration-300 mt-6 bg-slate-200 lg:mx-60 mx-10 rounded-2xl py-20 lg:py-20">
                    <div className="absolute top-8 right-8">
                        <input
                            type="checkbox"
                            id="toggleSwitch"
                            className="hidden"
                            checked={isChecked}
                            onChange={handleToggle}
                        />
                        <label
                            htmlFor="toggleSwitch"
                            className="cursor-pointer relative bg-white inline-block h-9 w-16 border-2 rounded-full transition duration-300 ease-in-out"
                        >
                            <span className="sr-only">Toggle Switch</span>
                            <span
                                className={`flex items-center justify-center text-center bg-blue-600 border-blue-500 rounded-full h-8 w-8 shadow-md transform transition-transform duration-300 ease-in-out ${isChecked ? 'translate-x-9' : 'translate-x-0'
                                    }`}
                            >{isChecked ? <WarningLogo /> : <SettingsLogo />}</span>
                        </label>
                    </div>
                    <img
                        onClick={handleImageClick}
                        className="lg:mt-8 rounded-full lg:w-48 hover:brightness-75 hover:shadow-2xl lg:h-48 w-32 h-32 border-4 shadow-lg cursor-pointer border-black"
                        src={image ? image : currUser.avatarUrl ? currUser.avatarUrl : currUser.gender === 'male' ? '/male.png' : '/female.png'}
                        alt="Avatar"
                    />
                    <div className="flex lg:ml-28 flex-col items-center mt-10">
                        <label htmlFor="username" className="font-semibold text-xl mb-1">
                            Username
                        </label>
                        <input
                            value={values.username}
                            onChange={handleChange}
                            type="text"
                            className="mb-6 border-2 w-48 h-10 border-black rounded-lg p-1 focus:outline-none focus:border-blue-700"
                            name="username"
                            id="username"
                        />
                        <label htmlFor="email" className="font-semibold text-xl mb-1">
                            Email
                        </label>
                        <input
                            value={values.email}
                            onChange={handleChange}
                            type="text"
                            className="mb-6 border-2 w-48 h-10 border-black rounded-lg p-1 focus:outline-none focus:border-blue-700"
                            name="email"
                            id="email"
                        />
                        <div className="mt-6">
                            <button disabled={isButtonDisabled()} onClick={handleSaveClick} className={`bg-blue-600 hover:bg-blue-800 ease-in-out duration-150 font-semibold text-white px-4 py-2 rounded-md ${isButtonDisabled() && 'cursor-not-allowed'}`}>Confirm Changes</button>
                        </div>
                    </div>
                </div>
                <input type="file" ref={fileUploadRef} onChange={handleFileSelect} accept="image/jpeg, image/jpg, image/png" className="hidden" />
            </>
    )
}

export default Settings;