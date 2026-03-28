import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const ErrorSec = lazy(() => import("@/features/error404/ErrorSec"));

export default function Error404() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Error 404 Page" subtitle="404 error" />
            <SuspenseWrapper>
                <ErrorBoundary name="ErrorSec">
                    <ErrorSec />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
