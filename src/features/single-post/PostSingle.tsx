import { Link } from "react-router-dom";
import Ava2 from "@/images/ava2.png";
import Ava1 from "@/images/ava1.png";
import SinglePost from "@/images/single-post.jpg";
import Gal1 from "@/images/gal1.jpg";
import Gal2 from "@/images/gal2.jpg";
import Gal3 from "@/images/gal3.jpg";
import Swal from "sweetalert2";

export default function PostSingle() {
    const handleSubmitChat = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Extract form values
        const Name = formData.get("name") as string;
        const Email = formData.get("email") as string;
        const Message = formData.get("message") as string;

        // Validate all fields are filled
        if (Name && Email && Message) {
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
            <article className="post-single">
                <figure className="post-thumb">
                    <img src={SinglePost} alt="blog" className="img-fluid" />
                </figure>
                <div className="post-header">
                    <div className="d-sm-flex gap-5 align-items-center">
                        <div className="ph-inner d-flex gap-1 align-items-center">
                            <img src={Ava2} className="img-fluid" />
                            <div className="pm-info">
                                <span>Author</span>
                                <h5>Phil Martinez</h5>
                            </div>
                        </div>
                        <div className="pm-info">
                            <span>Published on:</span>
                            <h5>October 15, 2025</h5>
                        </div>
                        <div className="pm-info">
                            <span>05 comments</span>
                            <h5>Join the conversation</h5>
                        </div>
                    </div>
                </div>
                <h1 className="display-2">
                    The Impact of E-Commerce on Global Cargo Demand
                </h1>
                <p>
                    TransHub and dislike men who are so that beguiled and
                    demoralized welcomed every pain avoided frequently occur
                    that pleasures indignations and dislike men who ar beguiled
                    the charms of pleasure of the moment, so blinded by desire,
                    that they cannot foresee the pain trouble that are bound to
                    ensue equal blame belongs to those who fail in their duty
                    through our weakness of same as saying through shrinking our
                    being able to do.
                </p>
                <p>
                    Foresee the pain trouble that are bound to ensue equal blame
                    belongs to those who fail in their duties which is the same
                    as saying fail in their duties which is the same as saying
                    through shrinking annoying consequences.
                </p>
                <p>
                    Our being able to do what we like best, every pleasure is to
                    be welcomed and every pain avoided butin certain that
                    matters to this principle circumstances and owing to the
                    claims.foresee the pain troublethat are bound to ensue equal
                    blame belongs to those who fail in their duty through
                    weakness of will,which is the saying through shrinking .
                </p>
                <p>
                    I don’t accept every kind gesture these days, I will rather
                    request to pay in order to have it to maintain my peace of
                    mind. A great scholar once told me to fear the word FREE.
                    According to him it’s more dangerous than sword.
                </p>
                <blockquote>
                    <p>
                        Pellentesque sollicitudin congue dolor non aliquam.
                        Morbi volutpat, nisi vel ultricies urnacondimentum,
                        sapien neque lobortis tortor, quis efficitur mi ipsum eu
                        metus. Praesent eleifend orci sit amet est vehicula.
                    </p>
                    <cite>
                        <strong>Andi Dufreen,</strong> @transhub/facebook.com
                    </cite>
                </blockquote>
                <p>
                    No one rejects, dislikes, or avoids pleasure itself, because
                    it is pleasure, but because those who do notknow how to
                    pursue pleasure rationally encounter consequences that are
                    extremely pain- ful. Nor again is there anyone who loves or
                    pursues or desires to obtain pain of itself, because it
                    pain, but because occasionally circumstances.
                </p>
                <h3>Warehouse On-Hand Inventory</h3>
                <p>
                    TransHub and dislike men who are so that beguiled and
                    demoralized welcomed every pain avoided frequently occur
                    that pleasures indignations and dislike men who ar beguiled
                    the charms of pleasure of the moment, so blinded by desire,
                    that they cannot foresee the pain trouble that are bound to
                    ensue equal blame belongs to those who fail in their duty
                    through our weakness of same as saying through shrinking our
                    being able to do.
                </p>
                <div className="my-5 p-gallery d-sm-flex gap-5">
                    <img src={Gal1} className="img-fluid round" />
                    <img src={Gal2} className="img-fluid round" />
                </div>
                <h3>Rising Demand for Speed & Efficiency</h3>
                <p>
                    TransHub and dislike men who are so that beguiled and
                    demoralized welcomed every pain avoided frequently occur
                    that pleasures indignations and dislike men who ar beguiled
                    the charms of pleasure of the moment, so blinded by desire,
                    that they cannot foresee the pain trouble that are bound to
                    ensue equal blame belongs to those who fail in their duty
                    through our weakness of same as saying through shrinking our
                    being able to do.
                </p>
                <div className="d-sm-flex justify-content-between">
                    <div className="list-inner">
                        <h4>Optimized Last-Mile Delivery</h4>
                        <ul className="check">
                            <li>Pleasure that has no annoying consequences.</li>
                            <li>
                                The wise man therefore always holds in these
                                matters to this principle of selection.
                            </li>
                            <li>
                                Rejects pleasures to secure other greater
                                pleasures, or else he endures.
                            </li>
                            <li>
                                Physical exercise, except to obtain some
                                advantage.
                            </li>
                        </ul>
                        <h4>Transparency & Tracking</h4>
                        <ul className="check">
                            <li>
                                Obligations of business it will frequently occur
                                that pleasures.
                            </li>
                            <li>
                                Ever undertakes laborious physical exercise,
                                except to obtain advantage.
                            </li>
                            <li>
                                Have to be repudiated and annoyances accepted.
                            </li>
                        </ul>
                    </div>
                    <div className="list-thumb">
                        <img src={Gal3} className="img-fluid" alt="gallery" />
                    </div>
                </div>
                <div className="article-footer d-sm-flex justify-content-between my-5">
                    <div className="article-tags d-sm-flex align-items-center mb-4 mb-sm-0">
                        <h4 className="m-0 display-6">Tags:</h4>
                        <div className="tagcloude widget_tag_cloud ms-3">
                            <Link to="#">Cargo Tracking</Link>
                            <Link to="#">Environment</Link>
                            <Link to="#">wirehouse</Link>
                            <Link to="#">ocean fright</Link>
                        </div>
                    </div>
                    <div className="article-share d-sm-flex align-items-center">
                        <h4 className="display-6">Share:</h4>
                        <div className="social-share outline ms-3">
                            <Link to="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </Link>
                            <Link to="#">
                                <i className="fa-brands fa-x-twitter"></i>
                            </Link>
                            <Link to="#">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                            <Link to="#">
                                <i className="fa-brands fa-instagram"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Article Share End */}
                <div className="inner-sec comments-sec" id="review">
                    <h2 className="display-4">Comments (03)</h2>
                    <div className="entry-comments mt-5">
                        <div className="post-comments">
                            <ol className="comment-list list-unstyled">
                                <li>
                                    <article className="comment-entry">
                                        <div className="d-sm-flex align-items-top">
                                            <div className="comment-thumb">
                                                <img
                                                    width="80"
                                                    className="img-fluid rounded-circle"
                                                    src={Ava1}
                                                    alt="Comments"
                                                />
                                            </div>
                                            <div className="commentor ms-lg-4 p-4">
                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="comment-head">
                                                        <h4 className="display-5 mb-0">
                                                            Mariya Dcosta
                                                        </h4>
                                                        <small className="text-muted">
                                                            Nov 12, 2025 at
                                                            12:12 am
                                                        </small>
                                                    </div>
                                                    <Link to="#" className="h6">
                                                        <i className="feather-icon icon-corner-left-down me-1"></i>
                                                        Reply
                                                    </Link>
                                                </div>
                                                <p>
                                                    Provide regular updates to
                                                    donors and supporters
                                                    through newsletters, social
                                                    media, & the charity
                                                    website, detailing how funds
                                                    are being used and the
                                                    impact achieved.Provide
                                                    regular updates to donors
                                                    and supporters through
                                                    newsletters, social media, &
                                                    the charity website
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                    <ol className="children">
                                        <li>
                                            <article className="comment-entry">
                                                <div className="d-sm-flex align-items-top">
                                                    <div className="comment-thumb">
                                                        <img
                                                            width="80"
                                                            className="img-fluid rounded-circle"
                                                            src={Ava2}
                                                            alt="Comments"
                                                        />
                                                    </div>
                                                    <div className="commentor ms-lg-4 p-4">
                                                        <div className="d-flex justify-content-between mb-3">
                                                            <div className="comment-head">
                                                                <h4 className="display-5 mb-0">
                                                                    Andrew Dian
                                                                </h4>
                                                                <small className="text-muted">
                                                                    Nov 12, 2022
                                                                    at 12:12 am
                                                                </small>
                                                            </div>
                                                            <Link
                                                                to="#"
                                                                className="h6"
                                                            >
                                                                <i className="feather-icon icon-corner-left-down me-1"></i>
                                                                Reply
                                                            </Link>
                                                        </div>
                                                        <p>
                                                            Use metrics and
                                                            feedback to assess
                                                            the success of
                                                            projects and
                                                            programs, and share
                                                            these results with
                                                            the community to
                                                            demonstrate
                                                            accountability and
                                                            build trust.dates to
                                                            donors and
                                                            supporters through
                                                            newsletters, social
                                                            media, & the charity
                                                            website, detailing
                                                            how funds are being
                                                            used
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <article className="comment-entry">
                                        <div className="d-sm-flex align-items-top">
                                            <div className="comment-thumb">
                                                <img
                                                    width="80"
                                                    className="img-fluid rounded-circle"
                                                    src={Ava1}
                                                    alt="Comments"
                                                />
                                            </div>
                                            <div className="commentor ms-lg-4 p-4">
                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="comment-head">
                                                        <h4 className="display-5 mb-0">
                                                            Josefa Donald
                                                        </h4>
                                                        <small className="text-muted">
                                                            Nov 12, 2022 at
                                                            12:12 am
                                                        </small>
                                                    </div>
                                                    <Link to="#" className="h6">
                                                        <i className="feather-icon icon-corner-left-down me-1"></i>
                                                        Reply
                                                    </Link>
                                                </div>
                                                <p>
                                                    Mauris non dignissim purus,
                                                    ac commodo diam. Donec sit
                                                    amet lacinia nulla. Aliquam
                                                    quis purus in justo pulvinar
                                                    tempor.Use metrics and
                                                    feedback to assess the
                                                    success of projects and
                                                    programs, and share these
                                                    results with the community
                                                    to demonstrate
                                                    accountability
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            </ol>
                        </div>
                        <div className="comment-form mt-5">
                            <h3 className="display-4">Leave a Reply</h3>
                            <p>
                                Your email address will not be published.
                                Required={true} fields are marked *
                            </p>
                            <form onSubmit={handleSubmitChat} className="row gy-3 mt-4">
                                <div className="col-lg-6 form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name*"
                                    />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input
                                        type="email"
                                        name="email"    
                                        placeholder="Email Address*"
                                    />
                                </div>
                                <div className="col-lg-12 form-group">
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Comment*"
                                    ></textarea>
                                </div>

                                <div className="form-check ms-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Save my name, email, and website in this
                                        browser for the next time I comment.
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn d-block btn-primary mt-4">
                                        Post Your Comment
                                        <i className="fa fa-arrow-right"></i>
                                        <span></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
