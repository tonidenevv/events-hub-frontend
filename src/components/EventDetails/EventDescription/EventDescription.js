const EventDescription = ({ description }) => {
    return (
        <div className="border-b-2 mt-2 border-gray-300 p-3">
            <div className="font-bold text-2xl lg:text-4xl">About The Event</div>
            <div className="font-semibold text-xl text-gray-700 mt-4 lg:text-2xl">{description}</div>
        </div>
    )
}

export default EventDescription;