import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';
import Spinner from "../Spinner/Spinner";

const Logout = ({
    handleLogout,
}) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        if (!user) return navigate('/login', { replace: true });
        setisLoading(true);

        authService.logout(user.token)
            .then(res => {
                if (res.message) return navigate('/', { replace: true });

                setisLoading(false);
                handleLogout();
                navigate('/');
            })
            .catch(err => console.log(err));
    }, [navigate, user, handleLogout]);

    return (
        isLoading && <Spinner />
    )
}

export default Logout;