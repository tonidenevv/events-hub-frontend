import eventImage from '../../../assets/event-image.jpg';
import Typed from 'react-typed';
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const backgroundImageStyle = {
        backgroundImage: `url("${eventImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: '70% 80%',
    }

    const navigate = useNavigate();

    return (
        <div className="text-white" style={backgroundImageStyle}>
            <div className="bg-gradient-to-r from-black">
                <div className="lg:w-1/2 w-11/12 lg:ml-10 ml-4 grid grid-cols-1 gap-4">
                    <h2 className="font-semibold uppercase mt-8 text-xl">The home to all events</h2>
                    <h1 className="font-black text-4xl lg:text-7xl">
                        <Typed className="text-orange-500" strings={['Host', 'Attend']} cursorChar=" " typeSpeed={120} backSpeed={140} loop />
                        events, all around the world
                    </h1>
                    <p className="text-lg text-gray-200 font-semibold">All events worldwide in just one place. Host and find events through the comfort of your home and enjoy socializing with like-minded people.</p>
                    <button onClick={() => navigate('/events')} className="rounded-lg h-12 w-32 mb-14 mt-2 font-semibold bg-gradient-to-r from-red-500 to-orange-600 hover:bg-gradient-to-r  py-3 px-4 hover:from-orange-600 hover:to-red-500 ease-in-out duration-75">View Events</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;