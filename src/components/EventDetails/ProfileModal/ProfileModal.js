import { useEffect, useState } from "react"
import * as userService from '../../../services/userService';
import { useNavigate } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import CloseLogo from '../../svg/CloseLogo';
import Slider from "./Slider/Slider";
import { format } from 'date-fns'


const ProfileModal = ({ userId, showToast }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        userService.getBasicInfo(userId)
            .then(res => {
                console.log(res);
                setIsLoading(false);
                setUser(res);
            })
            .catch(err => {
                setIsLoading(false);
                showToast('Something went wrong. Please try again later.', true);
                navigate('/');
            })
    }, [showToast, navigate, userId]);

    return (
        <div id="backdrop" className="fixed z-50 inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
            {isLoading ? <Spinner /> :
                <div className="bg-slate-100 lg:w-[36rem] w-80 h-[42rem] lg:h-[43rem] border-2 flex flex-col items-center relative border-black rounded-lg">
                    <button className="right-3 top-3 absolute hover:text-gray-600"><CloseLogo /></button>
                    <div className="flex gap-2 items-center mt-10">
                        <img className="lg:w-16 lg:h-16 w-14 h-14 rounded-full" src={user.avatarUrl ? user.avatarUrl : user.gender === 'male' ? '/male.png' : '/female.png'} alt="" />
                        <div className="font-semibold lg:text-5xl text-3xl">{user.username}</div>
                    </div>
                    <div className="mt-1.5">Member since {format(user.createdAt, 'dd/MM/yyyy')}</div>
                    <div className="font-semibold text-center lg:text-3xl mt-3 text-2xl">Created Events</div>
                    {user.createdEvents.length === 0 ? <div className="font-semibold text-center text-xl lg:text-2xl mt-8">No Created Events...</div> :
                        <Slider events={user.createdEvents} />
                    }
                    <div className="font-semibold text-center lg:text-3xl mt-2 text-2xl">Attending</div>
                    {user.attending.length === 0 ? <div className="font-semibold text-center text-xl lg:text-2xl mt-8">Not Attending To Any Events...</div> :
                        <Slider events={user.attending} />
                    }
                </div>
            }
        </div>
    )
}

export default ProfileModal