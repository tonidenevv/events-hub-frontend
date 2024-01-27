const DeleteButton = ({ showDeleteModal }) => {
    return (
        <button onClick={showDeleteModal} className="bg-red-500 hover:bg-red-700 ease-in-out duration-150 border-2 border-black py-2 w-24 rounded-lg text-lg text-white font-semibold">Delete</button>
    )
}

export default DeleteButton;