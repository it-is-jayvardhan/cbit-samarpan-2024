import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import "../App.css"

const ImageCarousel = () => {
    const carouselStyle = {
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
        <Swiper {...swiperParams}  style={{ paddingTop: '60px',paddingBottom:"60px" }} >
           {/* {images.map((image) => (
    <SwiperSlide key={image.url} lazy>
        <img
            src={image.url}
            alt={`snap ${image.url}`}
            style={carouselStyle}
        />
    </SwiperSlide> */}
{/* ))} */}
        <SwiperSlide className='swiper-slide'>
            <img src='https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/samarpan%2012-05-23%20pics/img1.jpeg?raw=true' alt='image1' style={carouselStyle}/>
            </SwiperSlide>
            <SwiperSlide>
            <img src='https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/samarpan%2012-05-23%20pics/img2.jpeg?raw=true' alt='image2' style={carouselStyle}/>
            </SwiperSlide>
            <SwiperSlide>
            <img src='https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/samarpan%2012-05-23%20pics/img3.jpeg?raw=true' alt='image3' style={carouselStyle}/>
            </SwiperSlide>
            <SwiperSlide>
            <img src='https://github.com/AMBITION-GROUP-OF-ORG/cbit-samarpan-2023/blob/main/samarpan%2012-05-23%20pics/img4.jpeg?raw=true' alt='image4' style={carouselStyle}/>
            </SwiperSlide>
        </Swiper>
    );
};

export default ImageCarousel;
