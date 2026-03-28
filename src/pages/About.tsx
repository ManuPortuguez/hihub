import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const AboutDetails = lazy(() => import("@/features/about/AboutDetails"));
const ProcessSec = lazy(() => import("@/features/home-one/ProcessSec"));
const AboutSec3 = lazy(() => import("@/features/home-three/AboutSec3"));
const OperationSec = lazy(() => import("@/features/home-two/OperationSec"));
const TeamSec = lazy(() => import("@/features/home-two/TeamSec"));

export default function About() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="About Us" subtitle="About Us" />
            <SuspenseWrapper>
                <ErrorBoundary name="AboutDetails">
                    <AboutDetails />

                </ErrorBoundary>


                <ErrorBoundary name="ProcessSec">
                    <ProcessSec />

                </ErrorBoundary>


                <ErrorBoundary name="AboutSec3">
                    <AboutSec3 />

                </ErrorBoundary>


                <ErrorBoundary name="OperationSec">
                    <OperationSec />

                </ErrorBoundary>


                <ErrorBoundary name="TeamSec">
                    <TeamSec />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
