import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';
import Spinner from '../Spinner/Spinner';
import { ToastContext } from "../../contexts/ToastContext";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const { showToast } = useContext(ToastContext);

    const { handleAuth, user } = useContext(AuthContext);

    const handleChange = (e) => {
        setValues(old => ({ ...old, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        if (user) return navigate('/', { replace: true });
    }, [user, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (values.username.length < 5 || values.username.length > 15 || values.password.length < 5 || values.password.length > 15) {
            setIsLoading(false);
            setError('Wrong username or password!');
        } else {
            authService.login({ username: (values.username).toLowerCase(), password: values.password })
                .then(res => {
                    setIsLoading(false);
                    if (res.message) {
                        setError(res.message);
                    } else {
                        handleAuth(res);
                        showToast('Successfully logged in.');
                        navigate('/');
                    }
                })
                .catch(err => {
                    setIsLoading(false);
                    console.log(err);
                    showToast('There was an error processing your request. Please try again later.', true);
                    navigate('/');
                });
        }
    };

    return (
        isLoading
            ? <Spinner />
            : <>
                <h1 className="text-4xl text-center mt-20 mb-8 font-bold">Login</h1>
                {error && <div className="text-center font-semibold text-red-500 text-lg">{error}</div>}
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                    <input name="username" type="text" onChange={handleChange} value={values.username} className={`m-6 border-2 focus:outline-none focus:border-blue-500 shadow-2xl border-black rounded-lg p-2 text-center ${error && 'border-red-500'}`} placeholder="Username..." />
                    <input name="password" type="password" onChange={handleChange} value={values.password} className={`m-6 border-2 focus:outline-none focus:border-blue-500 shadow-2xl border-black rounded-lg p-2 text-center ${error && 'border-red-500'}`} placeholder="Password..." />
                    <input type="submit" className="bg-slate-500 border-black border-1 px-5 cursor-pointer relative font-semibold border-2 hover:bg-slate-600 ease-in-out duration-150 text-center m-6 p-2 rounded-2xl" value="Login" />
                </form>
                <div className="text-center text-lg font-semibold ">No account yet? Sign up <Link className="text-blue-500 hover:text-blue-700" to="/register">here!</Link></div>
            </>
    )
}

export default Login;