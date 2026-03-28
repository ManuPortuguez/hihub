import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const BrandsSec = lazy(() => import("@/features/home-one/BrandsSec"));
const BrandsSecMain = lazy(() => import("@/features/single-service/BrandsSec"));
const FaqSec = lazy(() => import("@/features/faq/FaqSec"));

export default function SingleService() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Single Service" subtitle="Single Service" />
            <SuspenseWrapper>
                <ErrorBoundary name="BrandsSecMain">
                    <BrandsSecMain />

                </ErrorBoundary>


                <ErrorBoundary name="BrandsSec">
                    <BrandsSec />

                </ErrorBoundary>


                <ErrorBoundary name="FaqSec">
                    <FaqSec />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
