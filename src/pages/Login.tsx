import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const AccountSec = lazy(() => import("@/features/login/AccountSec"));

export default function Login() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Login" subtitle="Login" />
            <SuspenseWrapper>
                <ErrorBoundary name="AccountSec">
                    <AccountSec />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
