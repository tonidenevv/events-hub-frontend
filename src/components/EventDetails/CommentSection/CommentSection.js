import { useState } from "react";
import Tick from "../../svg/Tick";
import NoComments from "./NoComments/NoComments";
import * as commentService from '../../../services/commentService';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastContext } from "../../../contexts/ToastContext";
import { useContext } from "react";
import Spinner from "../../Spinner/Spinner";
import Comment from "./Comment/Comment";

const CommentSection = ({ comments, event, handleComment }) => {
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState('sort')

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
                setComment('');
            })
            .catch(err => {
                setIsLoading(false);
                showToast('There was an error processing your request. Please try again later.', true);
                navigate('/');
            })
    }

    const handleSort = (e) => {
        setSortBy(e.target.value);

        if (e.target.value === 'likes') return comments.sort((a, b) => b.likes.length - a.likes.length);

        if (e.target.value === 'recent') return comments.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
    }

    return (
        isLoading ? <Spinner /> :
            <div className="flex flex-col items-start lg:ml-20 ml-4 font-bold text-4xl mt-12">
                <div className="mb-4">Comments</div>
                <div>
                    {error && <div className="text-sm lg:text-lg text-red-500">Comment has to be between 3 and 20 characters.</div>}
                </div>
                {user
                    ? <div className="relative">
                        <input type="text" className={`py-1.5 px-2 lg:w-96 w-64 border-2 text-base focus:outline-none focus:border-blue-500 ${error ? 'border-red-500' : 'border-black'} rounded-lg m-3 ml-0`} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write a comment..!" />
                        <button onClick={handleSubmit} className="absolute right-5 hover:text-green-500 rounded-full flex items-center justify-center top-0 bottom-0 text-sm"><Tick /></button>
                    </div>
                    : <div className="text-base"><Link className="text-blue-500 mr-1" to="/login">Log in</Link>to be able to comment and like comments!</div>
                }
                <select value={sortBy} onChange={handleSort} className="text-base border-2 border-black rounded-lg" name="sorting" id="sorting">
                    <option name="sort" disabled value="sort">Sort Comments</option>
                    <option name="likes" value="likes">Most Likes</option>
                    <option name="recent" value="recent">Most Recent</option>
                </select>
                {comments?.length === 0
                    ? <NoComments />
                    : <div className="grid grid-cols-1 mb-8">{comments?.map(x => <Comment showToast={showToast} user={user} comment={x} key={x._id} />)}</div>
                }
            </div>
    )
}

export default CommentSection;