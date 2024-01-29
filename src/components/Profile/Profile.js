import { useParams, useNavigate, Link } from "react-router-dom"
import * as userService from '../../services/userService';
import Spinner from "../Spinner/Spinner";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ToastContext } from "../../contexts/ToastContext";
import { AuthContext } from "../../contexts/AuthContext";
import { format } from "date-fns";
import EventCard from "../Events/EventCard/EventCard";
import SettingsLogo from '../svg/SettingsLogo';

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currUser, setCurrUser] = useState({});
    const [isCurrUser, setIsCurrUser] = useState(false);

    const { userId } = useParams();

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const { showToast } = useContext(ToastContext);

    useEffect(() => {
        userService.getBasicInfo(userId)
            .then(res => {
                setIsLoading(false);
                setIsCurrUser(res._id === user?._id);
                setCurrUser(res);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
                showToast('There was an error processing your request. Please try again later.', true);
                navigate('/');
            })
    }, [navigate, showToast, userId, user?._id]);

    return (
        isLoading ? <Spinner /> :
            <div className="flex flex-col items-center">
                <div className="flex mt-4 gap-2 items-center">
                    <img className="w-14 lg:w-20 lg:h-20 h-14 rounded-full" src={currUser.avatarUrl ? currUser.avatarUrl : currUser.gender === 'male' ? '/male.png' : '/female.png'} alt="avatar" />
                    <div>
                        <div className="font-bold text-4xl lg:text-5xl">{currUser.username}</div>
                        <div className="flex items-center mt-2 gap-1">
                            <div className="font-semibold text-gray-800">User since {format(currUser.createdAt, "MM/dd/yyyy")}</div>
                            {isCurrUser && <Link to="/settings" className="hover:text-gray-600 cursor-pointer"><SettingsLogo size={8} /></Link>}
                        </div>
                    </div>
                </div>
                <div className="lg:mt-8 mt-5 font-bold text-5xl">Created</div>
                {currUser.createdEvents.length === 0 ? <div className="font-semibold h-52 text-xl mt-3">No Created Events...</div> :
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-14 mx-auto p-4 py-12">
                        {currUser.createdEvents.map(x => <EventCard key={x._id} event={x} />)}
                    </div>

                }
                <div className="mt-5 font-bold text-5xl">Attending</div>
                {currUser.attending.length === 0 ? <div className="font-semibold text-xl mt-3 mb-5">Not Attending Events...</div> :
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-14 mx-auto p-4 py-12">
                        {currUser.attending.map(x => <EventCard key={x._id} event={x} />)}
                    </div>
                }
            </div>
    )
}

export default Profile;