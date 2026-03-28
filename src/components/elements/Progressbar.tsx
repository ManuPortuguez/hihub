import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface ProgressBarsProps {
    title: string;
    value: number;
}

const Progresbar: React.FC<ProgressBarsProps> = ({
    title = "",
    value = 80,
}) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = value;
            const duration = 1200; // total animation time in ms
            const frameRate = 20; // update every 20ms
            const increment = end / (duration / frameRate);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setProgress(Math.round(start));
            }, frameRate);

            return () => clearInterval(timer);
        }
    }, [inView, value]);

    return (
        <div className="progress" ref={ref}>
            <div className="meta">{title}</div>
            <div className="progress-bar" data-progress={`${progress}%`} style={{ width: `${progress}%` }} >
                <span>{progress}%</span>
            </div>
        </div>
    );
};

export default Progresbar;