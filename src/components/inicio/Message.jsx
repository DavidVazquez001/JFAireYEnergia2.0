import React from 'react';
import installation from '../../assets/inicio/message/installation.jpg';

const Message = () => {
    return (
        <div
            className="space-y-8 px-12 py-8 text-center text-white lg:px-48 lg:py-20"
            style={{
                backgroundImage: `url(${installation.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'multiply',
                backgroundColor: 'rgba(255, 223, 0, 0.6)',
            }}
        >
            <h2 className="text-4xl font-light italic md:text-6xl">
                La Calidad es Primero
            </h2>

            <p className="text-2xl md:text-3xl">
                “La calidad es primero porque cada detalle importa. En nuestra
                empresa, entendemos que el éxito de nuestros clientes depende de
                la fiabilidad de nuestros productos. Por eso, no solo vendemos
                soluciones de enfriamiento; entregamos confianza. Aseguramos que
                cada sistema cumpla con los más altos estándares, porque tu
                tranquilidad y la protección de tu infraestructura son nuestra
                mayor prioridad. Seguiremos trabajando con dedicación y mejora
                continua para mantener esta promesa.”
            </p>
        </div>
    );
};

export default Message;
