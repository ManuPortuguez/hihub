import { Link } from 'react-router-dom';
import { useState } from 'react';
import Booking from '@/images/booking.png';
import Swal from 'sweetalert2';
import CustomFormSelect from '@/components/elements/CustomFormSelect';

const goodsOptions = [
    { value: 'Heavy Goods', label: 'Heavy Goods' },
    { value: 'Light Goods', label: 'Light Goods' },
    { value: 'Standard', label: 'Standard' },
    { value: 'Others', label: 'Others' }
];

export default function TrackingFormSec() {
    const [activeTab, setActiveTab] = useState('request-quote');
    const [selectedGoods, setSelectedGoods] = useState<string>("");
    const [formData, setFormData] = useState({
        freightType: 'air',
        fullName: '',
        email: '',
        phone: '',
        goods: '1',
        dimensions: '',
        shipDate: ''
    });
    const [trackingNumber, setTrackingNumber] = useState('');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'radio') {
            setFormData(prev => ({
                ...prev,
                freightType: value
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.fullName || !formData.email || !formData.phone) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please fill in all required fields",
                showConfirmButton: true
            });
            return;
        }

        // Show success message
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Quote Request Submitted!",
            text: "We will contact you shortly.",
            showConfirmButton: false,
            timer: 2000
        });

        // Reset form
        setFormData({
            freightType: 'air',
            fullName: '',
            email: '',
            phone: '',
            goods: '1',
            dimensions: '',
            shipDate: ''
        });
    };

    const handleTrackingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!trackingNumber) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter a tracking number",
                showConfirmButton: true
            });
            return;
        }

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Shipment is Ongoing!",
            text: `Tracking: ${trackingNumber}`,
            showConfirmButton: false,
            timer: 2000
        });

        setTrackingNumber('');
    };

    return (
        <>
            <div className="tracking-form-sec">
                <div className="container">
                    <div className="row trackign-form-wrapper">
                        <div className="col-lg-12">
                            <div className="tracking-tabs">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === 'request-quote' ? 'active' : ''}`}
                                            id="request-quote-tab"
                                            type="button"
                                            role="tab"
                                            aria-controls="request-quote-tab-pane"
                                            aria-selected={activeTab === 'request-quote'}
                                            onClick={() => handleTabChange('request-quote')}
                                        >
                                            Request Quote
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === 'shipment' ? 'active' : ''}`}
                                            id="shipment-tab"
                                            type="button"
                                            role="tab"
                                            aria-controls="shipment-tab-pane"
                                            aria-selected={activeTab === 'shipment'}
                                            onClick={() => handleTabChange('shipment')}
                                        >
                                            Tracking Shipment
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            {/* Event Tabs End */}
                            <div id="myTabContent" className="tab-content">
                                <div
                                    className={`tab-pane fade ${activeTab === 'request-quote' ? 'show active' : ''}`}
                                    id="request-quote-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="request-quote-tab"
                                >
                                    <form className="request-form" onSubmit={handleQuoteSubmit}>
                                        <h3 className="h5">Select Your Services Type*</h3>
                                        <div className="d-flex gap-3 mt-3">
                                            <div className="form-group d-flex gap-1">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="freightType"
                                                    id="air"
                                                    value="air"
                                                    checked={formData.freightType === 'air'}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="air">Air Freight</label>
                                            </div>
                                            <div className="form-group d-flex gap-1">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="freightType"
                                                    id="ocean"
                                                    value="ocean"
                                                    checked={formData.freightType === 'ocean'}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="ocean">Ocean Freight</label>
                                            </div>
                                            <div className="form-group d-flex gap-1">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="freightType"
                                                    id="land"
                                                    value="land"
                                                    checked={formData.freightType === 'land'}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="land">Land Freight</label>
                                            </div>
                                        </div>
                                        <div className="row form-inner">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="fname">Full Name*</label>
                                                    <input
                                                        id="fname"
                                                        name="fullName"
                                                        type="text"
                                                        placeholder="John Doe"
                                                        value={formData.fullName}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="remail">Email*</label>
                                                    <input
                                                        id="remail"
                                                        name="email"
                                                        type="email"
                                                        placeholder="info@transhub.com"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="phone">Phone No*</label>
                                                    <input
                                                        id="phone"
                                                        name="phone"
                                                        type="text"
                                                        placeholder="+986- 4459 **** ****"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="goods">Type Of Goods</label>
                                                    <CustomFormSelect
                                                        optionArray={goodsOptions}
                                                        value={selectedGoods}
                                                        onChange={(value) => setSelectedGoods(value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="Dimensions">Dimensions</label>
                                                    <input
                                                        id="Dimensions"
                                                        name="dimensions"
                                                        type="text"
                                                        placeholder="Length x Width x Height x Unit"
                                                        value={formData.dimensions}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="ship_date">Date of Shipment</label>
                                                    <input
                                                        type="date"
                                                        id="ship_date"
                                                        name="shipDate"
                                                        value={formData.shipDate}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mt-3 mt-lg-5">
                                                <div className="d-sm-flex justify-content-between align-items-center contact-submit">
                                                    <button type="submit" className="btn btn-primary mb-4 mb-sm-0">
                                                        Request A Quote <i className="fa fa-arrow-right"></i><span></span>
                                                    </button>
                                                    <p className="m-0">Note: Face any trouble? We will contact you as soon as possible ||
                                                        <Link to="/contact" className="text-primary"> Contact Our Expert</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div
                                    className={`tab-pane fade ${activeTab === 'shipment' ? 'show active' : ''}`}
                                    id="shipment-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="shipment-tab"
                                >
                                    <div className="position-relative">
                                        <div className="shipment-content">
                                            <h3 className="display-4 mb-4">Tracking Shipment</h3>
                                            <p>Shipment tracking is the backbone of modern logistics. Today's customers expect real-time
                                                visibility—knowing exactly where their cargo is, when it will arrive, and whether any
                                                delays might occur.</p>
                                            <ul className="check">
                                                <li>24/7 real-time location updates</li>
                                                <li>Interactive tracking dashboard</li>
                                                <li>Enter your tracking ID and Verify</li>
                                            </ul>
                                            {/* Shipment tracking form */}
                                            <form className="tracking-form my-5 d-flex gap-3" onSubmit={handleTrackingSubmit}>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your tracking number"
                                                    value={trackingNumber}
                                                    onChange={(e) => setTrackingNumber(e.target.value)}
                                                    required
                                                />
                                                <button className="btn btn-primary" type="submit">
                                                    Track Now <i className="fa fa-arrow-right"></i><span></span>
                                                </button>
                                            </form>
                                            <p>Note: Face any trouble? We will contact you as soon as possible ||
                                                <Link to="/contact" className="text-primary"> Contact Our Expert</Link>
                                            </p>
                                        </div>
                                        <div className="img-end">
                                            <img className="img-fluid" src={Booking} alt="Booking" />
                                        </div>
                                    </div>
                                </div>
                            </div> {/* Tab Content End */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}