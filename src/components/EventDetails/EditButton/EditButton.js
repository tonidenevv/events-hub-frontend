import { Link } from "react-router-dom";

const EditButton = ({ eventId }) => {
    return (
        <Link to={`/events/${eventId}/edit`} className="bg-blue-500 text-center hover:bg-blue-700 ease-in-out duration-150 border-2 border-black py-2 w-24 rounded-lg text-lg text-white font-semibold">Edit</Link>
    )
}

export default EditButton;