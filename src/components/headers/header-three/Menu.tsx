import { Link } from "react-router-dom";
import Logo from "@/images/logo.svg";
import { useContext } from 'react';
import ProjectContext from '@/components/context/ProjectContext';
import MenuList from "@/components/MenuList";
import { useTranslation } from "react-i18next";

export default function Menu() {
    const { t } = useTranslation();
    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context Null");
    const { setIsSearch, isMobile, setIsMobile } = context;
    return (
        <>
            <div className="container ct-container">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="logo" className="img-fluid" />
                </Link>
                <button
                    onClick={() => setIsMobile(pre => !pre)}
                    className="navbar-toggler offcanvas-nav-btn"
                    type="button"
                    aria-label="Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="12"
                        fill="none"
                        viewBox="0 0 14 12"
                    >
                        <path
                            fill="#020e28"
                            d="M0 .75Q.063.063.75 0h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 1.437 0 .75m0 5Q.063 5.063.75 5h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 6.437 0 5.75m13.25 5.75H.75q-.687-.063-.75-.75.063-.687.75-.75h12.5q.687.063.75.75-.063.687-.75.75"
                        />
                    </svg>
                </button>
                <div className="nav-cta d-none d-md-flex order-lg-3">
                    <div className="d-flex align-items-center justify-content-between gap-4">
                        <Link
                            to="#"
                            className="icon-lg bg-light rounded-circle"
                            data-bs-toggle="offcanvas"
                            onClick={() => setIsSearch(pre => !pre)}
                            data-bs-target="#offcanvas-search"
                        >
                            <i className="fa fa-search"></i>
                        </Link>

                        <Link
                            to="/donation"
                            className="btn btn-primary btn-hover"
                        >

                            Free Quote <i className="fa fa-arrow-right"></i>
                            <span></span>
                        </Link>
                    </div>
                </div>
                <div className={`offcanvas offcanvas-start offcanvas-nav ${isMobile ? 'show' : ''}`}>
                    <div className="offcanvas-header">
                        <Link to="/" className="text-inverse">
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <button
                            onClick={() => setIsMobile(pre => !pre)}
                            type="button"
                            className="btn-close bg-primary"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body pt-0 align-items-center justify-content-between">
                        <MenuList />
                        
                        {/* Mobile CTA Section - Mirrors Desktop Features */}
                        <div className="mobile-cta-section d-lg-none mt-4 pt-4 border-top">
                            <div className="d-flex flex-column gap-3">
                                {/* Search Action */}
                                <button
                                    onClick={() => {
                                        setIsSearch(pre => !pre);
                                        setIsMobile(false);
                                    }}
                                    className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2 py-3"
                                >
                                    <i className="fa fa-search"></i>
                                    <span>Buscar</span>
                                </button>
                                
                                {/* Primary CTA */}
                                <Link 
                                    to="/donation"
                                    onClick={() => setIsMobile(false)}
                                    className="btn btn-primary btn-hover w-100 py-3 fs-6 fw-semibold text-center"
                                >
                                    {t('nav.freeQuote', 'Free Quote')} <i className="fa fa-arrow-right ms-2"></i>
                                    <span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
