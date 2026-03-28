import { Link } from "react-router-dom";
import Ls1 from "@/images/ls1.png";
import Ls2 from "@/images/ls2.png";
import Ls3 from "@/images/ls3.png";
import SinglePost from "@/images/single-post.jpg";
import PostSingle from "./PostSingle";

export default function SinglePostPage() {
    return (
        <>
            {/* Single Article Section Start */}
            <div className="single-post-page sec-padding">
                <div className="container">
                    <div className="row">
                        <figure className="post-thumb">
                            <img
                                src={SinglePost}
                                alt="blog"
                                className="img-fluid"
                            />
                        </figure>
                        <div className="col-lg-8">
                            <PostSingle />
                        </div>
                        <div className="col-lg-4 ps-lg-5">
                            <aside className="sidebar">
                                <div className="widget search-widget">
                                    <form className="position-relative">
                                        <input
                                            type="search"
                                            placeholder="Enter keyword"
                                        />
                                        <button className="btn btn-primary position-absolute">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                                <div className="widget category-widget">
                                    <h3 className="widget-title">
                                        Popular Categories
                                    </h3>
                                    <div className="widget-inner">
                                        <ul>
                                            <li>
                                                <Link to="#">Air Freight</Link>
                                                (18)
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Road Transport
                                                </Link>
                                                (2)
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Rail Transport
                                                </Link>
                                                (12)
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Cargo Services
                                                </Link>
                                                (14)
                                            </li>
                                            <li>
                                                <Link to="#">Warehouse</Link>
                                                (19)
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Ocean Freight
                                                </Link>
                                                (18)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget">
                                    <h3 className="widget-title">
                                        Latest From Blog
                                    </h3>
                                    <div className="widget-inner">
                                        <div className="ls-entry d-flex">
                                            <img
                                                width="85"
                                                src={Ls1}
                                                alt="Course"
                                                className="img-fluid rounded-2"
                                            />
                                            <div className="ls-info ms-3">
                                                <span className="entry-meta">
                                                    <i className="fa-regular fa-calendar-days"></i>
                                                    22 Oct, 2025
                                                </span>
                                                <h6>
                                                    <Link to="/single-course">
                                                        TranHub Embraces AI for
                                                        Optimized Route
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        {/* Recent Entry End */}
                                        <div className="ls-entry d-flex">
                                            <img
                                                width="85"
                                                src={Ls2}
                                                alt="Course"
                                                className="img-fluid rounded-2"
                                            />
                                            <div className="ls-info ms-3">
                                                <span className="entry-meta">
                                                    <i className="fa-regular fa-calendar-days"></i>
                                                    22 Oct, 2025
                                                </span>
                                                <h6>
                                                    <Link to="/single-course">
                                                        How is Adapting to Meet
                                                        Growing Demand
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        {/* Recent Entry End */}
                                        <div className="ls-entry d-flex">
                                            <img
                                                width="85"
                                                src={Ls3}
                                                alt="Course"
                                                className="img-fluid rounded-2"
                                            />
                                            <div className="ls-info ms-3">
                                                <span className="entry-meta">
                                                    <i className="fa-regular fa-calendar-days"></i>
                                                    22 Oct, 2025
                                                </span>
                                                <h6>
                                                    <Link to="/single-course">
                                                        TransHub Commitment to
                                                        Eco-Friendly
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        {/* Recent Entry End */}
                                    </div>
                                </div>
                                {/* Widget End */}

                                <div className="widget tagcloud">
                                    <h3 className="widget-title">
                                        Popular Keyword
                                    </h3>
                                    <div className="widget-inner">
                                        <Link to="#">Logistics Services</Link>
                                        <Link to="#">Warehouse</Link>
                                        <Link to="#">air fright</Link>
                                        <Link to="#">Ocean Freight</Link>
                                        <Link to="#">Global</Link>
                                        <Link to="#">community</Link>
                                    </div>
                                </div>
                                {/* Widget End */}
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Article Section End */}
        </>
    );
}
