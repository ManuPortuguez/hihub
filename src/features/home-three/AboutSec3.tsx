import { Link } from "react-router-dom";
import { useState } from 'react';
import { motion } from 'framer-motion';
import AboutFt2 from "@/images/about-ft2.png";
import AboutFt3 from "@/images/about-ft3.png";
import AbSt2 from "@/images/ab-st2.png";
import AbT1 from "@/images/ab-t1.png";
import AboutFt from "@/images/about-ft.jpg";
import AboutBg from "@/images/about-bg.jpg";
import CounterUp from "@/components/elements/CounterUp";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
const TAB_DATA = {
    mission: {
        title: "We specialize in delivering strategic guidance, project development support,",
        img: AbT1,
        paragraphs: [
            "Our mission is to deliver strategic real estate solutions that create long-term value for clients.",
            "We support project development, investment planning, and consultancy with expert guidance.",
        ],
    },
    vission: {
        title: "We specialize in delivering strategic guidance, project development support,",
        img: AbT1,
        paragraphs: [
            "Our vision is to become a global leader in real estate advisory and transport logistics support.",
            "We aim to innovate and modernize traditional consultancy approaches.",
        ],
    },
    history: {
        title: "We specialize in delivering strategic guidance, project development support,",
        img: AbT1,
        paragraphs: [
            "With over 25 years of industry experience, we have completed numerous landmark projects.",
            "Our journey reflects trust, performance, and long-term partnerships.",
        ],
    },
};

export default function AboutSec3() {
    const [activeTab, setActiveTab] = useState('mission');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <>
            {/* About Section Start */}
            <section
                className="about-sec3 sec-padding bg-cover"
                style={{ backgroundImage: `url(${AboutBg})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-7 mx-lg-auto">
                            <FadeInAdvanced variant="slideInLeft" >
                                <div className="about-media3 position-relative">
                                    <div className="feat-img position-relative">
                                        <img
                                            src={AboutFt}
                                            className="img-fluid round"
                                            alt="about"
                                        />
                                        <div className="experien-stat">
                                            <p className="text-info m-0">

                                                <span
                                                    className="purecounter"
                                                >
                                                    <CounterUp ending={25} />
                                                </span>
                                                + Years Experience
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex ab-sm-ft align-items-center gap-4">
                                        <img
                                            className="round img-fluid"
                                            src={AboutFt2}
                                            alt="about"
                                        />
                                        <img
                                            className="img-fluid"
                                            src={AboutFt3}
                                            alt="about"
                                        />
                                    </div>
                                    <div className="ab-stat2">
                                        <img src={AbSt2} />
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        <div className="col-xl-7">
                            <div className="about-content3">
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
                                        About Our Company
                                    </TextAnimation>
                                </span>
                                <h2 className="sec-title">
                                    <TextAnimation animationStyle="style1">
                                        Our services increase the<br /> productivity of
                                        your work.
                                    </TextAnimation>
                                </h2>
                                <p>
                                    Our global logistics expertise, advanced
                                    supply chain technology & customized
                                    logistics solutions will help you analyze,
                                    develop, and implement successful
                                </p>
                                <ul
                                    className="nav nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                >
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className={`nav-link ${activeTab === 'mission' ? 'active' : ''}`}
                                            id="mission-tab"
                                            type="button"
                                            role="tab"
                                            aria-controls="mission"
                                            aria-selected={activeTab === 'mission'}
                                            onClick={() => handleTabChange('mission')}
                                        >
                                            Our Mission
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className={`nav-link ${activeTab === 'vission' ? 'active' : ''}`}
                                            id="vission-tab"
                                            type="button"
                                            role="tab"
                                            aria-controls="vission"
                                            aria-selected={activeTab === 'vission'}
                                            onClick={() => handleTabChange('vission')}
                                        >
                                            Our Vission
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className={`nav-link ${activeTab === 'history' ? 'active' : ''}`}
                                            id="history-tab"
                                            type="button"
                                            role="tab"
                                            aria-controls="history"
                                            aria-selected={activeTab === 'history'}
                                            onClick={() => handleTabChange('history')}
                                        >
                                            Our History
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    {Object.entries(TAB_DATA).map(([key, data]) => (
                                        <motion.div
                                            key={key}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={
                                                activeTab === key
                                                    ? { y: 0, opacity: 1 }
                                                    : { y: 20, opacity: 0 }
                                            }
                                            transition={{
                                                duration: 0.8,
                                                ease: "easeOut",
                                            }}
                                            className={`tab-pane fade ${activeTab === key ? "show active" : ""}`}
                                        >
                                            <div className="d-sm-flex gap-4 mb-3">
                                                <div className="tab-img">
                                                    <img
                                                        src={data.img}
                                                        alt="tab"
                                                        className="rounded-4"
                                                    />
                                                </div>

                                                <div className="tab-txt">
                                                    {data.paragraphs.map((text, i) => (
                                                        <p key={i}>{text}</p>
                                                    ))}
                                                </div>
                                            </div>

                                            <h3 className="display-6">{data.title}</h3>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* tab content end */}
                                <div className="d-sm-flex align-items-center about-cta gap-5 mt-5">
                                    <Link
                                        to="/about"
                                        className="btn btn-primary"
                                    >
                                        About Us
                                        <i className="fa fa-arrow-right"></i>
                                        <span></span>
                                    </Link>

                                    <div className="quick-call d-flex align-items-center">
                                        <span className="bg-dark icon-lg rounded-circle text-info">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </span>
                                        <div className="conn-txt ms-3">
                                            <p className="m-0">
                                                Call Us Any Time:
                                            </p>
                                            <a
                                                className="h6 text-primary"
                                                href="tel:148359505285"
                                            >
                                                148 359 505 285
                                            </a>
                                        </div>
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
