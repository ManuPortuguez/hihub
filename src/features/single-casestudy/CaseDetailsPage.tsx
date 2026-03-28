import { Link } from "react-router-dom";
import SinglePt from "@/images/single-pt.jpg";
import CaseVideo from "@/images/case-video.jpg";

export default function CaseDetailsPage() {
    return (
        <>
            {/* Portfolio Details Section Start */}
            <section className="case-details-page sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 pe-lg-4">
                            <article className="single-case">
                                <div className="pt-thumb">
                                    <img
                                        className="img-fluid round"
                                        src={SinglePt}
                                        alt="Case Study"
                                    />
                                </div>
                                <h3 className="display-3">
                                    Air Freight Services
                                </h3>
                                <p>
                                    Our Ocean Freight Services offer
                                    comprehensive solutions for all your
                                    shipping needs, ensuring your cargo is
                                    transported efficiently and safely across
                                    the seas, giving you peace of mind and the
                                    best results for your business.With our
                                    Ocean Freight Services, we handle all
                                    aspects of your sea shipping needs,
                                    documentation to delivery,With our Ocean
                                    Freight Services, we handle all aspects of
                                    your sea shipping needs.
                                </p>
                                <p>
                                    With our Ocean Freight Services, we handle
                                    all aspects of your sea shipping needs, from
                                    documentation to delivery, ensuring your
                                    goods arrive on time and in excellent
                                    condition, allowing you to focus on your
                                    core business operations.helping you
                                    navigate the complexities of international
                                    trade.
                                </p>
                                <h3 className="display-3">Project details</h3>
                                <p>
                                    With our Ocean Freight Services, we handle
                                    all aspects of your sea shipping needs, from
                                    documentation to delivery, ensuring your
                                    goods arrive on time and in excellent
                                    condition, allowing you to focus on your
                                    core business operations.helping you
                                    navigate the complexities of international
                                    trade.
                                </p>
                                <div className="d-sm-flex justify-content-between align-items-center my-5">
                                    <div className="case-video position-relative">
                                        <img
                                            className="round img-fluid"
                                            src={CaseVideo}
                                            alt="Video"
                                        />
                                        <a
                                            className="play-btn bg-primary rounded-circle text-info icon-lg"
                                            data-fancybox="video-gallery"
                                            href="https://www.youtube.com/watch?v=wQMx7wc4jh8"
                                        >
                                            <span>
                                                <i className="fa fa-play"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="case-feature">
                                        <h4>Transigo Around the World</h4>
                                        <p>
                                            Three core values define the spirit
                                            of our culture
                                        </p>
                                        <ul className="ct-list">
                                            <li>
                                                Ocean freight offers predictable
                                                transit times.
                                            </li>
                                            <li>
                                                It remains one of the most
                                                economical.
                                            </li>
                                            <li>
                                                Despite its scale, modern
                                                shipping companies
                                            </li>
                                            <li>
                                                We are all about quality
                                                transport company
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    Freight forwarders often offer consolidated
                                    cargo services, which combine smaller
                                    shipments from multiple={true} companies
                                    into full containers for specific
                                    destinations. This offers cost advantages
                                    similar to FCL but without needing a full
                                    container yourself.
                                </p>
                                <p>
                                    This is a cost-effective option for smaller
                                    shipments. Your goods are consolidated with
                                    other shippers' cargo to fill a container.
                                    This can take longer as it involves
                                    additional han
                                </p>
                            </article>
                        </div>
                        {/* Article  End */}
                        <div className="col-lg-4">
                            <aside className="sidebar case-sidebar">
                                <div className="widget">
                                    <h3 className="widget-title">
                                        Project Information
                                    </h3>
                                    <div className="project-info">
                                        <div className="single-pi d-flex align-items-center gap-3 bg-info border">
                                            <span className="icon bg-dark text-info rounded-circle">
                                                <i className="fa fa-user"></i>
                                            </span>
                                            <div className="pi-inner">
                                                <h6>Client:</h6>
                                                <span>MSK Logistics</span>
                                            </div>
                                        </div>
                                        {/* single pi end */}
                                        <div className="single-pi d-flex align-items-center gap-3 bg-info border">
                                            <span className="icon bg-dark text-info rounded-circle">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </span>
                                            <div className="pi-inner">
                                                <h6>Location:</h6>
                                                <span>
                                                    4832 Max Street,Stamford
                                                </span>
                                            </div>
                                        </div>
                                        {/* single pi end */}
                                        <div className="single-pi d-flex align-items-center gap-3 bg-info border">
                                            <span className="icon bg-dark text-info rounded-circle">
                                                <i className="fa-regular fa-calendar-days"></i>
                                            </span>
                                            <div className="pi-inner">
                                                <h6>Project Date:</h6>
                                                <span>10 August, 2024</span>
                                            </div>
                                        </div>
                                        {/* single pi end */}
                                        <div className="single-pi d-flex align-items-center gap-3 bg-info border">
                                            <span className="icon bg-dark text-info rounded-circle">
                                                <i className="fa fa-layer-group"></i>
                                            </span>
                                            <div className="pi-inner">
                                                <h6>Catagory:</h6>
                                                <span>MKS Logistics</span>
                                            </div>
                                        </div>
                                        {/* single pi end */}
                                        <div className="single-pi d-flex align-items-center gap-3 bg-info border">
                                            <span className="icon bg-dark text-info rounded-circle">
                                                <i className="fa fa-dollar-sign"></i>
                                            </span>
                                            <div className="pi-inner">
                                                <h6>Cost:</h6>
                                                <span>125, 2000, 500</span>
                                            </div>
                                        </div>
                                        {/* single pi end */}
                                    </div>
                                </div>
                                {/* Widget End */}
                                <div className="widget">
                                    <h3 className="widget-title">
                                        Contact Info
                                    </h3>
                                    <div className="social-contact">
                                        <p>
                                            <i className="me-2 fa fa-location-dot"></i>
                                            1234 King Street, Australia
                                        </p>
                                        <p>
                                            <i className="me-2 fa fa-phone"></i>
                                            <a href="tel://1-800-915-6270">
                                                1-800-915-6270
                                            </a>
                                        </p>
                                        <p>
                                            <i className="me-2 fa fa-envelope-open"></i>
                                            <a href="mailto://consulpro@mail.com">
                                                consulpro@mail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="widget broucher-widget">
                                    <h3 className="widget-title">Brochures</h3>

                                    <Link
                                        to="#"
                                        className="btn btn-primary w-100"
                                    >
                                        
                                        Download Doc
                                        <i className="fa fa-download"></i>
                                    </Link>
                                    <Link
                                        to="#"
                                        className="btn btn-outline w-100"
                                    >
                                        Company Profile
                                        <i className="fa fa-download"></i>
                                    </Link>
                                </div>
                            </aside>
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
            </section>
            {/* Portfolio Details Section End */}
        </>
    );
}
