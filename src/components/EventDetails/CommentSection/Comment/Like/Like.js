import { useNavigate } from "react-router-dom";
import LikeLogo from "../../../../svg/LikeLogo";
import * as commentService from '../../../../../services/commentService';
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ToastContext } from "../../../../../contexts/ToastContext";

const Like = ({ user, comment, changeLikeCount }) => {
    const [likes, setLikes] = useState(comment.likes?.length);
    const [hasLiked, setHasLiked] = useState(false);

    const { showToast } = useContext(ToastContext);

    useEffect(() => {
        if (user) setHasLiked(comment.likes.some(x => x === user._id));
    }, [comment.likes, user]);


    const navigate = useNavigate();

    const handleLike = () => {
        commentService.like(user.token, comment._id)
            .then(res => {
                setLikes(res.likes.length);
                changeLikeCount(res._id, res.likes);
                setHasLiked(res.likes.some(x => x === user._id));
            })
            .catch(err => {
                showToast('There was an error processing your request. Please try again later.', true);
                navigate('/');
            })
    }

    return (
        <button onClick={handleLike} disabled={!user} className={`text-lg lg:ml-8 ml-3.5 flex items-center justify-center gap-1 lg:gap-2 ${!user ? 'cursor-not-allowed' : ''}`}>
            <div className={`hover:text-gray-500 ${hasLiked ? 'text-blue-500' : 'text-black'}`}><LikeLogo /></div>
            <div>{likes}</div>
        </button>
    )
}

export default Like;