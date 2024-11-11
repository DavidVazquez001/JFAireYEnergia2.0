import React from 'react';
import Image from 'next/image';

import fabric from '../../assets/productos/fabric.jpg';

const PortadaProductos = () => {
    return (
        // <div className="h-[30vh] lg:h-[50vh]">
        <div className="h-[35vh] lg:h-[60vh]">
            <div className="relative h-full w-full">
                <Image
                    src={fabric}
                    alt="products"
                    fill
                    className="h-full w-full object-cover object-center brightness-50"
                />
            </div>
        </div>
    );
};

export default PortadaProductos;
