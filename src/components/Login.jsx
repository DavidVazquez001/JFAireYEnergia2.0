'use client';

import { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!onLogin(username, password)) {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-center text-2xl font-bold">
                    Iniciar Sesión
                </h2>
                {error && (
                    <p className="mb-4 text-center text-red-500">{error}</p>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="mb-2 block text-gray-700"
                            htmlFor="username"
                        >
                            Usuario
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="w-full rounded border border-gray-300 px-3 py-2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="mb-2 block text-gray-700"
                            htmlFor="password"
                        >
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full rounded border border-gray-300 px-3 py-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
