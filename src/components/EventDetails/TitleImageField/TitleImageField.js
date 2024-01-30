import { useNavigate } from "react-router-dom";
import ChevronLeft from "../../svg/ChevronLeft";

const TitleImageField = ({ title, image }) => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/events');
    }

    return (
        <>
            <button onClick={handleBackClick} className="lg:left-6 lg:top-6 left-3 top-3 absolute flex cursor-pointer hover:text-gray-600"><ChevronLeft />Back</button>
            <div className="lg:w-8/12 flex mt-8 lg:mt-0 items-center flex-col">
                <div className="flex w-full h-full flex-col items-center">
                    <div className="lg:mt-10 mt-6 text-center order-2 lg:ml-0 ml-2 font-bold text-4xl lg:text-5xl">{title}</div>
                    <div className="mt-4 rounded-2xl lg:order-2 lg:w-3/6 w-11/12 h-96">
                        <img className="w-full object-cover h-full rounded-2xl shadow-2xl" src={image} alt="Event" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TitleImageField;