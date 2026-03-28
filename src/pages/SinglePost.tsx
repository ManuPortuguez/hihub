import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const SinglePostPage = lazy(
    () => import("@/features/single-post/SinglePostPage"),
);

export default function SinglePost() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Blog Single" subtitle="Blog Single" />
            <SuspenseWrapper>
                <ErrorBoundary name="SinglePostPage">
                    <SinglePostPage />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
