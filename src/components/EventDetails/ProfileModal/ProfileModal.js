import { useEffect, useState } from "react"
import * as userService from '../../../services/userService';
import { useNavigate } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

const ProfileModal = ({ userId, showToast }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
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
            <div className="bg-slate-100 border-2 border-black rounded-lg">
                {isLoading ? <Spinner /> : `${user.username}`}
            </div>
        </div>
    )
}

export default ProfileModal