import { lazy } from "react";
import SEO from "@/components/elements/SEO";
import PageHeader from "@/components/PageHeader";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
const ProductDetails = lazy(
    () => import("@/features/single-product/ProductDetails"),
);
const MainProductDetails = lazy(
    () => import("@/features/single-product/MainProductDetails"),
);

export default function SingleProduct() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <PageHeader title="Single Product" subtitle="Single Product" />
            <SuspenseWrapper>
                <ErrorBoundary name="MainProductDetails">
                    <MainProductDetails />

                </ErrorBoundary>


                <ErrorBoundary name="ProductDetails">
                    <ProductDetails />

                </ErrorBoundary>
            </SuspenseWrapper>
        </>
    );
}
