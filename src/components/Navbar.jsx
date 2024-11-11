'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../assets/logo/JF_logo_white_no_background_no_text_icon.png';
import logoName from '../assets/logo/JF_text_no_background_simple.png';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className={`fixed z-50 w-full bg-jf-strong-green text-jf-white ${
                isOpen ? 'h-auto' : 'h-24'
            } transition-all duration-300`}
        >
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    {/* Aqui va el logo */}
                    <div className="flex flex-shrink-0 items-center justify-center text-center">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="JF Aire y Energía"
                                width={96} // Asegúrate de definir un valor correcto
                                height={50} // Asegúrate de definir un valor correcto
                                priority={true} // Usa true si es importante para el LCP
                                className="h-auto w-24" // Asegura que se mantenga el aspecto
                            />
                        </Link>
                        <Link href="/">
                            <Image
                                src={logoName}
                                alt="JF Aire y Energía"
                                className="h-8 w-auto md:h-12" // Asegura que se mantenga el aspecto
                            />
                        </Link>
                    </div>

                    {/* Menu para pantallas grandes */}
                    <div className="hidden space-x-8 text-2xl font-semibold md:flex">
                        <Link
                            href="/"
                            className="text-zinc-300 hover:text-zinc-500"
                        >
                            Inicio
                        </Link>
                        <Link
                            href="/productos"
                            className="text-zinc-300 hover:text-zinc-500"
                        >
                            Productos
                        </Link>
                        <Link
                            href="/contacto"
                            className="text-zinc-300 hover:text-zinc-500"
                        >
                            Contacto
                        </Link>
                    </div>

                    {/* Boton para el menu hamburguesa */}
                    <div className="flex items-center justify-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-zinc-300 hover:text-zinc-50 focus:outline-none"
                        >
                            {isOpen ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu para dispositivos pequeños  */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="space-y-6 pb-8 text-center text-2xl font-semibold">
                            <Link
                                href="/"
                                className="block text-zinc-300 hover:text-zinc-500"
                                onClick={() => setIsOpen(false)}
                            >
                                Inicio
                            </Link>

                            <Link
                                href="/productos"
                                className="block text-zinc-300 hover:text-zinc-500"
                                onClick={() => setIsOpen(false)}
                            >
                                Productos
                            </Link>

                            <Link
                                href="/contacto"
                                className="block text-zinc-300 hover:text-zinc-500"
                                onClick={() => setIsOpen(false)}
                            >
                                Contacto
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
