import { Link } from "react-router-dom";
import eventImage from '../../assets/event-image.jpg';

const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: `url("${eventImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: '70% 80%',
    }
    return (
        <>
            <div className="text-white" style={backgroundImageStyle}>
                <div className="bg-gradient-to-r from-black">
                    <div className="lg:w-1/2 w-11/12 lg:ml-10 ml-4 grid grid-cols-1 gap-4">
                        <h2 className="font-semibold uppercase mt-8 text-xl">The home to all events</h2>
                        <h1 className="font-black text-7xl">Host or attend events, all around the world</h1>
                        <p className="text-lg text-gray-200 font-semibold">All events worldwide in just one place. Host and find events through the comfort of your home and enjoy socializing with like-minded people.</p>
                        <Link to="/events">
                            <button className="w-32 mb-14 mt-2 rounded-lg font-semibold bg-gradient-to-r from-red-500 to-orange-600 py-3 px-2 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-500 ease-in-out duration-75">View Events</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="lg:ml-10 ml-4 mt-10">
                <h2 className="lg:text-5xl text-4xl font-bold lg:max-w-md">Your next event, made possible by The Events Hub</h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-14">
                    <div>
                        <h3 className="font-bold text-xl mb-4 text-slate-800">Create Unforgettable Events</h3>
                        <p className="text-slate-700 mb-4">Host how you want to on our all-encompassing event platform, offering limitless possibilities for planning, customizing, and attending events of every kind. Craft your own memorable events, reflecting your unique style and leaving a lasting impression on every guest.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-4 text-slate-800">Dive into Unforgettable Experiences</h3>
                        <p className="text-slate-700 mb-4">Embark on a journey of excitement and connection, attending a diverse range of events that cater to your interests and passions, promising not just an experience but a gateway to new connections, opportunities, and shared moments.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;