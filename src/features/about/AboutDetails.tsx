import { Link } from "react-router-dom";
import AboutD from "@/images/about-d.jpg";
import Time from "@/images/icons/time.svg";
import Location from "@/images/icons/location.svg";
import Employee from "@/images/icons/employee.svg";
import Revenue from "@/images/icons/revenue.svg";
import CounterUp from "@/components/elements/CounterUp";

export default function AboutDetails() {
    return (
        <>
            {/* About Section Start */}
            <section className="about-details sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-thumb me-lg-4">
                                <img className="img-fluid" src={AboutD} />
                                <h2 className="display-2">
                                    Digital & Trusted Transport Logistic Company
                                </h2>
                                <Link to="#" className="btn btn-primary">
                                    Request a Quote!
                                    <i className="fa fa-arrow-right"></i>
                                    <span></span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="row gy-4 abs-info-wrap">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="abs-info">
                                        <h3 className="display-5">
                                            Years Of Experience
                                        </h3>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <img src={Time} alt="About" />
                                            <span
                                                className="purecounter display-1"
                                            >
                                              <CounterUp ending={25}/> Y
                                            </span>
                                        </div>
                                        <p>
                                            With over four decades of experience
                                            providing
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="abs-info">
                                        <h3 className="display-5">
                                            Global Locations
                                        </h3>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <img src={Location} alt="About" />
                                            <span
                                                className="purecounter display-1"
                                            >
                                               <CounterUp ending={88}/>
                                            </span>
                                        </div>
                                        <p>
                                            With over four decades of experience
                                            providing
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="abs-info">
                                        <h3 className="display-5">
                                            Total Employee
                                        </h3>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <img src={Employee} alt="About" />
                                            <span
                                                className="purecounter display-1"
                                            >
                                                <CounterUp ending={15}/> K
                                            </span>
                                        </div>
                                        <p>
                                            With over four decades of experience
                                            providing
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="abs-info">
                                        <h3 className="display-5">
                                            Annual Revenue
                                        </h3>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <img src={Revenue} alt="About" />
                                            <h4
                                                className="display-1 purecounter"
                                            >
                                               <CounterUp ending={30}/> M
                                            </h4>
                                        </div>
                                        <p>
                                            With over four decades of experience
                                            providing
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section End */}
        </>
    );
}
