import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex justify-center flex-col">
            <div className="text-3xl mx-1 font-semibold text-center mt-20">Page not found. It seems we can't find what you are looking for.</div>
            <div className="text-center mt-8 font-semibold hover:text-blue-700 text-blue-500 text-2xl inline-block"><Link to="/">Go to the home page?</Link></div>
        </div>
    )
}

export default NotFound;