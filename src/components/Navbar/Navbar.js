import { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as userService from '../../services/userService';
import SearchResults from "./SearchResults/SearchResults";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [foundUsers, setFoundUsers] = useState([]);
    const dropdownRef = useRef(null);
    const [isSearchLoading, setIsSearchLoading] = useState(false);

    const { user } = useContext(AuthContext);

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    }

    const handleClickOutsideDropDown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setShowDropdown(false);
        }
    }

    const handleSearchResultsHide = (e) => {
        if (e.target.id !== 'searchInput') setShowSearchResults(false);
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideDropDown);
        document.addEventListener('click', handleSearchResultsHide);

        return () => {
            document.removeEventListener('click', handleClickOutsideDropDown);
            document.removeEventListener('click', handleSearchResultsHide);
        }
    }, []);

    const handleSearchChange = (e) => {
        setIsSearchLoading(true);

        setSearchValue(e.target.value);

        if (!e.target.value) return;


        userService.getSearched(e.target.value)
            .then(res => {
                setIsSearchLoading(false);
                if (res.message) return;
                setShowSearchResults(true);
                setFoundUsers(res);
            })
            .catch(err => {
                setIsSearchLoading(false);
                console.log(err);
            })
    }

    return (
        <nav className="bg-green-100 z-10 sticky top-0">
            <div className="max-w-7x1 mx-auto p-4">
                <div className="flex h-10">
                    <div className="flex w-16 lg:ml-5 justify-between items-center">
                        <Link to="/">
                            <img className="hover:bg-slate-300 rounded-full p-1 ease-in-out duration-150" src="/logo.png" alt="The Event Hub" />
                        </Link>
                    </div>
                    <div className="hidden md:flex md:ml-6 lg:ml-20 items-center gap-14">
                        <Link to="/" className="text-slate-700 font-semibold text-lg py-1 px-2 ease-in-out duration-300 hover:bg-slate-300 rounded-lg">Home</Link>
                        <Link to="/events" className="text-slate-700 font-semibold text-lg py-1 px-2 ease-in-out duration-300 hover:bg-slate-300 rounded-lg">Events</Link>
                        {user
                            ? <>
                                <Link to="/create" className="text-slate-700 font-semibold text-lg py-1 px-2 ease-in-out duration-300 hover:bg-slate-300 rounded-lg">Create</Link>
                            </>
                            : <>
                                <Link to="/login" className="text-slate-700 font-semibold text-lg py-1 px-2 ease-in-out duration-300 hover:bg-slate-300 rounded-lg">Login</Link>
                                <Link to="/register" className="text-slate-700 font-semibold text-lg py-1 px-2 ease-in-out duration-300 hover:bg-slate-300 rounded-lg">Register</Link>
                            </>
                        }
                    </div>
                    <div className=" md:mr-2 lg:flex relative flex-col items-center lg:px-6 xl:px-32 2xl:px-60">
                        <input id="searchInput" value={searchValue} onChange={handleSearchChange} placeholder="Search Users..." className="border-2 border-black rounded-2xl focus:outline-none focus:border-blue-500 p-2 md:w-50 lg:w-72 w-32 ml-8 lg:ml-0 xl:w-80" type="text" name="userSearch" />
                        <div className="absolute top-12 lg:top-11 2xl:w-80 w-48 lg:w-72">
                            {searchValue && showSearchResults && <SearchResults users={foundUsers} setSearchValue={setSearchValue} isSearchLoading={isSearchLoading} />}
                        </div>
                    </div>
                    {user ?
                        <div className="flex ml-auto lg:mr-10 relative items-center">
                            <img onClick={toggleDropdown} ref={dropdownRef} src={user.avatarUrl ? user.avatarUrl : (user.gender === 'male' ? `/male.png` : '/female.png')} className="w-12 h-12 object-cover mr-8 hover:brightness-75 cursor-pointer rounded-full" alt="Person" />
                            <div className={`absolute right-0 w-32 lg:h-28 h-36 flex flex-col justify-evenly top-full mt-4 rounded-md py-2 px-4 bg-slate-800 shadow-md ${!showDropdown && 'hidden'}`}>
                                <Link to="/events" className="lg:hidden md:hidden block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">Events</Link>
                                <Link to="/create" className="lg:hidden md:hidden block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">Create</Link>
                                <Link to={`/profile/${user._id}`} className="block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">My Profile</Link>
                                <Link to="/settings" className="block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">Settings</Link>
                                <Link to="/logout" className="block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">Sign Out</Link>
                            </div>
                        </div>
                        : <div className="flex ml-auto lg:hidden md:hidden relative items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={toggleDropdown} ref={dropdownRef} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mr-11 text-slate-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <div className={`absolute right-0 w-32 lg:h-28 h-36 flex flex-col justify-evenly top-full mt-4 rounded-md py-2 px-4 bg-slate-800 shadow-md ${!showDropdown && 'hidden'}`}>
                                <Link to="/events" className="lg:hidden block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">Events</Link>
                                <Link to="/login" className="block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">Login</Link>
                                <Link to="/register" className="block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">Register</Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;