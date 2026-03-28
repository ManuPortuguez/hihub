import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@/components/headers/header-three/Menu";

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
            <header ref={headerRef} className="header header-3">
                <div className="sticky-height"></div>

                <div className="header-wrapper">
                    <div className="header-top bg-primary">
                        <div className="container ct-container">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="header-infos">
                                    <ul className="d-none d-xl-flex flex-wrap align-items-center gap-4">
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="17"
                                                fill="none"
                                                viewBox="0 0 17 17"
                                            >
                                                <path
                                                    fill="#fff"
                                                    d="M15.156 10.406q.47.22.688.656.219.438.125.938l-.688 2.969a1.35 1.35 0 0 1-.5.781q-.374.313-.875.313-3.874-.032-7-1.907a13.7 13.7 0 0 1-5-5Q.031 6.032 0 2.156q0-.5.313-.875a1.35 1.35 0 0 1 .78-.5l2.97-.687Q4.563 0 5 .219t.656.687l1.375 3.188q.345.969-.406 1.656l-1.25 1.031a9.54 9.54 0 0 0 3.906 3.907l1.031-1.25q.688-.75 1.657-.407zm-.844 4.344L15 11.781a.45.45 0 0 0-.25-.469l-3.187-1.374q-.281-.094-.47.124l-1.312 1.594q-.249.282-.594.125A10.3 10.3 0 0 1 6.345 9.72 10.3 10.3 0 0 1 4.28 6.875q-.156-.344.125-.594L6 4.97q.22-.188.125-.469L4.75 1.313q-.125-.25-.375-.25h-.094l-2.968.687q-.282.094-.313.406.03 3.594 1.75 6.5a13.46 13.46 0 0 0 4.656 4.656q2.906 1.72 6.5 1.75.313-.03.406-.312"
                                                />
                                            </svg>
                                            <a href="tel:8208383727">
                                                Phone: +92 8208 383 727
                                            </a>
                                        </li>
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="17"
                                                fill="none"
                                                viewBox="0 0 16 12"
                                            >
                                                <path
                                                    fill="#fff"
                                                    d="M0 2Q.03 1.157.594.594 1.157.032 2 0h12q.844.03 1.406.594Q15.97 1.157 16 2v8q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 10.843 0 10zm1 0v1.25l6.125 4.469q.875.594 1.75 0L15 3.25V2a.97.97 0 0 0-.281-.719A.97.97 0 0 0 14 1H1.969q-.406 0-.688.281A1.1 1.1 0 0 0 .97 2zm0 2.5V10q0 .438.281.719A.97.97 0 0 0 2 11h12a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 10V4.5L9.469 8.531q-.656.5-1.469.5a2.36 2.36 0 0 1-1.469-.5z"
                                                />
                                            </svg>
                                            <a href="mailto:info@transhub.com">
                                                Email: info@transhub.com
                                            </a>
                                        </li>
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="16"
                                                fill="none"
                                                viewBox="0 0 12 16"
                                            >
                                                <path
                                                    fill="#fff"
                                                    d="M8.5 6q-.03 1.062-.719 1.781Q7.062 8.47 6 8.5q-1.062-.03-1.781-.719Q3.53 7.062 3.5 6q.03-1.062.719-1.781Q4.938 3.53 6 3.5q1.062.03 1.781.719Q8.47 4.938 8.5 6M6 7.5a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 7.5 6a1.63 1.63 0 0 0-.437-1.062A1.63 1.63 0 0 0 6 4.5a1.63 1.63 0 0 0-1.062.438A1.63 1.63 0 0 0 4.5 6q.03.624.438 1.063.436.405 1.062.437M12 6q-.063 1.406-1 3.25a31 31 0 0 1-2.187 3.563q-1.219 1.75-2.063 2.78-.312.375-.75.376-.438 0-.75-.375a56 56 0 0 1-2.094-2.781A28.4 28.4 0 0 1 1 9.25Q.063 7.406 0 6q.063-2.562 1.75-4.25Q3.438.063 6 0q2.562.063 4.25 1.75Q11.937 3.438 12 6M6 1q-2.125.063-3.531 1.469Q1.063 3.874 1 6q0 .75.531 1.969a21 21 0 0 0 1.344 2.593A33 33 0 0 0 4.531 13 56 56 0 0 0 6 14.938 56 56 0 0 0 7.469 13a33 33 0 0 0 1.656-2.437q.813-1.344 1.344-2.594Q11 6.749 11 6q-.062-2.125-1.469-3.531Q8.126 1.063 6 1"
                                                />
                                            </svg>
                                            Location
                                            <span>
                                                123 Street, New York, USA
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="topbar-text dropdown d-xl-none">
                                        <a
                                            className="topbar-link dropdown-toggle show"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="true"
                                        >
                                            Useful links
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="17"
                                                    height="17"
                                                    fill="none"
                                                    viewBox="0 0 17 17"
                                                >
                                                    <path
                                                        fill="#fd5523"
                                                        d="M15.156 10.406q.47.22.688.656.219.438.125.938l-.688 2.969a1.35 1.35 0 0 1-.5.781q-.374.313-.875.313-3.874-.032-7-1.907a13.7 13.7 0 0 1-5-5Q.031 6.032 0 2.156q0-.5.313-.875a1.35 1.35 0 0 1 .78-.5l2.97-.687Q4.563 0 5 .219t.656.687l1.375 3.188q.345.969-.406 1.656l-1.25 1.031a9.54 9.54 0 0 0 3.906 3.907l1.031-1.25q.688-.75 1.657-.407zm-.844 4.344L15 11.781a.45.45 0 0 0-.25-.469l-3.187-1.374q-.281-.094-.47.124l-1.312 1.594q-.249.282-.594.125A10.3 10.3 0 0 1 6.345 9.72 10.3 10.3 0 0 1 4.28 6.875q-.156-.344.125-.594L6 4.97q.22-.188.125-.469L4.75 1.313q-.125-.25-.375-.25h-.094l-2.968.687q-.282.094-.313.406.03 3.594 1.75 6.5a13.46 13.46 0 0 0 4.656 4.656q2.906 1.72 6.5 1.75.313-.03.406-.312"
                                                    />
                                                </svg>
                                                <a href="tel:8208383727">
                                                    
                                                    Phone: +92 8208 383 727
                                                </a>
                                            </li>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="none"
                                                    viewBox="0 0 16 12"
                                                >
                                                    <path
                                                        fill="#fd5523"
                                                        d="M0 2Q.03 1.157.594.594 1.157.032 2 0h12q.844.03 1.406.594Q15.97 1.157 16 2v8q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 10.843 0 10zm1 0v1.25l6.125 4.469q.875.594 1.75 0L15 3.25V2a.97.97 0 0 0-.281-.719A.97.97 0 0 0 14 1H1.969q-.406 0-.688.281A1.1 1.1 0 0 0 .97 2zm0 2.5V10q0 .438.281.719A.97.97 0 0 0 2 11h12a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 10V4.5L9.469 8.531q-.656.5-1.469.5a2.36 2.36 0 0 1-1.469-.5z"
                                                    />
                                                </svg>
                                                <a href="mailto:info@transhub.com">
                                                    Email: info@transhub.com
                                                </a>
                                            </li>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="12"
                                                    height="16"
                                                    fill="none"
                                                    viewBox="0 0 12 16"
                                                >
                                                    <path
                                                        fill="#fd5523"
                                                        d="M8.5 6q-.03 1.062-.719 1.781Q7.062 8.47 6 8.5q-1.062-.03-1.781-.719Q3.53 7.062 3.5 6q.03-1.062.719-1.781Q4.938 3.53 6 3.5q1.062.03 1.781.719Q8.47 4.938 8.5 6M6 7.5a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 7.5 6a1.63 1.63 0 0 0-.437-1.062A1.63 1.63 0 0 0 6 4.5a1.63 1.63 0 0 0-1.062.438A1.63 1.63 0 0 0 4.5 6q.03.624.438 1.063.436.405 1.062.437M12 6q-.063 1.406-1 3.25a31 31 0 0 1-2.187 3.563q-1.219 1.75-2.063 2.78-.312.375-.75.376-.438 0-.75-.375a56 56 0 0 1-2.094-2.781A28.4 28.4 0 0 1 1 9.25Q.063 7.406 0 6q.063-2.562 1.75-4.25Q3.438.063 6 0q2.562.063 4.25 1.75Q11.937 3.438 12 6M6 1q-2.125.063-3.531 1.469Q1.063 3.874 1 6q0 .75.531 1.969a21 21 0 0 0 1.344 2.593A33 33 0 0 0 4.531 13 56 56 0 0 0 6 14.938 56 56 0 0 0 7.469 13a33 33 0 0 0 1.656-2.437q.813-1.344 1.344-2.594Q11 6.749 11 6q-.062-2.125-1.469-3.531Q8.126 1.063 6 1"
                                                    />
                                                </svg>
                                                <span>
                                                    123 Street, New York, USA
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="social-share null ms-4">
                                    <span className="text-info d-none d-sm-inline">
                                        Follow Us:
                                    </span>
                                    <Link to="#">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-instagram"></i>
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
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
