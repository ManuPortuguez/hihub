import { useEffect, useRef, useState } from "react";
import Menu from "@/components/headers/header-one/Menu";

export default function Header() {
    const [isStick, setIsSticky] = useState<boolean>(false);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const headerHeight = headerRef.current.offsetHeight;
                if (window.scrollY > headerHeight) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header ref={headerRef} className="header header-default">
                <div className="sticky-height"></div>
                <div className="header-wrapper">
                    {/* Navigation Menu Start */}
                    <div className={`header-nav-wrapper header-sticky ${isStick ? 'scroll-on' : ''}`}>
                        <nav className="navbar navbar-expand-xl">
                            <Menu />
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
