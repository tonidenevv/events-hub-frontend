import { useState } from 'react';
import DeleteModal from './DeleteModal.js';
import ChangePasswordModal from './ChangePasswordModal.js';
const WarningPage = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);

    const onDeleteClose = (e) => {
        (e.target.id === 'backdrop' || e.target.id === 'close') && setShowDeleteModal(false);
    }

    const onPasswordClose = (e) => {
        (e.target.id === 'backdrop' || e.target.id === 'close') && setShowPasswordModal(false);
    }

    return (
        <>
            <button onClick={() => setShowPasswordModal(true)} className="font-semibold p-2 rounded-lg bg-blue-500 hover:bg-blue-800 border-2 border-black ease-in-out duration-150  text-slate-200 m-8 lg:m-20">Change Password</button>
            <button onClick={() => setShowDeleteModal(true)} className="m-8 lg:m-20 rounded-lg p-2 border-2 hover:bg-red-800 ease-in-out duration-150 border-black font-semibold text-slate-200 bg-red-500">Delete Account</button>
            {showDeleteModal && <DeleteModal onDeleteClose={onDeleteClose} />}
            {showPasswordModal && <ChangePasswordModal onPasswordClose={onPasswordClose} />}
        </>
    )
}

export default WarningPage;