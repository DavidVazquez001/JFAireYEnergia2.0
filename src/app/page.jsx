import About from '@/components/inicio/About';
import BannerContact from '@/components/inicio/BannerContact';
import Carrusel from '@/components/inicio/Carrusel';
import Industries from '@/components/inicio/Industries';
import InfoBanner from '@/components/inicio/InfoBanner';
import Message from '@/components/inicio/Message';
import SimpleTabs from '@/components/SimpleTabs';

export default function Home() {
    return (
        <div>
            {/* <SimpleTabs /> */}
            {/* JF Aire y Energía */}
            <Carrusel />
            <Industries />
            <Message />
            <About />
            {/* <BannerContact /> */}
            <InfoBanner />
        </div>
    );
}
