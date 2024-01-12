import WarningLogo from "../../svg/WarningLogo";

const DeleteModal = ({ onDeleteClose }) => {
    return (
        <div onClick={onDeleteClose} id="backdrop" className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
            <div className="bg-slate-100 text-center m-4 font-semibold border-2 border-black rounded-lg p-2">
                <WarningLogo size={8} color={'red'} />
                <div>
                    Are you sure you want to delete your account? Remember, there's no going back!
                </div>
                <button className="m-4 border-2 text-white bg-red-500 font-semibold border-black px-2 py-1 hover:bg-red-700 rounded-xl">Delete</button>
                <button id="close" onClick={onDeleteClose} className="m-4 hover:text-slate-500">Cancel</button>
            </div>
        </div>
    )
}

export default DeleteModal;