import Companies from "./Companies/Companies";
import EventPlatformDescription from "./EventPlatformDescription/EventPlatformDescription";
import Hero from "./Hero/Hero";
import OurAchievement from "./OurAchievement/OurAchievement";

const Home = () => {
    return (
        <>
            <Hero />
            <EventPlatformDescription />
            <Companies />
            <OurAchievement />
        </>
    )
}

export default Home;