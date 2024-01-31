import { Link } from "react-router-dom";

const SocialMediaCard = ({ logo, link }) => {
    return (
        <Link to={link} className="rounded-xl bg-[#E9F8F3B2] cursor-pointer hover:bg-[#d9fff5b2] flex items-center justify-center p-3 w-14 h-14">
            <img src={logo} alt="logo" />
        </Link>
    )
}

export default SocialMediaCard;
