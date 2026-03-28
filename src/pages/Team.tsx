import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const TeamSec = lazy(() => import("@/features/team/TeamSec"));

export default function Team() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Our Team" subtitle="Our Team" />
            <SuspenseWrapper>
                <ErrorBoundary name="TeamSec">
                    <TeamSec />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
