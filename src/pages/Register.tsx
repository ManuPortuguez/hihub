import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const SignupSec = lazy(() => import("@/features/register/SignupSec"));

export default function Register() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Register" subtitle="Register" />
            <SuspenseWrapper>
                <ErrorBoundary name="SignupSec">
                    <SignupSec />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
