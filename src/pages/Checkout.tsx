import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const CheckoutSection = lazy(
    () => import("@/features/checkout/CheckoutSection"),
);

export default function Checkout() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Checkout" subtitle="Checkout" />
            <SuspenseWrapper>
                <ErrorBoundary name="CheckoutSection">
                    <CheckoutSection />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
