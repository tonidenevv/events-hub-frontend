const ModalFooter = ({ handleClear, handleFilter }) => {
    return (
        <div className="sticky bottom-0 flex bg-white border-t-2 border-gray-200 p-1.5 justify-between">
            <button onClick={handleClear} className="ml-3 font-semibold hover:text-slate-600">Clear All</button>
            <button onClick={handleFilter} className="mr-3 border-2 border-black bg-blue-400 hover:bg-blue-600 ease-in-out duration-100 rounded-lg py-1 px-2 font-semibold">Filter Events</button>
        </div>
    )
}

export default ModalFooter;