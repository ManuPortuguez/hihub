import SEO from "@/components/elements/SEO";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import Hero3 from "@/features/home-three/Hero3";
import Services3 from "@/features/home-three/Services3";
import AboutSec3 from "@/features/home-three/AboutSec3";
import StatSec3 from "@/features/home-three/StatSec3";
import ProcessSec3 from "@/features/home-three/ProcessSec3";
import SolutionSec from "@/features/home-three/SolutionSec";
import VideoSec3 from "@/features/home-three/VideoSec3";
import RecentWork from "@/features/home-three/RecentWork";
import WhyUs3 from "@/features/home-three/WhyUs3";
import ReviewSec3 from "@/features/home-three/ReviewSec3";
import Blog3 from "@/features/home-three/Blog3";
import BrandsSec3 from "@/features/home-three/BrandsSec3";
import TextSlideSec from "@/features/home-two/TextSlideSec";

export default function HomeThree() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <ErrorBoundary name="home-three Page">
                <Hero3 />

                <Services3 />

                <TextSlideSec />

                <AboutSec3 />

                <StatSec3 />

                <BrandsSec3 />

                <ProcessSec3 />

                <SolutionSec />

                <VideoSec3 />

                <RecentWork />

                <WhyUs3 />

                <ReviewSec3 />

                <Blog3 />
            </ErrorBoundary>
        </>
    );
}
