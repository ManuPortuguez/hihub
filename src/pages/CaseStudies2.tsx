import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const Services3 = lazy(() => import("@/features/case-studies-2/Services3"));

export default function CaseStudies2() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Case Study 2" subtitle="Case Study 2" />
            <SuspenseWrapper>
                <ErrorBoundary name="Services3">
                    <Services3 />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
