import { useState } from "react";
import Tick from "../../svg/Tick";
import NoComments from "./NoComments/NoComments";
import * as commentService from '../../../services/commentService';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastContext } from "../../../contexts/ToastContext";
import { useContext } from "react";
import Spinner from "../../Spinner/Spinner";
import Comment from "./Comment/Comment";

const CommentSection = ({ comments, event, handleComment }) => {
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { user } = useContext(AuthContext);
    const { showToast } = useContext(ToastContext);

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (comment.length < 3 || comment.length > 20) return setError('Comment should be between 3 and 20 characters');

        setError('');

        commentService.create(user.token, comment, event._id)
            .then(res => {
                if (res.message) return;
                setIsLoading(false);
                handleComment(res);
                console.log(res);
            })
            .catch(err => {
                setIsLoading(false);
                showToast('There was an error processing your request. Please try again later.', true);
                navigate('/');
            })
    }

    return (
        isLoading ? <Spinner /> :
            <div className="flex flex-col items-start lg:ml-20 ml-10 font-bold text-4xl mt-12">
                <div className="mb-4">Comments</div>
                <div className="relative">
                    <input type="text" className="py-1.5 px-2 lg:w-96 border-2 text-base focus:outline-none focus:border-blue-500 border-black rounded-lg m-3 ml-0" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write a comment..!" />
                    <button onClick={handleSubmit} className="absolute right-5 hover:text-green-500 rounded-full flex items-center justify-center top-0 bottom-0 text-sm"><Tick /></button>
                </div>
                {comments?.length === 0
                    ? <NoComments />
                    : <div className="grid grid-cols-1 mb-8">{comments?.map(x => <Comment comment={x} key={x._id} />)}</div>
                }
            </div>
    )
}

export default CommentSection;