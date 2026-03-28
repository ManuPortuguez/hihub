import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const TrackingPage = lazy(() => import("@/features/tracking/TrackingPage"));

export default function Tracking() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Tracking Parcels" subtitle="Tracking Parcels" />
            <SuspenseWrapper>
                <ErrorBoundary name="TrackingPage">
                    <TrackingPage />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
