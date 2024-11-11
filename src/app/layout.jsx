import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'JF Aire y Energía',
    description: 'JF Aire y Energía',
    icons: '/icon.png',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Navbar />

                <div className="pt-20">{children}</div>

                <Footer />
            </body>
        </html>
    );
}
