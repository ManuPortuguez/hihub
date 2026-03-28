import { Suspense } from "react";
import "../../css/elements.css";

// Skeleton Loading Component
const PageLoader = () => (
    <div className="page-loader-container">
        {/* Content Boxes */}
        <div className="page-loader-grid">
            {[1, 2].map((i) => (
                <div key={i} className="shimmer-effect shimmer-box" />
            ))}
        </div>
        <div className="shimmer-effect shimmer-line-large" />
        {/* Text Lines */}
        {[1, 2, 3, 4].map((i) => (
            <div
                key={i}
                className="shimmer-effect shimmer-line-small"
                style={{ width: i === 4 ? "60%" : "100%" }}
            />
        ))}
    </div>
);

// Wrapper component with Suspense
export default function SuspenseWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}
