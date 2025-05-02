import React from 'react';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-600">404</h1>
                <h2 className="mt-4 text-2xl font-semibold">
                    Página no encontrada
                </h2>
                <p className="mt-2 text-gray-600">
                    Lo sentimos, la página que estás buscando no existe o ha
                    sido movida.
                </p>
            </div>
        </div>
    );
}
