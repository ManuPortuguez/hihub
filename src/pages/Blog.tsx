import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const BlogPage = lazy(() => import("@/features/blog/BlogPage"));

export default function Blog() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Blog Grid" subtitle="Blog Grid" />
            <SuspenseWrapper>
                <ErrorBoundary name="BlogPage">
                    <BlogPage />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
