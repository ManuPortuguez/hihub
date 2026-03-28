import SingleService from "@/images/single-service.jpg";
import ServG1 from "@/images/serv-g1.jpg";
import ServG2 from "@/images/serv-g2.jpg";

export default function BrandsSec() {
    return (
        <>
            {/* Services Section Start */}
            <div className="single-service bg-shade sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-thumb">
                                <img
                                    src={SingleService}
                                    alt="Service"
                                    className="img-fluid round"
                                />
                            </div>
                            <h2 className="display-3">
                                International Transport Services
                            </h2>
                            <p>
                                Our Ocean Freight Services offer comprehensive
                                solutions for all your shipping needs, ensuring
                                your cargo is transported efficiently and safely
                                across the seas, giving you peace of mind and
                                the best results for your business.With our
                                Ocean Freight Services, we handle all aspects of
                                your sea shipping needs, documentation to
                                delivery,With our Ocean Freight Services, we
                                handle all aspects of your sea shipping needs.
                            </p>
                            <p>
                                With our Ocean Freight Services, we handle all
                                aspects of your sea shipping needs, from
                                documentation to delivery, ensuring your goods
                                arrive on time and in excellent condition,
                                allowing you to focus on your core business
                                operations.helping you navigate the complexities
                                of international trade.
                            </p>
                            <h3 className="display-3">
                                Why Choose Our Services
                            </h3>
                            <p>
                                Our Ocean Freight Services offer comprehensive
                                solutions for all your shipping needs, ensuring
                                your cargo is transported efficiently and safely
                                across the seas, giving you peace of mind and
                                the best results for your business.With our
                                Ocean Freight Services, we handle all aspects of
                                your sea shipping needs, documentation to
                            </p>
                            <div className="d-sm-flex  list-single">
                                <ul className="ct-list">
                                    <li>
                                        Ocean freight offers predictable transit
                                        times and schedules.
                                    </li>
                                    <li>
                                        It remains one of the most economical
                                        ways to transport.
                                    </li>
                                    <li>
                                        Despite its scale, modern shipping
                                        companies are increasingly.
                                    </li>
                                </ul>
                                <ul className="ct-list">
                                    <li>
                                        Sky freight offers predictable transit
                                        times and schedules.
                                    </li>
                                    <li>
                                        It remains one of the most economical
                                        ways to transport.
                                    </li>
                                    <li>
                                        We are doing scale, modern shipping
                                        companies are increasingly.
                                    </li>
                                </ul>
                            </div>
                            <div className="d-sm-flex gap-5 gallery-single mb-5 pt-2">
                                <img src={ServG1} className="img-fluid round" />
                                <img src={ServG2} className="img-fluid round" />
                            </div>
                            <p>
                                Our Ocean Freight Services offer comprehensive
                                solutions for all your shipping needs, ensuring
                                your cargo is transported efficiently and safely
                                across the seas, giving you peace of mind and
                                the best results for your business.With our
                                Ocean Freight Services, we handle all aspects of
                                your sea shipping needs, documentation to
                                delivery,With our Ocean Freight Services, we
                                handle all aspects of your sea shipping needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services Section End */}
        </>
    );
}
