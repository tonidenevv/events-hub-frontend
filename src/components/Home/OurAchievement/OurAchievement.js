import PartyGirl from '../../../assets/PartyGirl.png'

const OurAchievement = () => {
    return (
        <div className='flex mt-20 bg-[#E9F8F3B2] items-center justify-center lg:p-20 p-6'>
            <div className='grid lg:grid-cols-4 grid-cols-1 lg:w-4/6'>
                <div className='lg:col-span-3'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-3xl font-bold'>Our <span className='text-[#20B486]'>Achievements</span></h2>
                        <p className='text-gray-600 text-lg'>Don't take our word for it, trust the stats!</p>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6 mt-10 lg:mt-16'>
                        <div className='grid grid-cols-2 lg:grid-cols-1 gap-10'>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 rounded-xl flex items-center justify-center bg-yellow-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className='font-bold text-xl'>100+</p>
                                    <p>Events</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 rounded-xl flex items-center justify-center bg-red-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className='font-bold text-xl'>100,000+</p>
                                    <p>Users</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 lg:grid-cols-1 gap-10'>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 rounded-xl flex items-center justify-center bg-blue-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className='font-bold text-xl'>∞</p>
                                    <p>Happiness</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 rounded-xl flex items-center justify-center bg-purple-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className='font-bold text-xl'>0</p>
                                    <p>Negativity</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'></div>
                    </div>
                </div>
                <div className='lg:col-span-1 md:order-last order-first'><img src={PartyGirl} alt="party girl" /></div>
            </div>
        </div>
    )
}

export default OurAchievement;