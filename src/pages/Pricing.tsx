import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const PricingSec = lazy(() => import("@/features/pricing/PricingSec"));

export default function Pricing() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Pricing" subtitle="Pricing" />
            <SuspenseWrapper>
                <ErrorBoundary name="PricingSec">
                    <PricingSec />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
