import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const BlogPage = lazy(() => import("@/features/blog-2/BlogPage"));

export default function Blog2() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Blog Style 2" subtitle="Blog 2" />
            <SuspenseWrapper>
                <ErrorBoundary name="BlogPage">
                    <BlogPage />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
