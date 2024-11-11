import PortadaProductos from '@/components/productos/PortadaProductos';
import ProductSelection from '@/components/productos/ProductSelection';
import React from 'react';

const Productos = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/images/fondo_blanco_4.jpg')",
                backgroundSize: 'cover',
            }}
        >
            <PortadaProductos />
            <ProductSelection />
        </div>
    );
};

export default Productos;
