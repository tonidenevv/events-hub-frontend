import SocialMediaCard from "./SocialMediaCard/SocialMediaCard";
import facebook from '../../../assets/facebook.png';
import instagram from '../../../assets/instagram.png';
import linkedin from '../../../assets/linkedin.png';


const Footer = () => {
    return (
        <div className="p-6 flex items-center justify-center">
            <div className="lg:w-4/6 lg:gap-44 grid items-baseline lg:grid-cols-2">
                <div className="flex flex-col lg:h-96 h-64 mt-10 items-start text-sm gap-4 justify-center">
                    <h2 className="text-[#20B486] font-bold text-2xl">The Events Hub</h2>
                    <p className="font-bold text-2xl">Contact Us</p>
                    <div className="text-gray-700 flex flex-col gap-4">
                        <p>Call: +123 456 789</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rerum.</p>
                        <p className="font-semibold">Email: example@example.com</p>
                    </div>
                    <div className="flex gap-8 mt-2">
                        <SocialMediaCard logo={facebook} link={'https://www.facebook.com/'} />
                        <SocialMediaCard logo={instagram} link={'https://www.instagram.com/'} />
                        <SocialMediaCard logo={linkedin} link={'https://www.linkedin.com/'} />
                    </div>
                </div>
                <div className="flex gap-5 flex-col h-96 items-start justify-center">
                    <h2 className="font-bold text-2xl">Subscribe</h2>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis.</p>
                    <input className="w-full bg-gray-200 rounded-xl px-2 py-3.5" placeholder="Email here" type="text" name="emailInput" id="emailInput" />
                    <button className='bg-[#20B486] mt-4 p-3 hover:bg-[#2c896b] ease-in-out duration-200 text-white font-semibold rounded-xl w-40 text-center'>Subscribe Now</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;