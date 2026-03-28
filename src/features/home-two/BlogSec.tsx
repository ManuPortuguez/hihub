import { Link } from "react-router-dom";
import { blogCardData } from "@/data/blogData";
import Blog4 from "@/images/blog4.jpg";
import Blog5 from "@/images/blog5.jpg";
import Blog6 from "@/images/blog6.jpg";

export default function BlogSec() {
    const featuredTeam = blogCardData.slice(0, 3);
    const imageMap: Record<string, string> = {
        "@/images/blog4.jpg": Blog4,
        "@/images/blog5.jpg": Blog5,
        "@/images/blog6.jpg": Blog6,
    };
    return (
        <>
            {/* Blog Section Start */}
            <section className="blog-sec sec-padding bg-shade">
                <div className="container">
                    <div className="d-sm-flex justify-content-between align-items-center">
                        <div className="sec-intro mb-0">
                            <span className="sub-title2 fadeInUp single">
                                Our Insights
                            </span>
                            <h2 className="sec-title">
                                Insights from Our Journal
                            </h2>
                        </div>
                        <Link to="/blog" className="btn btn-primary">
                            View All Insights <i className="fa fa-arrow-right"></i>
                            <span></span>
                        </Link>
                    </div>
                    <div className="row justify-content-md-center gy-4 mt-5">


                        {featuredTeam.map((Team,index) => (
                            <div key={index} className="col-xl-4 col-md-6">
                                <article className="blog-entry2 bg-info round">
                                    <div className="blog-thumb">
                                        <Link to="/single-post">
                                            <img
                                                src={imageMap[Team.image]}
                                                className="img-fluid"
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog-inner">
                                        <div className="blog-meta d-flex gap-4">
                                            <span>
                                                <Link to="#">
                                                    <i className="fa-regular fa-user"></i>
                                                    {Team.author}
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to="#">
                                                    <i className="fa-regular fa-calendar"></i>
                                                    {Team.date}
                                                </Link>
                                            </span>
                                        </div>
                                        <h3 className="display-4">
                                            <Link to="/single-post">{Team.title}</Link>
                                        </h3>
                                        <div className="blog-footer border-top">
                                            <Link
                                                to="/single-post"
                                                className="link-btn"
                                            >
                                                Learn more
                                                <i className="fa-solid fa-circle-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </div>


                        )
                        )}
                    </div>
                </div>
            </section>
            {/* Blog Section End */}
        </>
    );
}
