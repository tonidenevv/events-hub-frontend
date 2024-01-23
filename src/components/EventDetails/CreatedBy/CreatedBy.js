const CreatedBy = ({ avatar, gender, username }) => {
    return (
        <div className="border-t-2 flex items-center gap-4 font-bold text-xl border-b-2 border-gray-300 p-3">
            <img className="w-12 h-12 rounded-full" src={avatar ? avatar : gender === 'male' ? '/male.jpg' : '/female.jpg'} alt="creator" />
            <div>
                Created by {username}
            </div>
        </div>
    )
}

export default CreatedBy;