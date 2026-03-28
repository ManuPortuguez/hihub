import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const TeamDetailsPage = lazy(
    () => import("@/features/single-team/TeamDetailsPage"),
);

export default function SingleTeam() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Team Details" subtitle="Team Details" />
            <SuspenseWrapper>
                <ErrorBoundary name="TeamDetailsPage">
                    <TeamDetailsPage />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
