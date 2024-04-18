import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const ImageCarousel = ({ images }) => {
    const imageStyle = {
        width: '350px',
        height: '300px',
    };

    const swiperParams = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 70,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: true,
        modules: [EffectCoverflow, Pagination, Autoplay],
        autoplay: { delay: 500, disableOnInteraction: false },
        speed: 1500,
        lazy: true,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView:1,
                spaceBetween: 10,
                centeredSlides: true,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: true,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
            },
        },
    };

    return (
        <Swiper {...swiperParams}  style={{ paddingTop: '60px' }}>
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={image.url}
                        alt={`Image ${index + 1}`}
                        style={imageStyle}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageCarousel;
