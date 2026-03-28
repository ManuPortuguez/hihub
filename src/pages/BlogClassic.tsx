import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const BlogStandardSec = lazy(
    () => import("@/features/blog-classic/BlogStandardSec"),
);

export default function BlogClassic() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Blog Classic" subtitle="Blog Classic" />
            <SuspenseWrapper>
                <ErrorBoundary name="BlogStandardSec">
                    <BlogStandardSec />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
