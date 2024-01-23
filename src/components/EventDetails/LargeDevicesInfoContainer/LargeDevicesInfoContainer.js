import { format } from "date-fns";

const LargeDevicesInfoContainer = ({ ticketPrice, date }) => {
    return (
        <div className="bg-gray-50 relative mx-16 w-96 col-span-3 h-40 hidden flex-col lg:flex border-2 rounded-xl border-black shadow-2xl items-center justify-center">
            <div className="grid grid-cols-2 mb-3 mt-12 gap-16">
                <div className="font-extrabold text-2xl flex items-center justify-center">
                    ${ticketPrice} <span className="font-normal ml-2 text-lg">total</span>
                </div>
                <div className="flex font-bold text-lg items-center justify-center">{format(date, 'd MMM y')}</div>
            </div>
            <button className="w-80 mt-3 mb-6 bg-pink-700 rounded-lg font-semibold text-white text-lg px-1 py-3 hover:bg-pink-800 ease-in-out duration-150">Attend</button>
        </div>
    )
}

export default LargeDevicesInfoContainer;