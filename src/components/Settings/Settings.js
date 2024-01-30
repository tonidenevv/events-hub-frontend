import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userService from '../../services/userService';
import Spinner from "../Spinner/Spinner";
import WarningPage from "./WarningPage/WarningPage";
import MainPage from "./MainPage/MainPage";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import { ToastContext } from "../../contexts/ToastContext";

const Settings = () => {
    const { user } = useContext(AuthContext);
    const [currUser, setCurrUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [selectedFile, setSelectedFile] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [image, setImage] = useState(null);

    const [values, setValues] = useState({
        username: currUser.username,
        email: currUser.email,
    });

    const initialValues = useMemo(() => {
        return {
            username: user?.username,
            email: user?.email,
        }
    }, [user]);

    const { showToast } = useContext(ToastContext);

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
            .catch(err => {
                setIsLoading(false);
                showToast('There was an error processing your request. Please try again later.', true);
                navigate('/');
            });
    }, [navigate, user, showToast]);

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

    const handleSwitch = (state) => {
        setIsChecked(state);
    }


    return (
        isLoading ? <Spinner /> :
            <div className="bg-gradient-to-r from-blue-50 to-blue-300 min-h-screen flex flex-col">
                <h1 className="text-center lg:m-10 m-6 lg:text-5xl text-5xl mt-16 font-body font-semibold">Settings</h1>
                <div className="relative text-center hover:shadow-2xl flex lg:flex-row flex-col items-center shadow-sm lg:flex-col-2 md:flex-col-2 border-black border-4 ease-in-out md:mx-36 justify-center duration-300 mt-6 bg-slate-100 lg:mx-60 mx-10 rounded-2xl py-20 lg:py-20">
                    <ToggleSwitch handleSwitch={handleSwitch} />
                    {!isChecked
                        ? <MainPage currUser={currUser} fileUploadRef={fileUploadRef} handleChange={handleChange} image={image} values={values} initialValues={initialValues} selectedFile={selectedFile} />
                        : <WarningPage />
                    }
                </div>
                <input type="file" ref={fileUploadRef} onChange={handleFileSelect} accept="image/jpeg, image/jpg, image/png" className="hidden" />
            </div>
    )
}

export default Settings;