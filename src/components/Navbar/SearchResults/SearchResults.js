import { Link } from "react-router-dom"
import Spinner from '../../Spinner/Spinner';

const SearchResults = ({ users, isSearchLoading, setSearchValue }) => {
    return (
        <div className="bg-white flex flex-col border-2 border-black w-full max-h-96 overflow-y-auto">
            {isSearchLoading ? <div className="flex mb-10 justify-center"><Spinner /></div> :
                users.length === 0 ? <div className="font-semibold p-1">No users found...</div> :
                    users.map(x =>
                        <Link onClick={() => setSearchValue('')} key={x._id} to={`/profile/${x._id}`} className="flex items-center p-1.5 gap-2 hover:bg-gray-200">
                            <img className="w-10 object-cover h-10 rounded-full" src={x.avatarUrl ? x.avatarUrl : x.gender === 'male' ? '/male.png' : '/female.png'} alt="avatar" />
                            <div className="font-semibold">{x.username}</div>
                        </Link>
                    )
            }
        </div>
    )
}

export default SearchResults
