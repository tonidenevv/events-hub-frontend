const ModalFooter = () => {
    return (
        <div className="absolute bottom-0 w-full border-t-2 border-gray-200 rounded-lg lg:rounded-sm bg-white p-1">
            <div className="sticky bottom-0 flex justify-between">
                <button className="ml-3 font-semibold hover:text-slate-600">Clear All</button>
                <button className="mr-3 border-2 border-black bg-blue-400 hover:bg-blue-600 ease-in-out duration-100 rounded-lg py-1 px-2 font-semibold">Filter Events</button>
            </div>
        </div>
    )
}

export default ModalFooter;