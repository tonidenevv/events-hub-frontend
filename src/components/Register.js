// const handleBlur = (e) => {
//     setErrors({
//         username: values.username.length < 5 || values.username.length > 15,
//         password: values.password.length < 5 || values.password.length > 15,
//     });
// }
// const [errors, setErrors] = useState({});

import { useState } from "react";
import { Link } from "react-router-dom";
import * as authService from '../services/authService';

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [gender, setGender] = useState('gender');

    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e) => {
        setValues(old => ({ ...old, [e.target.name]: e.target.value }));
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.register(values)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <>
            <h1 className="lg:text-4xl text-4xl text-center lg:mt-10 mt-6 lg:mb-8 mb-2 font-bold">Register</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <input name="username" type="text" onChange={handleChange} value={values.username} className="lg:m-3 m-2 border-2 focus:border-4 ease-in-out duration-100 shadow-2xl border-black rounded-lg lg:p-2 p-1 text-center" placeholder="Username..." />
                <input name="email" type="text" onChange={handleChange} value={values.email} className="lg:m-3 m-2 border-2 focus:border-4 ease-in-out duration-100 shadow-2xl border-black rounded-lg lg:p-2 p-1 text-center" placeholder="Email..." />
                <input name="password" type="password" onChange={handleChange} value={values.password} className="lg:m-3 m-2 border-2 focus:border-4 ease-in-out duration-100 shadow-2xl border-black rounded-lg p-1 lg:p-2 text-center" placeholder="Password..." />
                <input name="confirmPassword" type="password" onChange={handleChange} value={values.confirmPassword} className="lg:m-3 m-2 border-2 focus:border-4 ease-in-out duration-100 shadow-2xl border-black rounded-lg p-1 lg:p-2 text-center" placeholder="Confirm Password..." />
                <select name="gender" className="rounded-lg border-2 border-black mt-4 p-1 px-2 shadow-2xl" id="gender" value={gender} onChange={handleGenderChange}>
                    <option value="gender" disabled>Choose a gender...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label htmlFor="file-upload" className="relative cursor-pointer mt-5 bg-blue-800 text-white font-semibold rounded-lg p-2 hover:bg-slate-700 ease-in-out duration-150">
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
                <input type="submit" className="bg-slate-500 border-black border-1 px-5 cursor-pointer relative font-semibold hover:text-lg border-2 hover:border-4 hover:bg-slate-600 text-center m-6 p-2 rounded-2xl" value="Register" />
            </form>
            <div className="text-center text-lg font-semibold ">Already have an account? Sign in <Link className="text-blue-700" to="/login">here!</Link></div>
        </>
    )
};

export default Register;
