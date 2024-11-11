import Link from 'next/link';
import React from 'react';

const BannerContact = () => {
    return (
        <div className="bg-jf-yellow w-full text-center">
            <div className="flex flex-wrap px-12 py-8 lg:px-48 lg:py-20">
                <div className="space-y-6 md:w-2/3 lg:space-y-12">
                    <h2 className="text-2xl font-semibold md:text-4xl">
                        ¿Tienes alguna pregunta?
                    </h2>
                    <p className="text-lg md:text-2xl">
                        Contáctanos y encuentra la solución perfecta para tus
                        necesidades.
                    </p>
                </div>
                <div className="flex h-full w-full items-center justify-center pt-12 text-center md:w-1/3">
                    <Link href="/contacto">
                        <button className="bg-jf-light-green rounded-xl px-6 py-3 text-2xl font-semibold text-zinc-300 hover:text-zinc-500">
                            Contacto
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerContact;
