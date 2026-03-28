import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const FaqSec = lazy(() => import("@/features/faq/FaqSec"));

export default function Faq() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Faq" subtitle="Faq" />
            <SuspenseWrapper>
                <ErrorBoundary name="FaqSec">
                    <FaqSec />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
