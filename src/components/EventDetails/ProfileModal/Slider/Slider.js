import { Navigation, A11y, EffectCoverflow } from 'swiper/modules';

import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ events, handleCloseModal }) => {

    const navigate = useNavigate();

    const handleEventClick = (eventId) => {
        handleCloseModal('close');
        navigate(`/events/${eventId}`);
    }

    return (
        <Swiper
            effect='coverflow'
            className='w-full h-56 mt-3'
            modules={[Navigation, A11y, EffectCoverflow]}
            coverflowEffect={{
                rotate: 25,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            spaceBetween={15}
            slidesPerView={3}

            navigation
        >
            {events.map((x) => (
                <SwiperSlide key={x._id}>
                    <img onClick={() => handleEventClick(x._id)} className='w-50 h-48 cursor-pointer hover:brightness-75' src={x.imageUrl} alt="event" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;