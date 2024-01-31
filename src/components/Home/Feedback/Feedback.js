import FeedbackCard from "./FeedbackCard/FeedbackCard";

const Feedback = () => {
    return (
        <div className="lg:p-20 p-6 flex flex-col items-center justify-center">
            <div className="lg:w-4/6 flex items-start justify-start">
                <div className="flex flex-col h-full w-full gap-3">
                    <h2 className="font-bold text-3xl mt-8 lg:mt-0">Student <span className="text-[#20B486]">Feedback</span></h2>
                    <p className="text-gray-600 text-lg">Don't believe us? See what our users have to say.</p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-5">
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
            </div>
        </div>
    )
}

export default Feedback;

// text-[#20B486]