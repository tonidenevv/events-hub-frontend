import CompanyOne from '../../../assets/CompanyOne.png';
import CompanyTwo from '../../../assets/CompanyTwo.png';
import CompanyThree from '../../../assets/CompanyThree.png';
import CompanyFour from '../../../assets/CompanyFour.png';

const Companies = () => {
    return (
        <div className='flex flex-col mt-28 items-center justify-center'>
            <div className='font-bold text-[#536E96] lg:text-4xl text-2xl px-0.5 p-2 text-center'>Trusted by companies all around the world.</div>
            <div className='text-[#536E96] lg:text-lg text-base p-2 text-center'>Companies worldwide host and attend our events. We're waiting for you too!</div>
            <div className='flex lg:flex-row flex-col p-5 gap-10'>
                <img src={CompanyOne} alt="company" />
                <img src={CompanyTwo} alt="company" />
                <img src={CompanyThree} alt="company" />
                <img src={CompanyFour} alt="company" />
            </div>
        </div>
    )
}

export default Companies;