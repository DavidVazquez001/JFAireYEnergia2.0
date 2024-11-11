import Image from 'next/image';
import React from 'react';

import logoNameSimple from '../assets/logo/logoNameSimple.png';

const Footer = () => {
    return (
        <div className="flex w-full flex-wrap justify-between space-y-8 bg-gray-900 px-16 py-8 text-gray-400 lg:flex-nowrap lg:space-y-0 lg:px-36 lg:py-12">
            <div className="flex w-full items-center justify-center lg:w-auto lg:flex-none lg:justify-start">
                <Image
                    src={logoNameSimple}
                    alt="logoName"
                    className="h-24 w-auto"
                />
            </div>

            <div className="flex w-full items-center justify-center lg:w-1/3">
                <p>
                    Empresa mexicana especializada en soluciones de enfriamiento
                    outdoor para telecomunicaciones, infraestructura eléctrica y
                    seguridad.
                </p>
            </div>

            <div className="w-full lg:w-1/3">
                <p>Teléfono: +52 1 5534185439</p>
                <p>Email: contacto@jfaireyenergia.com</p>
                <p>Dirección: CDMX, Coyoacán, C.P. 04230</p>
            </div>
        </div>
    );
};

export default Footer;
