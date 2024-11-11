import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosPhonePortrait } from 'react-icons/io';

const InfoBanner = () => {
    return (
        <div className="flex h-auto w-full flex-wrap justify-between bg-black px-12 py-8 text-white lg:px-48 lg:py-20">
            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 text-6xl">
                    <IoLocationOutline />
                </div>
                <div className="text-jf-yellow col-span-2 text-2xl md:text-4xl">
                    Dirección
                </div>
                <div className="col-span-2 row-span-2 text-lg md:text-2xl">
                    CDMX, Coyoacán, C.P. 04230
                </div>
            </div>

            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 text-6xl">
                    <AiOutlineMail />
                </div>
                <div className="text-jf-yellow col-span-2 text-2xl md:text-4xl">
                    Email
                </div>
                <div className="col-span-2 row-span-2 text-lg md:text-2xl">
                    contacto@jfaireyenergia.com
                </div>
            </div>

            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 text-6xl">
                    <IoIosPhonePortrait />
                </div>
                <div className="text-jf-yellow col-span-2 text-2xl md:text-4xl">
                    Teléfono
                </div>
                <div className="col-span-2 row-span-2 text-lg md:text-2xl">
                    +52 1 5534185439
                </div>
            </div>
        </div>
    );
};

export default InfoBanner;
