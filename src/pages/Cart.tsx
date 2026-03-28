import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const CartSection = lazy(() => import("@/features/cart/CartSection"));

export default function Cart() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Cart" subtitle="Cart" />
            <SuspenseWrapper>
                <ErrorBoundary name="CartSection">
                    <CartSection />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
