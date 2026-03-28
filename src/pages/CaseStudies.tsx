import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const ProjectSec = lazy(() => import("@/features/case-studies/ProjectSec"));

export default function CaseStudies() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Case Study" subtitle="Case Study" />
            <SuspenseWrapper>
                <ErrorBoundary name="ProjectSec">
                    <ProjectSec />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
