import { Link } from "react-router-dom";
import StatBg2 from "@/images/stat-bg2.jpg";
import CounterUp from "@/components/elements/CounterUp";
import JarallaxSection from "@/components/elements/JarallaxSection";

export default function StatSec3() {
    return (
        <>
            {/* Stat Section Start */}
            <JarallaxSection className="stat-sec3 jarallax sec-padding" overlayOpacity={.2} speed={.4} imgSrc={StatBg2}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="stat-entries d-flex flex-wrap align-items-center bg-info round justify-content-between">
                                <div className="s-item">
                                    <h3 className="display-1 fw-bold">
                                        <span
                                            className="purecounter"
                                        > <CounterUp ending={98} /> </span> %
                                    </h3>
                                    <p>Faster Order Processing</p>
                                </div>
                                <div className="s-item">
                                    <h3 className="display-1 fw-bold">
                                        <span
                                            className="purecounter"
                                        ><CounterUp ending={97} /></span>
                                        %
                                    </h3>
                                    <p>Fulfillment Accuracy</p>
                                </div>
                                <div className="s-item">
                                    <h3 className="display-1 fw-bold">
                                        <span
                                            className="purecounter"
                                        >
                                            <CounterUp ending={300} />
                                        </span>
                                    </h3>
                                    <p>Orders Shipped Annually</p>
                                </div>
                                <div className="s-item">
                                    <Link
                                        to="/contact"
                                        className="btn btn-primary"
                                    >
                                        Contact Us
                                        <i className="fa fa-arrow-right"></i>
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </JarallaxSection>
            {/* Stat Section End */}
        </>
    );
}
