import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const WhyUs3 = lazy(() => import("@/features/home-three/WhyUs3"));
const ServicesSec = lazy(() => import("@/features/services/Services"));
const FaqSec = lazy(() => import("@/features/faq/FaqSec"));

export default function Services2() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Services 2" subtitle="Services 2" />
            <SuspenseWrapper>
                <ErrorBoundary name="ServicesSec">
                    <ServicesSec />

                </ErrorBoundary>


                <ErrorBoundary name="WhyUs3">
                    <WhyUs3 />

                </ErrorBoundary>


                <ErrorBoundary name="FaqSec">
                    <FaqSec />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
