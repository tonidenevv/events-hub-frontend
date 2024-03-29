import { differenceInCalendarDays, differenceInSeconds, differenceInMinutes, differenceInWeeks, differenceInMonths, differenceInYears, differenceInHours } from "date-fns";
import Like from "./Like/Like";

const Comment = ({ comment, user, showProfileModal, changeLikeCount }) => {
    const { _ownerId: creator } = comment;

    const timeSinceComment = (commentCreatedAt) => {
        const secondsDifference = differenceInSeconds(new Date(), commentCreatedAt);
        if (secondsDifference === 0) return (`Just now`);
        if (secondsDifference < 60) return `${secondsDifference} ${secondsDifference === 1 ? 'second' : 'seconds'} ago`;

        const minutesDifference = differenceInMinutes(new Date(), commentCreatedAt);
        if (minutesDifference < 60) return (`${minutesDifference} ${minutesDifference === 1 ? 'minute' : 'minutes'} ago`);

        const hoursDifference = differenceInHours(new Date(), commentCreatedAt);
        if (hoursDifference < 24) return (`${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`);

        const daysDifference = differenceInCalendarDays(new Date(), commentCreatedAt);
        if (daysDifference < 7) return (`${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago`);

        const weeksDifference = Math.floor(daysDifference / 7);
        if (daysDifference < 31) return (`${weeksDifference} ${weeksDifference === 1 ? 'week' : 'weeks'} ago`);

        const monthsDifference = Math.floor(daysDifference / 31);
        if (daysDifference < 365) return (`${monthsDifference} ${monthsDifference === 1 ? 'month' : 'months'} ago`);

        const yearsDifference = Math.floor(daysDifference / 365);
        return (`${yearsDifference} ${yearsDifference === 1 ? 'year' : 'years'} ago`);
    }

    return (
        <>
            <div className="flex items-center mt-5 mb-3">
                <img onClick={() => showProfileModal(creator._id)} className="w-12 h-12 rounded-full object-cover mr-2 hover:brightness-75 cursor-pointer" src={creator.avatarUrl ? creator.avatarUrl : creator.gender === 'male' ? '/male.png' : '/female.png'} alt="avatar" />
                <div className="flex lg:w-64 w-56 flex-col">
                    <div className="text-base flex items-center gap-5">
                        <div className="font-semibold text-gray-950">{creator.username}</div>
                        <div className="font-normal text-sm text-gray-700">{timeSinceComment(comment.creationDate)}</div>
                    </div>
                    <div className="text-lg font-normal">{comment.commentText}</div>
                </div>
                <Like user={user} changeLikeCount={changeLikeCount} comment={comment} />
            </div>
        </>
    )
}

export default Comment;