import { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const { user } = useContext(AuthContext);

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    }

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setShowDropdown(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    return (
        <nav className="bg-slate-800 sticky top-0">
            <div className="max-w-7x1 mx-auto p-4">
                <div className="flex h-10">
                    <div className="flex w-16 lg:ml-5 ml-10 justify-between items-center">
                        <Link to="/">
                            <img className="" src="/logo.png" alt="The Event Hub" />
                        </Link>
                    </div>
                    <div className="hidden md:flex ml-20 items-center gap-14">
                        <Link to="/" className="text-white font-semibold text-lg py-1 px-2 ease-in-out duration-300 hover:bg-slate-900 rounded-lg">Home</Link>
                        <Link to="/events" className="text-white font-semibold text-lg py-1 px-2 ease-in-out duration-300 hover:bg-slate-900 rounded-lg">Events</Link>
                        {user
                            ? <>
                                <Link to="/create" className="text-white font-semibold text-lg py-1 px-2 ease-in-out duration-300 hover:bg-slate-900 rounded-lg">Create</Link>
                            </>
                            : <>
                                <Link to="/login" className="text-white font-semibold text-lg py-1 px-2 ease-in-out duration-300 hover:bg-slate-900 rounded-lg">Login</Link>
                                <Link to="/register" className="text-white font-semibold text-lg py-1 px-2 ease-in-out duration-300 hover:bg-slate-900 rounded-lg">Register</Link>
                            </>
                        }
                    </div>
                    {user ?
                        <div className="flex ml-auto lg:mr-10 relative items-center">
                            <img onClick={toggleDropdown} ref={dropdownRef} src={user.avatarUrl ? user.avatarUrl : (user.gender === 'male' ? `/male.png` : '/female.png')} className="w-12 h-12 mr-8 hover:brightness-75 cursor-pointer rounded-full" alt="Person" />
                            <div className={`absolute right-0 w-32 lg:h-28 h-36 flex flex-col justify-evenly top-full mt-4 rounded-md py-2 px-4 bg-slate-800 shadow-md ${!showDropdown && 'hidden'}`}>
                                <Link to="/events" className="lg:hidden md:hidden block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">Events</Link>
                                <Link to="/create" className="lg:hidden md:hidden block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">Create</Link>
                                <Link to="/profile" className="block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">My Profile</Link>
                                <Link to="/settings" className="block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">Settings</Link>
                                <Link to="/logout" className="block text-center font-semibold text-gray-200 hover:text-lg ease-in-out duration-150">Sign Out</Link>
                            </div>
                        </div>
                        : <div className="flex ml-auto lg:hidden md:hidden relative items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={toggleDropdown} ref={dropdownRef} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mr-11 text-white">
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