const CreatedBy = ({ avatar, gender, username, isOwner, showProfileModal, userId }) => {
    console.log(userId);
    return (
        <div className="border-t-2 flex items-center gap-4 font-bold text-xl border-b-2 border-gray-300 p-3">
            <img onClick={() => showProfileModal(userId)} className="w-12 h-12 cursor-pointer rounded-full hover:brightness-75" src={avatar ? avatar : gender === 'male' ? '/male.png' : '/female.png'} alt="creator" />
            <div>
                Created by {isOwner ? 'you' : username}
            </div>
        </div>
    )
}

export default CreatedBy;