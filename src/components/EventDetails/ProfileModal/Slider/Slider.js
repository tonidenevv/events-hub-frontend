import { Navigation, A11y, EffectCoverflow } from 'swiper/modules';

import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import shouldHideOverflow from '../../../../helpers/shouldHideOverflow';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ events, handleCloseProfileModal }) => {

    const navigate = useNavigate();

    const handleEventClick = (eventId) => {
        handleCloseProfileModal('close');
        shouldHideOverflow(false);
        navigate(`/events/${eventId}`);
    }

    return (
        <Swiper
            effect='coverflow'
            className='w-full h-56 mt-3'
            modules={[Navigation, A11y, EffectCoverflow]}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 20,
                modifier: 1,
                slideShadows: false,
            }}
            spaceBetween={15}
            slidesPerView={3}

            navigation
        >
            {events.map((x) => (
                <SwiperSlide key={x._id}>
                    <img onClick={() => handleEventClick(x._id)} className='w-64 rounded-xl h-36 object-cover lg:h-48 cursor-pointer hover:brightness-75' src={x.imageUrl} alt="event" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;