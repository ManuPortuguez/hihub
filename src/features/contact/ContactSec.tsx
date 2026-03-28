import TextAnimation from "@/components/elements/TextAnimation";
import { useState } from "react";
import formBg from "@/images/form-bg2.jpg";
import Swal from "sweetalert2";
import CustomFormSelect from "@/components/elements/CustomFormSelect";

const freightTypeOptions = [
    { value: 'Frieght Sky', label: 'Frieght Sky' },
    { value: 'Frieght Ship', label: 'Frieght Ship' },
    { value: 'Frieght Road', label: 'Frieght Road' },
    { value: 'Frieght Sky', label: 'Frieght Sky' }
];

const loadOptions = [
    { value: 'Light Load', label: 'Light Load' },
    { value: 'Regular Load', label: 'Regular Load' },
    { value: 'Over Load', label: 'Over Load' }
];

export default function ContactSec() {
    const [selectedFreightType, setSelectedFreightType] = useState<string>("");
    const [selectedLoad, setSelectedLoad] = useState<string>("");
    const [activeTab, setActiveTab] = useState('hongkong');
    const [isLoading, setIsLoading] = useState(false);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const handleSubmitChat = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Extract form values
        const Name = formData.get("name") as string;
        const Email = formData.get("email") as string;
        const Phone = formData.get("phone") as string;
        const Message = formData.get("message") as string;

        // Validate all fields are filled
        if (Name && Email && Message && Phone) {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsLoading(false);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your message sent successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        }
    };
    return (
        <>
            <section className="contact-sec sec-padding">
                <div className="container">
                    <div className="sec-intro">
                        <span className="sub-title fadeInUp">
                            <TextAnimation animationStyle="style1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="18"
                                    fill="none"
                                    viewBox="0 0 30 18"
                                >
                                    <path
                                        fill="#fd5523"
                                        d="M8.125 15.429h-2.5a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188h2.5c.166 0 .325.068.442.188a.65.65 0 0 1 0 .91.62.62 0 0 1-.442.188m20.313 0h-1.563a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188h1.044l.842-4.618c-.011-2.364-1.973-4.382-4.386-4.382h-4.104l-1.989 9h3.593c.166 0 .325.068.442.188a.653.653 0 0 1 0 .91.62.62 0 0 1-.442.188H17.5a.61.61 0 0 1-.488-.242.65.65 0 0 1-.122-.543L19.162 4.36a.65.65 0 0 1 .22-.361.6.6 0 0 1 .39-.14h4.603C27.476 3.857 30 6.452 30 9.642l-.949 5.261a.65.65 0 0 1-.214.377.6.6 0 0 1-.4.148"
                                    />
                                    <path
                                        fill="#fd5523"
                                        d="M24.375 18c-1.722 0-3.125-1.441-3.125-3.214s1.403-3.215 3.125-3.215c1.723 0 3.125 1.442 3.125 3.215S26.098 18 24.375 18m0-5.143c-1.034 0-1.875.866-1.875 1.929s.841 1.928 1.875 1.928 1.875-.865 1.875-1.928-.841-1.929-1.875-1.929M10.625 18C8.903 18 7.5 16.559 7.5 14.786s1.403-3.215 3.125-3.215c1.723 0 3.125 1.442 3.125 3.215S12.348 18 10.625 18m0-5.143c-1.034 0-1.875.866-1.875 1.929s.841 1.928 1.875 1.928 1.875-.865 1.875-1.928c0-1.064-.841-1.929-1.875-1.929m-2.5-9h-5a.62.62 0 0 1-.442-.188.65.65 0 0 1 0-.91.62.62 0 0 1 .442-.188h5c.166 0 .325.068.442.189a.65.65 0 0 1 0 .909.62.62 0 0 1-.442.188m0 3.857h-6.25a.62.62 0 0 1-.442-.188.65.65 0 0 1 0-.91.62.62 0 0 1 .442-.187h6.25c.166 0 .325.067.442.188a.65.65 0 0 1 0 .909.62.62 0 0 1-.442.188m0 3.857h-7.5a.62.62 0 0 1-.442-.188.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188h7.5c.166 0 .325.067.442.188a.65.65 0 0 1 0 .91.62.62 0 0 1-.442.187"
                                    />
                                    <path
                                        fill="#fd5523"
                                        d="M17.5 15.429h-4.375a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188H17l2.84-12.857H5.625a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909A.62.62 0 0 1 5.625 0h15a.61.61 0 0 1 .488.241.65.65 0 0 1 .122.543L18.11 14.927a.65.65 0 0 1-.22.36.6.6 0 0 1-.39.142"
                                    />
                                </svg>
                                Get In Touch
                            </TextAnimation>
                        </span>
                        <h2 className="sec-title"><TextAnimation animationStyle="style1"> Reach out anytime for help!</TextAnimation>
                        </h2>
                    </div>
                    <div className="contact-tabs">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'hongkong' ? 'active' : ''}`}
                                    id="hongkong-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="hongkong-tab-pane"
                                    aria-selected={activeTab === 'hongkong'}
                                    onClick={() => handleTabChange('hongkong')}
                                >
                                    Hong Kong
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'singapur' ? 'active' : ''}`}
                                    id="singapur-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="singapur-tab-pane"
                                    aria-selected={activeTab === 'singapur'}
                                    onClick={() => handleTabChange('singapur')}
                                >
                                    Singapur
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'swiz' ? 'active' : ''}`}
                                    id="swiz-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="swiz-tab-pane"
                                    aria-selected={activeTab === 'swiz'}
                                    onClick={() => handleTabChange('swiz')}
                                >
                                    Switzerland
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'nyork' ? 'active' : ''}`}
                                    id="nyork-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="nyork-tab-pane"
                                    aria-selected={activeTab === 'nyork'}
                                    onClick={() => handleTabChange('nyork')}
                                >
                                    New York City
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/* Event Tabs End */}
                </div>
                <div className="container-fluid">
                    <div className="row contact-form-wrap">
                        <div className="col-lg-4">
                            <div id="myTabContent" className="tab-content">
                                <div
                                    className={`tab-pane fade ${activeTab === 'hongkong' ? 'show active' : ''}`}
                                    id="hongkong-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="hongkong-tab"
                                    tabIndex={0}
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49668.99316628675!2d113.91297436858135!3d22.290486893598978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2f3cc46c69d%3A0xf9f590821892369e!2sHong%20Kong%20International%20Airport!5e0!3m2!1sen!2sbd!4v1767538516269!5m2!1sen!2sbd"
                                        width="100%"
                                        height="610"
                                        style={{ border: 0 }}
                                        loading="lazy"

                                    ></iframe>
                                </div>
                                <div
                                    className={`tab-pane fade ${activeTab === 'singapur' ? 'show active' : ''}`}
                                    id="singapur-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="singapur-tab"
                                    tabIndex={0}
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.197876467761!2d103.85898731090441!3d1.2714550485641694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da191f449041ab%3A0x83979ff4e063d7f!2sMarina%20South%20Pier!5e0!3m2!1sen!2sbd!4v1767538796046!5m2!1sen!2sbd"
                                        width="100%"
                                        height="610"
                                        style={{ border: 0 }}
                                        loading="lazy"

                                    ></iframe>
                                </div>
                                <div
                                    className={`tab-pane fade ${activeTab === 'swiz' ? 'show active' : ''}`}
                                    id="swiz-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="swiz-tab"
                                    tabIndex={0}
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247374.53153833255!2d7.823580630710671!3d46.7623682313098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47856113b01253c7%3A0xfacffb1b2f2004e6!2sTitlis%20Cliff%20Walk!5e0!3m2!1sen!2sbd!4v1767538920296!5m2!1sen!2sbd"
                                        width="100%"
                                        height="610"
                                        style={{ border: 0 }}
                                        loading="lazy"

                                    ></iframe>
                                </div>
                                <div
                                    className={`tab-pane fade ${activeTab === 'nyork' ? 'show active' : ''}`}
                                    id="nyork-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="nyork-tab"
                                    tabIndex={0}
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96784.38802495299!2d-74.0665899273107!3d40.70674130541376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1767538842870!5m2!1sen!2sbd"
                                        width="100%"
                                        height="610"
                                        style={{ border: 0 }}
                                        loading="lazy"

                                    ></iframe>
                                </div>
                            </div>
                            {/* Tab Content End */}
                        </div>
                        <div className="col-lg-8">
                            <div
                                className="contact-form round"
                                style={{
                                    backgroundImage: `url(${formBg})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                    backgroundSize: "cover",
                                }}
                            >

                                <div className="form-inner round">
                                    <form onSubmit={handleSubmitChat} >
                                        <div className="row">
                                            <div className="form-group col-lg-12">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your name"
                                                />
                                                <i className="fa fa-user"></i>
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your email"
                                                />
                                                <i className="fa fa-envelope"></i>
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input
                                                    name="phone"
                                                    type="text"
                                                    placeholder="Phone no"
                                                />
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <div className="form-group col-lg-6"> 
                                                <CustomFormSelect
                                                    optionArray={freightTypeOptions}
                                                    value={selectedFreightType}
                                                    onChange={(v) => setSelectedFreightType(v)}
                                                />
                                            </div>
                                            <div className="form-group col-lg-6"> 
                                                <CustomFormSelect
                                                    optionArray={loadOptions}
                                                    value={selectedLoad}
                                                    onChange={(v) => setSelectedLoad(v)}
                                                />
                                            </div>

                                            <div className="form-group top-0 col-lg-12">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    placeholder="Message"
                                                    rows={6}
                                                ></textarea>
                                                <i className="fa fa-pen"></i>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" disabled={isLoading}>
                                                    {isLoading ? (
                                                        <>
                                                            <i className="fa fa-spinner fa-spin me-2"></i> Processing...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Submit Request
                                                            <i className="fa fa-arrow-right ms-2"></i>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer Start */}
        </>
    );
}
