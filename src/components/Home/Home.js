import { useNavigate } from "react-router-dom";
import eventImage from '../../assets/event-image.jpg';
import Typed from 'react-typed';

const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: `url("${eventImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: '70% 80%',
    }

    const navigate = useNavigate();

    return (
        <>
            <div className="text-white" style={backgroundImageStyle}>
                <div className="bg-gradient-to-r from-black">
                    <div className="lg:w-1/2 w-11/12 lg:ml-10 ml-4 grid grid-cols-1 gap-4">
                        <h2 className="font-semibold uppercase mt-8 text-xl">The home to all events</h2>
                        <h1 className="font-black text-4xl lg:text-7xl">
                            <Typed strings={['Host', 'Attend']} cursorChar=" " typeSpeed={120} backSpeed={140} loop />
                            events, all around the world
                        </h1>
                        <p className="text-lg text-gray-200 font-semibold">All events worldwide in just one place. Host and find events through the comfort of your home and enjoy socializing with like-minded people.</p>
                        <button onClick={() => navigate('/events')} className="rounded-lg h-12 w-32 mb-14 mt-2 font-semibold bg-gradient-to-r from-red-500 to-orange-600 hover:bg-gradient-to-r  py-3 px-4 hover:from-orange-600 hover:to-red-500 ease-in-out duration-75">View Events</button>
                    </div>
                </div>
            </div>
            <div className="lg:ml-10 ml-4 mt-10 mb-10">
                <h2 className="lg:text-5xl text-3xl font-bold lg:max-w-md">Your next event, made possible by The Events Hub</h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-14">
                    <div>
                        <h3 className="font-bold text-xl mb-4 text-slate-800">Create Unforgettable Events</h3>
                        <p className="text-slate-700">Host how you want to on our all-encompassing event platform, offering limitless possibilities for planning, customizing, and attending events of every kind. Craft your own memorable events, reflecting your unique style and leaving a lasting impression on every guest.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-4 text-slate-800">Dive into Unforgettable Experiences</h3>
                        <p className="text-slate-700">Embark on a journey of excitement and connection, attending a diverse range of events that cater to your interests and passions, promising not just an experience but a gateway to new connections, opportunities, and shared moments.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;