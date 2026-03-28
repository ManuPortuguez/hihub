import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const QuoteFeatures = lazy(() => import("@/features/quote/QuoteFeatures"));

export default function Quote() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Request Quote" subtitle="Request Quote" />
            <SuspenseWrapper>
                <ErrorBoundary name="QuoteFeatures">
                    <QuoteFeatures />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
