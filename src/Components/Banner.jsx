// src/components/Banner.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
 
const slides = [
    {
        image: '/1.jpg',
        title: "Welcome to TowerTrack",
        subtitle: "Your one-stop building management solution.",
    },
    {
        image: '/2.jpg',
        title: "Modern Apartments",
        subtitle: "Comfortable, clean, and affordable living spaces.",
    },
    {
        image: '/3.jpg',
        title: "Easy Agreements",
        subtitle: "Digitally manage apartment agreements in seconds.",
    },
    {
        image: '/4.jpg',
        title: "Rent Payment Tracking",
        subtitle: "Track your monthly rent with ease and transparency.",
    },
    {
        image: '/5.jpg',
        title: "Exclusive Member Access",
        subtitle: "Join the community and access premium features.",
    },
];

const Banner = () => {
    return (
        <div className="relative w-full h-[70vh]">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover brightness-75"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-4">
                                <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
                                <p className="mt-2 text-lg md:text-xl max-w-xl">{slide.subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
