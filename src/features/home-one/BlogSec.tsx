import { Link } from "react-router-dom";
import Blog1 from "@/images/blog1.jpg";
import Blog2 from "@/images/blog2.jpg";
import Blog3 from "@/images/blog3.jpg";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";

export default function BlogSec() {
    return (
        <>
            {/* Blog Section Start */}
            <section className="blog-sec sec-padding">
                <div className="container">
                    <div className="sec-intro mx-auto text-center">
                        <TextAnimation animationStyle="style1">
                            <span className="sub-title fadeInUp">
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
                                Latest News
                            </span></TextAnimation>
                        <h2 className="sec-title">
                            <TextAnimation animationStyle="style1">
                                Read Our Latest News & Articles
                            </TextAnimation>
                        </h2>

                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-xl-4 col-md-6">
                            <FadeInAdvanced variant="fadeInUp" delay={200}>
                                <div
                                    className="blog-entry "
                                >
                                    <div className="entry-thumb">
                                        <Link to="/single-post">
                                            <img src={Blog1} alt="Blog" />
                                        </Link>
                                    </div>
                                    <div className="entry-meta">
                                        <span>
                                            <Link to="#">
                                                <i className="fa-regular fa-user"></i>
                                                Adam Smith
                                            </Link>
                                        </span>
                                        <span>
                                            <i className="fa-regular fa-calendar-days"></i>
                                            05 Dec 2025
                                        </span>
                                    </div>
                                    <h3 className="display-4">
                                        <Link to="/single-post">
                                            TranHub Named a Finalist For Year’ 25
                                            Best Choice Award
                                        </Link>
                                    </h3>
                                    <Link to="/single-post" className="link-btn">
                                        Learn more
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </Link>
                                </div>
                            </FadeInAdvanced>

                        </div>
                        {/*  Blog Entry End */}
                        <div className="col-xl-4 col-md-6">
                            <FadeInAdvanced variant="fadeInUp" delay={400}>
                                <div
                                    className="blog-entry fadeInUp"
                                >
                                    <div className="entry-thumb">
                                        <Link to="/single-post">
                                            <img src={Blog2} alt="Blog" />
                                        </Link>
                                    </div>
                                    <div className="entry-meta">
                                        <span>
                                            <Link to="#">
                                                <i className="fa-regular fa-user"></i>
                                                Adam Smith
                                            </Link>
                                        </span>
                                        <span>
                                            <i className="fa-regular fa-calendar-days"></i>
                                            05 Dec 2025
                                        </span>
                                    </div>
                                    <h3 className="display-4">
                                        <Link to="/single-post">
                                            Creating innovative strategies for
                                            secured Transport
                                        </Link>
                                    </h3>
                                    <Link to="/single-post" className="link-btn">
                                        Learn more
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </Link>
                                </div>
                            </FadeInAdvanced>

                        </div>
                        {/*  Blog Entry End */}
                        <div className="col-xl-4 col-md-6">
                            <FadeInAdvanced variant="fadeInUp" delay={600}>
                                <div
                                    className="blog-entry fadeInUp"
                                >
                                    <div className="entry-thumb">
                                        <Link to="/single-post">
                                            <img src={Blog3} alt="Blog" />
                                        </Link>
                                    </div>
                                    <div className="entry-meta">
                                        <span>
                                            <Link to="#">
                                                <i className="fa-regular fa-user"></i>
                                                Adam Smith
                                            </Link>
                                        </span>
                                        <span>
                                            <i className="fa-regular fa-calendar-days"></i>
                                            05 Dec 2025
                                        </span>
                                    </div>
                                    <h3 className="display-4">
                                        <Link to="/single-post">
                                            Innovations Shaping the Future of
                                            Freight and Logistics
                                        </Link>
                                    </h3>
                                    <Link to="/single-post" className="link-btn">
                                        Learn more
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </Link>
                                </div>
                            </FadeInAdvanced>

                        </div>
                        {/*  Blog Entry End */}
                    </div>
                </div>
            </section>
            {/* Blog Section End */}
        </>
    );
}
