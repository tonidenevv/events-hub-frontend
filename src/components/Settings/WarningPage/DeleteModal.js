import { useContext, useState } from 'react';
import { ToastContext } from '../../../contexts/ToastContext';
import { AuthContext } from '../../../contexts/AuthContext';
import * as userService from '../../../services/userService';
import WarningLogo from "../../svg/WarningLogo";
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const DeleteModal = ({ onDeleteClose }) => {
    const { showToast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const { user, handleDeleteAccount } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleDelete = () => {
        setIsLoading(true);
        userService.deleteOne(user.token, user._id)
            .then(() => {
                setIsLoading(false);
                handleDeleteAccount();
                showToast('Successfully deleted your account');
                navigate('/');
            })
            .catch(err => {
                setIsLoading(false);
                showToast('There was an error processing your request. Please try again later.', true);
                navigate('/');
            })
    }

    return (
        isLoading ? <Spinner /> :
            <div onClick={onDeleteClose} id="backdrop" className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
                <div className="bg-slate-100 text-center m-4 font-semibold border-2 border-black rounded-lg p-2">
                    <WarningLogo size={8} color={'red'} />
                    <div>
                        Are you sure you want to delete your account? Remember, there's no going back!
                    </div>
                    <button onClick={handleDelete} className="m-4 border-2 text-white bg-red-500 font-semibold border-black px-2 py-1 hover:bg-red-700 rounded-xl">Delete</button>
                    <button id="close" onClick={onDeleteClose} className="m-4 hover:text-slate-500">Cancel</button>
                </div>
            </div>
    )
}

export default DeleteModal;