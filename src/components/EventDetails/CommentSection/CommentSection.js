import { useState } from "react";
import Tick from "../../svg/Tick";
import NoComments from "./NoComments/NoComments";

const CommentSection = ({ comments }) => {
    const [comment, setComment] = useState('');


    return (
        <div className="flex flex-col items-start lg:ml-20 ml-10 font-bold text-4xl mt-12">
            <div>Comments</div>
            <div className="relative">
                <input type="text" className="py-1.5 px-2 w-96 border-2 text-base focus:outline-none focus:border-blue-500 border-black rounded-lg m-3 ml-0" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write a comment..!" />
                <button className="absolute right-5 hover:text-green-500 rounded-full flex items-center justify-center top-0 bottom-0 text-sm"><Tick /></button>
            </div>
            {comments?.length === 0 ? <NoComments />
                : <div>dadasd</div>}
        </div>
    )
}

export default CommentSection;