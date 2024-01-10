import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';

const Logout = ({
    handleLogout,
}) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return navigate('/login', { replace: true });

        authService.logout(user.token)
            .then(res => {
                if (!res.message) {
                    handleLogout();
                    navigate('/');
                };
            });
    }, [navigate, user]);

}

export default Logout;