'use client';

import { useState, useEffect } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Login from '@/components/Login';

const SESSION_DURATION = 2 * 60 * 60 * 1000;

export default function RootLayout({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authData = localStorage.getItem('authData');
        if (authData) {
            const { timestamp } = JSON.parse(authData);
            const isSessionValid = Date.now() - timestamp < SESSION_DURATION;

            if (isSessionValid) {
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem('authData');
            }
        }
    }, []);

    const handleLogin = (username, password) => {
        if (
            username === process.env.NEXT_PUBLIC_AUTH_USERNAME &&
            password === process.env.NEXT_PUBLIC_AUTH_PASSWORD
        ) {
            const authData = {
                timestamp: Date.now(),
                isValid: true,
            };
            localStorage.setItem('authData', JSON.stringify(authData));
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    if (!isAuthenticated) {
        return (
            <html lang="es">
                <body>
                    <Login onLogin={handleLogin} />
                </body>
            </html>
        );
    }

    return (
        <html lang="es">
            <body>
                <Navbar />
                <div className="pt-20">{children}</div>
                <Footer />
                {/* <NotFound /> */}
            </body>
        </html>
    );
}
