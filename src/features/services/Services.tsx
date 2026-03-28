import { Link } from 'react-router-dom';
import { servicesData } from '@/data/servicesData';

export default function Services() {
    return (
        <>
            {/* Services Section Start */}
            <div className="services-sec bg-shade sec-padding">
                <div className="container">
                    <div className="row gy-4">
                        {servicesData.map((service) => (
                            <div key={service.id} className="col-lg-4">
                                <div className="service-card2 round bg-info fadeInUp" data-delay={service.delay}>
                                    <div className="serv-thumb" style={{ backgroundImage: `url(${service.backgroundImage})` }}>
                                        <span className="icon round-2">
                                            <img src={service.icon} alt={service.title} />
                                        </span>
                                    </div>
                                    <h3 className="display-4">
                                        <Link to={service.link}>{service.title}</Link>
                                    </h3>
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