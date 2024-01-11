import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';
import Spinner from '../Spinner/Spinner';

const Login = ({
    handleAuth,
}) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues(old => ({ ...old, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (values.username.length < 5 || values.username.length > 15 || values.password.length < 5 || values.password.length > 15) {
            setIsLoading(false);
            setError('Wrong username or password!');
        } else {
            authService.login({ username: values.username, password: values.password })
                .then(res => {
                    setIsLoading(false);
                    if (res.message) {
                        setError(res.message);
                    } else {
                        handleAuth(res);
                        navigate('/');
                    }
                })
                .catch(err => console.log(err));
        }
    };

    return (
        isLoading
            ? <Spinner />
            : <>
                <h1 className="text-4xl text-center mt-20 mb-8 font-bold">Login</h1>
                {error && <div className="text-center font-semibold text-red-500 text-lg">{error}</div>}
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                    <input name="username" type="text" onChange={handleChange} value={values.username} className="m-6 border-2 focus:border-4 ease-in-out duration-100 shadow-2xl border-black rounded-lg p-2 text-center" placeholder="Username..." />
                    <input name="password" type="password" onChange={handleChange} value={values.password} className="m-6 border-2 focus:border-4 ease-in-out duration-100 shadow-2xl border-black rounded-lg p-2 text-center" placeholder="Password..." />
                    <input type="submit" className="bg-slate-500 border-black border-1 px-5 cursor-pointer relative font-semibold hover:text-lg border-2 hover:border-4 hover:bg-slate-600 text-center m-6 p-2 rounded-2xl" value="Login" />
                </form>
                <div className="text-center text-lg font-semibold ">No account yet? Sign up <Link className="text-blue-700" to="/register">here!</Link></div>
            </>
    )
}

export default Login;