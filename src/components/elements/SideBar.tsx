import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import ProjectContext from "../context/ProjectContext";
import { Link } from "react-router-dom";
import Logo from "@/images/clients/logo-hihub-white.png";
const SideBar: React.FC = () => {
    const { t } = useTranslation();
    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context Null");
    const { isSidebar, setIsSidebar } = context;
    return (
        <>
            {/* Canvas Menu Start */}
            <div className={`canvas-menu d-flex flex-column ${isSidebar ? 'open' : ''} `}>
                <div className="d-flex justify-content-between w-100 mb-4">
                    {/* Logo Here */}
                    <div className="logo">
                        <img src={Logo} alt="HiHub Global Logo" style={{ height: '50px', width: 'auto' }} />
                    </div>
                    {/* Close Button */}
                    <button type="button" onClick={() => setIsSidebar((pre) => !pre)} className="canvas-close" aria-label="Close">
                        <svg width="33" height="34" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.19141 9.80762L27.5762 28.1924" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M9.19141 28.1924L27.5762 9.80761" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <p>{t('sidebar.description')}</p>
                {/* Vertical Menu Start*/}

                <div className="mt-3">
                    <h5>{t('sidebar.servicesTitle')}</h5>
                    <nav className="mt-4">
                        <ul className="vertical-menu">
                            <li><Link to="/single-service">{t('sidebar.airFreight')}</Link></li>
                            <li><Link to="/single-service">{t('sidebar.warehousing')}</Link></li>
                            <li><Link to="/single-service">{t('sidebar.seaFreight')}</Link></li>
                            <li><Link to="/single-service">{t('sidebar.roadFreight')}</Link></li>
                            <li><Link to="/single-service">{t('sidebar.customsBrokerage')}</Link></li>
                        </ul>
                    </nav>
                </div>

                <Link to="/quote" className="btn btn-primary mt-5">{t('sidebar.getQuote')} <i className="fa fa-arrow-right"></i><span></span></Link>
            </div>
            {/* Canvas Menu End */}
        </>
    );
};

export default SideBar;
