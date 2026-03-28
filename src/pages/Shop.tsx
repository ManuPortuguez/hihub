import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const ShopSection = lazy(() => import("@/features/shop/ShopSection"));

export default function Shop() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Shop" subtitle="Shop" />
            <SuspenseWrapper>
                <ErrorBoundary name="ShopSection">
                    <ShopSection />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
