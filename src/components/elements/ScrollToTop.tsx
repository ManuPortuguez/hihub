import { useEffect, useState, useCallback, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function throttle<T extends (...args: unknown[]) => void>(
    fn: T,
    delay: number,
): (...args: Parameters<T>) => void {
    let last = 0;

    return (...args: Parameters<T>) => {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn(...args);
        }
    };
}

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const pathRef = useRef<SVGPathElement>(null);
    const pathLengthRef = useRef<number>(0);

    const location = useLocation();

    // Initialize path length
    useEffect(() => {
        if (pathRef.current) {
            const pathLength = pathRef.current.getTotalLength();
            pathLengthRef.current = pathLength;

            // Set initial stroke-dasharray and stroke-dashoffset
            pathRef.current.style.strokeDasharray = `${pathLength} ${pathLength}`;
            pathRef.current.style.strokeDashoffset = `${pathLength}`;
        }
    }, []);

    const updateProgress = useCallback(() => {
        if (!pathRef.current) return;

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        const drawLength = pathLengthRef.current * scrollPercent;
        const offset = pathLengthRef.current - drawLength;

        pathRef.current.style.strokeDashoffset = `${offset}`;
    }, []);

    const toggleVisibility = useCallback(() => {
        const threshold = 50;
        const shouldBeVisible = window.scrollY > threshold;
        setVisible(shouldBeVisible);
    }, []);

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [location.pathname]);

    useEffect(() => {
        // Handle scroll updates (progress animation only)
        const handleProgressUpdate = () => {
            updateProgress();
        };

        // Handle visibility check with throttle
        const handleVisibilityCheck = throttle(() => {
            toggleVisibility();
        }, 200);

        // Combined scroll handler
        const handleScroll = () => {
            handleProgressUpdate();
            handleVisibilityCheck();
        };

        // Add event listener
        window.addEventListener("scroll", handleScroll);

        // Set initial visibility state after mount (non-blocking)
        const timeoutId = setTimeout(() => {
            toggleVisibility();
            updateProgress();
        }, 0);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, [toggleVisibility, updateProgress]);

    const scrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            onClick={scrollToTop}
            className={`scroll-top ${visible ? "show" : ""}`}
            style={{ cursor: 'pointer' }}
        >
            <svg
                className="progress-circle svg-content"
                height="100%"
                viewBox="-1 -1 102 102"
                width="100%"
            >
                <path
                    ref={pathRef}
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                        transition: 'stroke-dashoffset 10ms linear'
                    }}
                />
            </svg>
        </div>
    );
};

export default ScrollToTop;