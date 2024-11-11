import React from 'react';
import Image from 'next/image';
import { Card } from 'flowbite-react';

import dataCenter from '../../assets/inicio/industries/dataCenter.jpg';
import miningSite from '../../assets/inicio/industries/miningSite.jpg';
import telecommunicationTower from '../../assets/inicio/industries/telecommunicationTower.jpg';

const industries = [
    {
        image: dataCenter,
        title: 'Centros de datos',
        text: 'Protege tus servidores y asegura un rendimiento constante con soluciones de temperatura controlada.',
    },
    {
        image: miningSite,
        title: 'Industria de la minería',
        text: 'Mantén los equipos de control y sistemas eléctricos en sitios mineros funcionando de manera eficiente, incluso en condiciones climáticas extremas.',
    },
    {
        image: telecommunicationTower,
        title: 'Telecomunicaciones',
        text: 'Mantén tu infraestructura de comunicación siempre operativa con nuestro sistema de enfriamiento especializado.',
    },
];

const Industries = () => {
    return (
        <div className="bg-white px-12 py-12 lg:px-24 lg:py-24">
            <div className="flex flex-wrap justify-center">
                {industries.map((industry, index) => (
                    <div
                        key={index}
                        className="w-full space-y-6 p-4 sm:w-1/2 lg:w-1/3"
                    >
                        <Card className="border-none shadow-none">
                            <div className="space-y-6">
                                <Image
                                    src={industry.image}
                                    alt={industry.title}
                                    width={600}
                                    height={250}
                                    className="h-64 object-cover"
                                />
                                <h5 className="text-xl font-semibold md:text-3xl">
                                    {industry.title}
                                </h5>
                                <p className="text-lg md:text-xl">
                                    {industry.text}
                                </p>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Industries;
