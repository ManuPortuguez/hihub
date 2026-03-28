import { Link } from "react-router-dom";
import { useState } from "react";
import TabImage from "@/images/tab-image.jpg";
import Swal from "sweetalert2";

export default function ProductDetails() {
    const [activeTab, setActiveTab] = useState('description');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Extract form values
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const comments = formData.get("comments") as string;

        // Validate all fields are filled
        if (name && email && comments) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your review submitted successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        }
    };
    return (
        <>
            {/* Product Details Section Start */}
            <section className="product-details pb-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-details-tab">
                                <ul
                                    className="nav nav-tabs border-0 rounded-pill justify-content-center"
                                    id="myTab"
                                    role="tablist"
                                >
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                                            id="description-tab"
                                            type="button"
                                            role="tab"
                                            aria-controls="description"
                                            aria-selected={activeTab === 'description'}
                                            onClick={() => handleTabChange('description')}
                                        >
                                            description
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className={`nav-link ${activeTab === 'additional-info' ? 'active' : ''}`}
                                            id="additional-info-tab"
                                            type="button"
                                            role="tab"
                                            aria-controls="additional-info"
                                            aria-selected={activeTab === 'additional-info'}
                                            onClick={() => handleTabChange('additional-info')}
                                        >
                                            additional info
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                                            id="reviews-tab"
                                            type="button"
                                            role="tab"
                                            aria-controls="reviews"
                                            aria-selected={activeTab === 'reviews'}
                                            onClick={() => handleTabChange('reviews')}
                                        >
                                            reviews
                                        </button>
                                    </li>
                                </ul>
                                <div
                                    className="tab-content  mt-5"
                                    id="myTabContent"
                                >
                                    <div
                                        className={`tab-pane fade ${activeTab === 'description' ? 'show active' : ''}`}
                                        id="description"
                                        role="tabpanel"
                                        aria-labelledby="description-tab"
                                    >
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex
                                                    ea commodo consequat. Duis
                                                    aute irure dolor in
                                                    reprehenderit in voluptate
                                                    velit esse cillum dolore eu
                                                    fugiat nulla pariatur.
                                                    Excepteur sint occaecat
                                                    cupidatat non proident, sunt
                                                    in culpa qui officia
                                                    deserunt mollit anim id est
                                                    laborum.
                                                </p>

                                                <h3 className="mt-5 display-5 mb-4">
                                                    Main features
                                                </h3>
                                                <ul>
                                                    <li>
                                                        Nemo enim ipsam
                                                        voluptatem quia voluptas
                                                        sit
                                                    </li>
                                                    <li>
                                                        Ut enim ad minima
                                                        veniam, quis nostrum
                                                        exercitationem
                                                    </li>
                                                    <li>
                                                        We duis aute irure dolor
                                                        in reprehenderit in
                                                        voluptate
                                                    </li>
                                                    <li>
                                                        At vero eos et accusamus
                                                        et iusto odio
                                                        dignissimos
                                                    </li>
                                                    <li>
                                                        Omnis voluptas assumenda
                                                        est omnis dolor
                                                    </li>
                                                    <li>
                                                        Quis autem vel eum iure
                                                        reprehenderit qui in ea
                                                        voluptate
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-5 text-end">
                                                <img
                                                    className="img-fluid"
                                                    src={TabImage}
                                                    alt="Tab Image"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`tab-pane fade ${activeTab === 'additional-info' ? 'show active' : ''}`}
                                        id="additional-info"
                                        role="tabpanel"
                                        aria-labelledby="additional-info-tab"
                                    >
                                        <div className="product-additional-info">
                                            <div className="item">
                                                <label className="h5">
                                                    Weight
                                                </label>
                                                <span>1.25 kg</span>
                                            </div>
                                            <div className="item">
                                                <label className="h5">
                                                    Dimensions
                                                </label>
                                                <span>90 x 60 x 90 cm</span>
                                            </div>
                                            <div className="item">
                                                <label className="h5">
                                                    Size
                                                </label>
                                                <span>XS, S, M, L, XL</span>
                                            </div>
                                            <div className="item">
                                                <label className="h5">
                                                    Color
                                                </label>
                                                <span>
                                                    Black, Orange, White
                                                </span>
                                            </div>
                                            <div className="item">
                                                <label className="h5">
                                                    Storage
                                                </label>
                                                <span>
                                                    Relaxed fit shirt-style
                                                    dress with a rugged
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`tab-pane fade ${activeTab === 'reviews' ? 'show active' : ''}`}
                                        id="reviews"
                                        role="tabpanel"
                                        aria-labelledby="reviews-tab"
                                    >
                                        <h6>There are no reviews yet.</h6>
                                        <p>
                                            Be The First To Review
                                            <Link
                                                to="/single-product"
                                                className="fw-5"
                                            >
                                                “Le Skinny De Jeanne Crop”
                                            </Link>
                                        </p>
                                        <p>
                                            Your email address will not be
                                            published. Required={true} fields
                                            are marked *
                                        </p>

                                        <div className="ratings">
                                            <Link to="#">
                                                <i className="fa fa-star"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star"></i>
                                            </Link>
                                        </div>
                                        <div className="ratings-form contact-form2 mt-5">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group half-form">
                                                    <label htmlFor="name">
                                                        Name*
                                                    </label>
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        placeholder="John Doe"
                                                        type="text"
                                                        required={true}
                                                    />
                                                </div>
                                                <div className="form-group half-form">
                                                    <label htmlFor="email">
                                                        Name*
                                                    </label>
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        placeholder="example@gmail.com"
                                                        type="email"
                                                        required={true}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="comments">
                                                        Write Your Review*
                                                    </label>
                                                    <textarea
                                                        name="comments"
                                                        id="comments"
                                                        placeholder="your comments here..."
                                                    ></textarea>
                                                </div>
                                                <div className="form-group checkbox-group">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="exampleCheck1"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="exampleCheck1"
                                                    >
                                                        Save my name, email, and
                                                        website in this browser
                                                        for the next time I
                                                        comment.
                                                    </label>
                                                </div>
                                                <button className="btn btn-primary">
                                                    Submit Now
                                                </button>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Details Section End */}
        </>
    );
}
