import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';
import Spinner from "../Spinner/Spinner";
import hasErrors from "../../helpers/validators";
import { ToastContext } from "../../contexts/ToastContext";

const Register = ({
    handleAuth,
}) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const [gender, setGender] = useState('gender');

    const [selectedFile, setSelectedFile] = useState(null);

    const [serverErrors, setServerErrors] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const { showToast } = useContext(ToastContext);

    const hasAnyErrors = (Object.values(errors).some(x => x === true) || Object.values(errors).length < 5);

    const handleChange = (e) => {
        setValues(old => ({ ...old, [e.target.name]: e.target.value }));
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
        if (e.target.value !== 'gender') {
            setErrors(old => ({
                ...old,
                gender: false,
            }));
        };
    };

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleBlur = (e) => {
        const currField = e.target.name;
        if ((currField === 'password' || currField === 'confirmPassword') && values.confirmPassword) {
            setErrors(old => ({
                ...old,
                confirmPassword: values.password !== values.confirmPassword,
            }));
        }
        setErrors(old => ({
            ...old,
            [currField]: hasErrors[currField](currField === 'gender' ? e.target.value : currField === 'confirmPassword' ? [values[currField], values.password] : values[currField]),
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        for (const key in values) {
            (key === 'username' || key === 'email') ? formData.append(key, values[key].toLowerCase()) : formData.append(key, values[key]);
        }
        formData.append('gender', gender);
        formData.append('file', selectedFile);
        authService.register(formData)
            .then(res => {
                setIsLoading(false);
                if (res.message === 'Username is already taken.') {
                    setServerErrors({ username: res.message });
                } else if (res.message === 'Email is already taken.') {
                    setServerErrors({ email: res.message })
                } else {
                    setServerErrors({});
                    handleAuth(res);
                    showToast('Successfully registered.')
                    navigate('/');
                }
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err);
                showToast('There was an error processing your request. Please try again later.', true);
                navigate('/');
            });
    };

    return (
        isLoading ? <Spinner /> :
            <>
                <h1 className="lg:text-4xl text-4xl text-center lg:mt-10 mt-6 lg:mb-8 mb-2 font-bold">Register</h1>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                    {errors.username && <div className="lg:text-lg text-red-500 text-center font-semibold">Username should be between 5 and 15 characters and not have any special characters.</div>}
                    {serverErrors.username && <div className="lg:text-lg text-red-500 text-center font-semibold">{serverErrors.username}</div>}
                    <input onBlur={handleBlur} name="username" type="text" onChange={handleChange} value={values.username} className={`lg:m-3 m-2 border-2 focus:border-4 ease-in-out duration-100 shadow-2xl rounded-lg lg:p-2 p-1 text-center ${(serverErrors.username || errors.username) ? 'border-red-500' : 'border-black'}`} placeholder="Username..." />
                    {errors.email && <div className="lg:text-lg text-red-500 text-center font-semibold">Email should be a valid email and between 5 and 25 characters.</div>}
                    {serverErrors.email && <div className="lg:text-lg text-red-500 text-center font-semibold">{serverErrors.email}</div>}
                    <input onBlur={handleBlur} name="email" type="text" onChange={handleChange} value={values.email} className={`lg:m-3 m-2 border-2 focus:border-4 ease-in-out duration-100 shadow-2xl rounded-lg lg:p-2 p-1 text-center ${(serverErrors.email || errors.email) ? 'border-red-500' : 'border-black'}`} placeholder="Email..." />
                    {errors.password && <div className="lg:text-lg text-red-500 text-center font-semibold">Password should be between 5 and 15 characters.</div>}
                    <input onBlur={handleBlur} name="password" type="password" onChange={handleChange} value={values.password} className={`lg:m-3 m-2 border-2 focus:border-4 ease-in-out duration-100 shadow-2xl rounded-lg p-1 lg:p-2 text-center ${(serverErrors.password || errors.password) ? 'border-red-500' : 'border-black'}`} placeholder="Password..." />
                    {errors.confirmPassword && <div className="lg:text-lg text-red-500 text-center font-semibold">Passwords should match.</div>}
                    <input onBlur={handleBlur} name="confirmPassword" type="password" onChange={handleChange} value={values.confirmPassword} className={`lg:m-3 m-2 border-2 focus:border-4 ease-in-out duration-100 shadow-2xl rounded-lg p-1 lg:p-2 text-center ${(serverErrors.confirmPassword || errors.confirmPassword) ? 'border-red-500' : 'border-black'}`} placeholder="Confirm Password..." />
                    {errors.gender && <div className="lg:text-lg text-red-500 text-center font-semibold">Please select a gender.</div>}
                    <select onBlur={handleBlur} name="gender" className={`rounded-lg border-2 mt-4 p-1 px-2 shadow-2xl ${(serverErrors.gender || errors.gender) ? 'border-red-500' : 'border-black'}`} id="gender" value={gender} onChange={handleGenderChange}>
                        <option value="gender" disabled>Choose a gender...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label htmlFor="file-upload" className=" cursor-pointer mt-5 bg-blue-800 text-white font-semibold rounded-lg p-2 hover:bg-slate-700 ease-in-out duration-150">
                        <input
                            id="file-upload"
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={handleFileSelect}
                            style={{ zIndex: '-1' }}
                        />
                        <span className="block text-center">
                            {selectedFile ? 'Avatar Added' : 'Choose Avatar (Optional)'}
                        </span>
                    </label>
                    <input type="submit" disabled={hasAnyErrors} className={hasAnyErrors ? `bg-slate-500 border-black border-1 px-5 cursor-not-allowed font-semibold border-2 text-center m-6 p-2 rounded-2xl` : `bg-slate-500 border-black border-1 px-5 cursor-pointer font-semibold hover:text-lg border-2 hover:border-4 hover:bg-slate-600 text-center m-6 p-2 rounded-2xl`} value="Register" />
                </form>
                <div className="text-center text-lg font-semibold ">Already have an account? Sign in <Link className="text-blue-700" to="/login">here!</Link></div>
            </>
    )
};

export default Register;
