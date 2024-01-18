import FilterIcon from "../../svg/FilterIcon";

const FilterEvents = ({ handleFilterClick }) => {
    return (
        <>
            <div onClick={handleFilterClick} className="ml-5 p-2 hover:bg-slate-200 rounded-full cursor-pointer ease-in-out duration-100"><FilterIcon /></div>
        </>
    )
}

export default FilterEvents;