import { Link } from "react-router-dom";
import Blog1 from "@/images/blog1.jpg";
import Blog2 from "@/images/blog2.jpg";
import Blog3 from "@/images/blog3.jpg";
import BlogN1 from "@/images/blog-n1.jpg";
import BlogN2 from "@/images/blog-n2.jpg";
import BlogN3 from "@/images/blog-n3.jpg";
import { blogGridData } from "@/data/blogData";
import { useState } from "react";

export default function BlogPage() {
    // Map imported images to the data
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;
    // Calculate paginated product
    const totalPages = Math.ceil(blogGridData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = blogGridData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const imageMap: Record<string, string> = {
        "@/images/blog1.jpg": Blog1,
        "@/images/blog2.jpg": Blog2,
        "@/images/blog3.jpg": Blog3,
        "@/images/blog-n1.jpg": BlogN1,
        "@/images/blog-n2.jpg": BlogN2,
        "@/images/blog-n3.jpg": BlogN3,
    };

    return (
        <>
            {/* Blog Section Start */}
            <section className="blog-page sec-padding">
                <div className="container">
                    <div className="row gy-xl-5">
                        {currentProducts.map((blog, index) => (
                            <div className="col-xl-4 col-md-6" key={blog.id}>
                                <div
                                    className="blog-entry fadeInUp"
                                    data-delay={`.${(index % 3 + 1) * 2}`}
                                >
                                    <div className="entry-thumb">
                                        <Link to="/single-post">
                                            <img
                                                src={imageMap[blog.image]}
                                                alt="Blog"
                                            />
                                        </Link>
                                    </div>
                                    <div className="entry-meta">
                                        <span>
                                            <Link to="#">
                                                <i className="fa-regular fa-user"></i>
                                                {blog.author}
                                            </Link>
                                        </span>
                                        <span>
                                            <i className="fa-regular fa-calendar-days"></i>
                                            {blog.date}
                                        </span>
                                    </div>
                                    <h3 className="display-4">
                                        <Link to="/single-post">
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <Link to="/single-post" className="link-btn">
                                        Learn more
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </Link>
                                </div>
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