import { useState } from "react";
import SearchLogo from "../../svg/SearchLogo";

const Search = ({ getSearchValue }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        getSearchValue(searchValue);
    }

    return (
        <div className="relative flex items-center">
            <input
                type="text"
                name="search"
                placeholder="Search Events..."
                className="lg:w-96 w-80 h-16 rounded-full shadow-2xl pl-8 pr-4 focus:outline-none focus:border-blue-500 border-2 border-black"
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={handleSearch} className="absolute hover:bg-slate-300 p-2 hover:rounded-full right-5">
                <SearchLogo />
            </button>
        </div>
    )
}

export default Search;