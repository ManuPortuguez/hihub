import { Link } from "react-router-dom";
import Blog4 from "@/images/blog4.jpg";
import Blog5 from "@/images/blog5.jpg";
import Blog6 from "@/images/blog6.jpg";
import { blogCardData } from "@/data/blogData";
import { useState } from "react";

export default function BlogPage() {
    // Map imported images to the data
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;
    // Calculate paginated product
    const totalPages = Math.ceil(blogCardData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = blogCardData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };
    const imageMap: Record<string, string> = {
        "@/images/blog4.jpg": Blog4,
        "@/images/blog5.jpg": Blog5,
        "@/images/blog6.jpg": Blog6,
    };

    return (
        <>
            {/* Blog Section Start */}
            <section className="blog-page bg-shade sec-padding">
                <div className="container">
                    <div className="row gy-xl-5">
                        {currentProducts.map((blog) => (
                            <div className="col-xl-4 col-md-6" key={blog.id}>
                                <article className="blog-entry2 bg-info round">
                                    <div className="blog-thumb">
                                        <Link to="/single-post">
                                            <img
                                                src={imageMap[blog.image]}
                                                className="img-fluid"
                                                alt="Blog"
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog-inner">
                                        <div className="blog-meta d-flex gap-4">
                                            <span>
                                                <Link to="#">
                                                    <i className="fa-regular fa-user"></i>
                                                    {blog.author}
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to="#">
                                                    <i className="fa-regular fa-calendar"></i>
                                                    {blog.date}
                                                </Link>
                                            </span>
                                        </div>
                                        <h3 className="display-4">
                                            <Link to="/single-post">
                                                {blog.title}
                                            </Link>
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
                        ))}

                        <div className="col-lg-12">
                            <div className="pager text-center mt-5">
                                <Link to="#" className="next-btn" onClick={(e) => { handlePageChange(currentPage - 1); e.preventDefault() }}>
                                    <i className="fa fa-arrow-left"></i>
                                </Link>
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <Link key={index} to="#" className={` ${currentPage === index + 1 ? "current" : ""}`} onClick={() => handlePageChange(index + 1)}>
                                        {index + 1}
                                    </Link>
                                ))}
                                <Link to="#" className="prev-btn" onClick={(e) => { handlePageChange(currentPage + 1); e.preventDefault() }}>
                                    <i className="fa fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Section End */}
        </>
    );
}