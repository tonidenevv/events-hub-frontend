import { useState } from "react";
import CloseLogo from "../../svg/CloseLogo";

const ChangePasswordModal = ({ onPasswordClose }) => {
    const [values, setValues] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const handleChange = (e) => {
        setValues(old => ({
            ...old,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <div id="backdrop" onClick={onPasswordClose} className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
            <div className="bg-slate-100 shadow-2xl border-2 border-black p-2 rounded-lg text-center font-semibold m-4">
                <form className="flex flex-col relative">
                    <h1 className="font-bold text-xl m-2 mt-8">Change Password</h1>
                    <div onClick={onPasswordClose} className="top-0 right-0 absolute cursor-pointer hover:text-slate-500"><CloseLogo /></div>
                    <input type="password" name="currentPassword" onChange={handleChange} value={values.currentPassword} className="m-2 mt-6 border-2 border-black focus:outline-none focus:border-blue-700 rounded-lg p-2" placeholder="Current Password" />
                    <input type="password" name="newPassword" onChange={handleChange} value={values.newPassword} className="m-2 border-2 border-black focus:outline-none focus:border-blue-700 rounded-lg p-2" placeholder="New Password" />
                    <input type="password" name="confirmNewPasswrd" onChange={handleChange} value={values.confirmNewPassword} className="m-2 border-2 border-black focus:outline-none focus:border-blue-700 rounded-lg p-2" placeholder="Confirm New Password" />
                    <input type="submit" className="m-2 border-2 cursor-pointer border-black bg-blue-800 text-white rounded-lg py-2 hover:bg-blue-900 ease-in-out duration-100" value="Confirm" />
                </form>
            </div>
        </div >
    )
}

export default ChangePasswordModal;