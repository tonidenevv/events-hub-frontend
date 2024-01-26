import { format, differenceInCalendarDays } from "date-fns";

const DetailsFooter = ({ handleAttend, isAttending, attendingCount, date, ticketPrice, isOwner }) => {

    const hasPassed = differenceInCalendarDays(date, Date.now()) < 0;

    return (
        <div className="sticky bottom-0 border-t-2 lg:hidden p-3 shadow-2xl items-center border-gray-200 bg-white grid grid-cols-2">
            <div className="font-semibold flex justify-center items-center flex-col text-lg lg:text-xl">
                <div className="flex flex-col items-start">
                    <div>${ticketPrice}</div>
                    <div>{format(date, 'd MMM y')}</div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <button disabled={isOwner || hasPassed} onClick={handleAttend} className={`bg-pink-700 text-white lg:text-xl font-semibold px-3 py-1.5 border-2 border-black rounded-lg hover:bg-pink-900 ease-in-out duration-150 ${(isOwner || hasPassed) && 'cursor-not-allowed brightness-75'}`}>{hasPassed ? 'Event Passed' : isAttending ? 'Attending' : 'Attend'}</button>
                <div className="font-semibold text-sm mt-1">{hasPassed ? `${attendingCount} ${attendingCount === 1 ? 'person' : 'people'} attended` : !attendingCount && !isOwner ? 'Be the first one to attend!' : `Currently ${attendingCount} attending!`}</div>
            </div>
        </div>
    )
}

export default DetailsFooter;