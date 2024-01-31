import { Link } from 'react-router-dom';
import poolparty from '../../../assets/poolparty.png';
const SectionCTA = () => {
    return (
        <div className="bg-[#E9F8F3B2] flex items-center justify-center mt-10 pb-24 lg:p-20 p-6">
            <div className="lg:w-4/6 flex lg:flex-row flex-col gap-14 lg:gap-5">
                <div className="flex items-center justify-center"><img src={poolparty} alt="pool guy" /></div>
                <div className="flex flex-col gap-4 justify-center">
                    <h2 className='text-2xl font-bold'>Join <span className='text-[#20B486]'>The World's Largest</span> Events Hosting Platform Today</h2>
                    <p className=''>Start hosting and attending by registering for free</p>
                    <Link to="/register" className='bg-[#20B486] mt-4 p-3 hover:bg-[#2c896b] ease-in-out duration-200 text-white font-semibold rounded-xl w-52 text-center'>Sign Up For Free</Link>
                </div>
            </div>
        </div>
    )
}

export default SectionCTA;