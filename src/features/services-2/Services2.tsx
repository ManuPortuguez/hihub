import { Link } from 'react-router-dom';
import { services2Data } from '@/data/servicesData';

export default function Services2() {
    return (
        <>
            {/* Services Section Start */}
            <div className="services-sec bg-shade sec-padding">
                <div className="container">
                    <div className="row gy-4">
                        {services2Data.map((service) => (
                            <div key={service.id} className="col-lg-4">
                                <div className="service-card bg-white round">
                                    <div className="service-head d-flex gap-3 align-items-center">
                                        <img src={service.icon} alt="Icon" />
                                        <h3 className="display-4 m-0">
                                            <Link to={service.link}>{service.title}</Link>
                                        </h3>
                                    </div>
                                    <div className="service-thumb">
                                        <img className="img-fluid" src={service.thumbnailImage} alt={service.title} />
                                    </div>
                                    <p>{service.description}</p>
                                    <div className="service-footer border-top">
                                        <Link to={service.link} className="custom-btn">
                                            <span className="icon rounded-3">
                                                <i className="fa fa-arrow-right"></i>
                                            </span>
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Services Section End */}
        </>
    );
}