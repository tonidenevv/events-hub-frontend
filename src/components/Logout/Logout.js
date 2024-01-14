import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';
import Spinner from "../Spinner/Spinner";
import { ToastContext } from "../../contexts/ToastContext";

const Logout = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useContext(ToastContext);
    const { handleLogout } = useContext(AuthContext);

    useEffect(() => {
        if (!user) return navigate('/login', { replace: true });
        setIsLoading(true);

        authService.logout(user.token)
            .then(res => {
                if (res.message) return navigate('/', { replace: true });

                setIsLoading(false);
                handleLogout();
                showToast('Successfully logged out.');
                navigate('/');
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err);
                showToast('There was an error processing your request. Please try again later.', true);
                navigate('/');
            });
    }, [navigate, user, handleLogout, showToast]);

    return (
        isLoading && <Spinner />
    )
}

export default Logout;