const CreatedBy = ({ avatar, gender, username, isOwner }) => {
    return (
        <div className="border-t-2 flex items-center gap-4 font-bold text-xl border-b-2 border-gray-300 p-3">
            <img className="w-12 h-12 rounded-full" src={avatar ? avatar : gender === 'male' ? '/male.png' : '/female.png'} alt="creator" />
            <div>
                Created by {isOwner ? 'you' : username}
            </div>
        </div>
    )
}

export default CreatedBy;