import Companies from "./Companies/Companies";
import EventPlatformDescription from "./EventPlatformDescription/EventPlatformDescription";
import Feedback from "./Feedback/Feedback";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import OurAchievement from "./OurAchievement/OurAchievement";
import SectionCTA from "./SectionCTA/SectionCTA";

const Home = () => {
    return (
        <>
            <Hero />
            <EventPlatformDescription />
            <Companies />
            <OurAchievement />
            <Feedback />
            <SectionCTA />
            <Footer />
        </>
    )
}

export default Home;