import SEO from '@/components/elements/SEO';
import ErrorBoundary from '@/components/elements/ErrorBoundary';
import SliderSection from '@/features/home-one/SliderSection';
import AboutSection from '@/features/home-one/AboutSection';
import ServicesSec from '@/features/home-one/ServicesSec';
import ChooseSec from '@/features/home-one/ChooseSec';
import StatSec from '@/features/home-one/StatSec';
import BrandsSec from '@/features/home-one/BrandsSec';
import TrackingCtaSec from '@/features/home-one/TrackingCtaSec';



export default function HomeOne() {
   return (
      <>
         <SEO title='HiHub Global Technologies' />
         <ErrorBoundary name='home-one Page' >
            <SliderSection />

            <AboutSection />

            <ServicesSec />

            <ChooseSec />

            <StatSec />

            <BrandsSec />

            <TrackingCtaSec />
         </ErrorBoundary>
      </>

   );
}
