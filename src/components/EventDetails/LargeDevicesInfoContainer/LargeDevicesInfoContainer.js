import { format } from "date-fns";

const LargeDevicesInfoContainer = ({ ticketPrice, date, attendingCount, isOwner }) => {
    return (
        <div className="bg-gray-50 relative mx-16 w-96 col-span-3 h-52 hidden flex-col lg:flex border-2 rounded-xl border-black shadow-2xl items-center justify-center">
            <div className="grid grid-cols-2 mb-3 mt-12 gap-16">
                <div className="font-extrabold text-2xl flex items-center justify-center">
                    ${ticketPrice} <span className="font-normal ml-2 text-lg">total</span>
                </div>
                <div className="flex font-bold text-lg items-center justify-center">{format(date, 'd MMM y')}</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <button disabled={isOwner} className={`w-80 mt-3 mb-2 bg-pink-700 rounded-lg font-semibold text-white text-lg px-1 py-3 hover:bg-pink-800 ease-in-out duration-150 ${isOwner && 'cursor-not-allowed brightness-75'}`}>{isOwner ? 'You are the creator of the event!' : 'Attend'}</button>
                <div className="font-semibold text-lg m-3">{attendingCount === 0 && !isOwner ? 'Be the first one to attend!' : `Currently ${attendingCount} attending!`}</div>
            </div>
        </div>
    )
}

export default LargeDevicesInfoContainer;