'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .send(
                'service_6zn7e0b',
                'template_nrjl1qs',
                formData,
                'pxoOTcL0KxPKEGurj',
            )
            .then(
                (response) => {
                    setFormData({ from_name: '', from_email: '', message: '' });
                    setShowSuccessModal(true);
                },
                (err) => {
                    setShowErrorModal(true);
                },
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const closeErrorModal = () => {
        setShowErrorModal(false);
    };

    return (
        <div
            className="flex min-h-screen flex-col justify-center py-12"
            style={{
                backgroundImage: "url('/images/fondo_blanco_1.jpg')",
                backgroundSize: 'cover',
            }}
        >
            <div className="container mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg lg:p-12">
                <h3 className="mb-8 text-center text-3xl font-bold text-gray-800">
                    Contáctanos
                </h3>

                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Formulario de contacto */}
                    <div className="rounded-lg bg-jf-blue p-6 text-white shadow-md lg:w-1/2 lg:p-8">
                        <p className="mb-4 text-lg font-medium">
                            Completa el formulario para ponerte en contacto
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block font-semibold"
                                >
                                    Nombre:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="from_name"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    className="focus:ring-jf-lima mt-1 w-full rounded-lg bg-gray-100 p-3 text-gray-800 focus:outline-none focus:ring-2"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block font-semibold"
                                >
                                    Correo electrónico:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="from_email"
                                    value={formData.from_email}
                                    onChange={handleChange}
                                    className="focus:ring-jf-lima mt-1 w-full rounded-lg bg-gray-100 p-3 text-gray-800 focus:outline-none focus:ring-2"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block font-semibold"
                                >
                                    Mensaje:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="focus:ring-jf-lima mt-1 w-full rounded-lg bg-gray-100 p-3 text-gray-800 focus:outline-none focus:ring-2"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`w-full rounded-lg border border-white bg-jf-light-green py-3 text-lg font-semibold text-white transition-all duration-300 ${
                                    isSubmitting
                                        ? 'cursor-not-allowed bg-opacity-70'
                                        : 'hover:bg-jf-strong-green'
                                }`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? 'Enviando...'
                                    : 'Enviar Mensaje'}
                            </button>
                        </form>
                    </div>

                    {/* Información de contacto */}
                    <div className="mt-12 flex flex-col justify-center rounded-lg bg-gray-100 p-6 shadow-md lg:mt-0 lg:w-1/2 lg:p-8">
                        <p className="mb-4 text-lg font-semibold text-gray-700">
                            Encuéntranos en:
                        </p>
                        <ul className="space-y-4 text-gray-600">
                            <li>
                                <span className="font-semibold">Teléfono:</span>{' '}
                                +52 1 5534185439
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Correo electrónico:
                                </span>{' '}
                                <a
                                    href="mailto:contacto@jfaireyenergia.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    contacto@jfaireyenergia.com
                                </a>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Dirección:
                                </span>{' '}
                                CDMX, Coyoacán, C.P. 04230
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Modal de éxito */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="transform rounded-lg bg-white p-8 shadow-lg transition-transform duration-300">
                        <h3 className="mb-2 text-lg font-semibold text-jf-strong-green">
                            ¡Mensaje enviado con éxito!
                        </h3>
                        <p className="mb-4 text-gray-700">
                            Gracias por contactarnos. Nos pondremos en contacto
                            contigo pronto.
                        </p>
                        <button
                            className="rounded-lg bg-jf-light-green px-4 py-2 font-semibold text-white transition duration-300 hover:bg-jf-strong-green"
                            onClick={() => setShowSuccessModal(false)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal de error */}
            {showErrorModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="transform rounded-lg bg-white p-8 shadow-lg transition-transform duration-300">
                        <h3 className="mb-2 text-lg font-semibold text-red-700">
                            Error al enviar el mensaje
                        </h3>
                        <p className="mb-4 text-gray-700">
                            Lo sentimos, ha ocurrido un problema. Por favor
                            intenta nuevamente.
                        </p>
                        <button
                            className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-red-700"
                            onClick={closeErrorModal}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
