import { differenceInCalendarDays, differenceInSeconds, differenceInMinutes, differenceInWeeks, differenceInMonths, differenceInYears, differenceInHours } from "date-fns";
import { useNavigate } from "react-router-dom";
import LikeLogo from "../../../svg/LikeLogo";
import * as commentService from '../../../../services/commentService';

const Comment = ({ comment, isOwner, user, showToast }) => {
    const { _ownerId: creator } = comment;

    const navigate = useNavigate();

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

        const weeksDifference = differenceInWeeks(new Date(), commentCreatedAt);
        if (daysDifference < 31) return (`${weeksDifference} ${weeksDifference === 1 ? 'week' : 'weeks'} ago`);

        const monthsDifference = differenceInMonths(new Date(), commentCreatedAt);
        if (monthsDifference < 12) return (`${monthsDifference} ${monthsDifference === 1 ? 'month' : 'months'} ago`);

        const yearsDifference = differenceInYears(new Date(), commentCreatedAt)
        return (`${yearsDifference} ${yearsDifference === 1 ? 'year' : 'years'} ago`);
    }

    const handleLike = () => {
        commentService.like(user.token, comment._id)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                showToast('There was an error processing your request. Please try again later.', true);
                navigate('/');
            })
    }

    return (
        <>
            <div className="flex items-center mt-5 mb-3">
                <img className="w-12 h-12 rounded-full mr-2" src={creator.avatarUrl} alt="avatar" />
                <div className="flex lg:w-64 w-56 flex-col">
                    <div className="text-base flex gap-7">
                        <div className="font-semibold text-gray-950">{creator.username}</div>
                        <div className="font-normal text-gray-700">{timeSinceComment(comment.creationDate)}</div>
                    </div>
                    <div className="text-lg font-normal">{comment.commentText}</div>
                </div>
                <button onClick={handleLike} disabled={isOwner || !user} className={`text-lg lg:ml-8 ml-3.5 flex items-center justify-center gap-1 lg:gap-2 ${isOwner || !user ? 'cursor-not-allowed' : ''}`}>
                    <div className="hover:text-gray-500"><LikeLogo /></div>
                    <div>{comment.likes?.length}</div>
                </button>
            </div>
        </>
    )
}

export default Comment;