import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const SinglePostPage = lazy(
    () => import("@/features/single-post-2/SinglePostPage"),
);

export default function SinglePost2() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Blog Single 2" subtitle="Blog Single 2" />
            <SuspenseWrapper>
                <ErrorBoundary name="SinglePostPage">
                    <SinglePostPage />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
