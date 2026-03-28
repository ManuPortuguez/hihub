import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const ContactWidgets = lazy(() => import("@/features/contact/ContactWidgets"));
const ContactSec = lazy(() => import("@/features/contact/ContactSec"));

export default function Contact() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Contact Us" subtitle="Contact Us" />
            <SuspenseWrapper>
                <ErrorBoundary name="ContactWidgets">
                    <ContactWidgets />

                </ErrorBoundary>


                <ErrorBoundary name="ContactSec">
                    <ContactSec />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
