'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// import beach from '../../assets/inicio/carrusel/beach.jpg';
// import snow from '../../assets/inicio/carrusel/snow.jpg';
// import woodenHouse from '../../assets/inicio/carrusel/woodenHouse.jpg';

const slides = [
    {
        image: 'https://res.cloudinary.com/dx1r7whjf/image/upload/v1731006056/jf-aire-y-energia/productos/fodjqetcre5di58zgz6h.jpg',
        title: 'Innovación en cada respiro.',
        text: 'Descubre nuestros sistemas avanzados de enfriamiento para mantener tus equipos críticos a la temperatura ideal.',
    },
    {
        image: 'https://res.cloudinary.com/dx1r7whjf/image/upload/v1731006037/jf-aire-y-energia/productos/svmtru2ahkh4vcb7qftz.jpg',
        title: 'Enfriamiento eficiente, rendimiento garantizado.',
        text: 'Aire acondicionado especializado para proteger tu infraestructura las 24 horas, todos los días.',
    },
    {
        image: 'https://res.cloudinary.com/dx1r7whjf/image/upload/v1731006037/jf-aire-y-energia/productos/rbfntu3qmb0gwn9nn7qt.jpg',
        title: 'Soluciones de enfriamiento hechas para durar.',
        text: 'Con tecnología de vanguardia, cuidamos de tus activos y del medio ambiente.',
    },
];

const Carrusel = () => {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="h-[50vh] lg:h-[75vh]"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="relative h-full w-full">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="h-full w-full object-cover brightness-50"
                        />

                        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-12 text-center text-jf-white md:px-24">
                            <h2 className="text-4xl font-semibold md:text-6xl">
                                {slide.title}
                            </h2>
                            <p className="text-xl md:text-3xl">{slide.text}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carrusel;
