import FilterIcon from "../../svg/FilterIcon";

const FilterEvents = ({ handleFilterClick, filtersCount }) => {
    return (
        <>
            <div onClick={handleFilterClick} className="lg:m-3 relative p-2 ml-1 border-2 border-black hover:bg-slate-200 rounded-full cursor-pointer ease-in-out duration-100">
                {filtersCount > 0 && <div className="absolute right-0 top-0 text-white bg-black rounded-full w-4 h-4 flex justify-center items-center text-sm">{filtersCount}</div>}
                <FilterIcon />
            </div>
        </>
    )
}

export default FilterEvents;