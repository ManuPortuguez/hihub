import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const CaseDetailsPage = lazy(
    () => import("@/features/single-casestudy/CaseDetailsPage"),
);

export default function SingleCasestudy() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader
                title="Case Study Details"
                subtitle="Case Study Details"
            />
            <SuspenseWrapper>
                <ErrorBoundary name="CaseDetailsPage">
                    <CaseDetailsPage />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
