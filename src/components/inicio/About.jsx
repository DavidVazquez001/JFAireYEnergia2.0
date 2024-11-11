import React from 'react';

const aboutUs = [
    {
        title: 'Misión',
        text: 'Proveer soluciones especializadas en aire acondicionado que protejan la infraestructura crítica de nuestros clientes, ofreciendo productos de alta calidad y eficiencia energética. Estamos comprometidos con la innovación, el servicio excepcional y la sostenibilidad.',
    },
    {
        title: 'Visión',
        text: 'Ser la empresa líder en soluciones de enfriamiento industrial y comercial en México y Latinoamérica, reconocida por nuestra tecnología avanzada, confiabilidad y respeto al medio ambiente.',
    },
    {
        title: 'Valores',
        text: [
            {
                title: 'Calidad',
                text: 'Nos esforzamos por ofrecer productos que superen las expectativas, garantizando la máxima protección y durabilidad.',
            },
            {
                title: 'Innovación',
                text: 'Adoptamos las últimas tecnologías para brindar soluciones de enfriamiento eficientes y sostenibles.',
            },
            {
                title: 'Compromiso',
                text: 'Estamos dedicados a cumplir nuestras promesas y asegurar la satisfacción total de nuestros clientes.',
            },
            {
                title: 'Sostenibilidad',
                text: 'Promovemos prácticas que cuiden nuestro entorno y minimicen el impacto ambiental.',
            },
            {
                title: 'Servicio',
                text: 'Valoramos cada relación y trabajamos para ofrecer atención personalizada y soporte continuo.',
            },
        ],
    },
];

const About = () => {
    return (
        <div className="bg-neutral-200 px-12 py-12 lg:px-24 lg:py-24">
            <div className="text-center">
                <p className="text-xl md:text-2xl">
                    Todo sobre JF Aire y Energía
                </p>
                <h2 className="mb-12 mt-4 text-4xl font-light md:text-6xl">
                    Nuestra historia
                </h2>
            </div>

            <div className="space-y-16 px-12 text-center lg:px-24">
                {aboutUs.map((about, index) => (
                    <div key={index} className="space-y-4">
                        <h2 className="text-2xl font-medium md:text-4xl">
                            {about.title}
                        </h2>

                        {Array.isArray(about.text) ? (
                            <div className="space-y-8">
                                {about.text.map((value, subIndex) => (
                                    <div key={subIndex} className="space-y-2">
                                        <h3 className="text-2xl italic md:text-3xl">
                                            {value.title}
                                        </h3>
                                        <p className="text-xl md:text-2xl">
                                            {value.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-xl md:text-2xl">{about.text}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
