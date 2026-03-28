import { useRef } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { reviews3Data, getStarIcons } from "@/data/reviews3Data";
import QuoteLeft from "@/images/icons/quote-left.svg";
import TextAnimation from '@/components/elements/TextAnimation';

export default function ReviewSec3() {
    const swiperRefReview3 = useRef<SwiperType | null>(null);
    return (
        <>
            {/* Review Section Start */}
            <section className="review-sec3 bg-shade sec-padding">
                <div className="container">
                    <div className="sec-intro mx-auto text-center">
                        <span className="sub-title fadeInUp">
                            <TextAnimation animationStyle='style1'>
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
                            <TextAnimation animationStyle='style1'>
                                What Our Client Say's about us
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="review3-carousel swiper">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        onSwiper={(swiper) => {
                                            swiperRefReview3.current = swiper;
                                        }}
                                        modules={[Navigation, Autoplay]}
                                        loop={true}
                                        autoplay={true}
                                        speed={800}
                                        spaceBetween={30}
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            992: {
                                                slidesPerView: 3
                                            }
                                        }}
                                    >
                                        {reviews3Data.map((review) => {
                                            const stars = getStarIcons(review.rating);
                                            return (
                                                <SwiperSlide key={review.id}>
                                                    <div className="review-entry">
                                                        <div className="rev-content position-relative bg-white rounded-4">
                                                            <p>{review.text}</p>
                                                            <div className="ratings">
                                                                {/* Full stars */}
                                                                {[...Array(stars.full)].map((_, i) => (
                                                                    <Link key={`full-${i}`} to="#">
                                                                        <i className="fa fa-star"></i>
                                                                    </Link>
                                                                ))}
                                                                {/* Half star */}
                                                                {stars.half === 1 && (
                                                                    <Link to="#">
                                                                        <i className="fa fa-star-half"></i>
                                                                    </Link>
                                                                )}
                                                                {/* Empty stars */}
                                                                {[...Array(stars.empty)].map((_, i) => (
                                                                    <Link key={`empty-${i}`} to="#">
                                                                        <i className="fa fa-star-o"></i>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                            <div className="rev-icon icon bg-primary position-absolute">
                                                                <img src={QuoteLeft} alt="quote" />
                                                            </div>
                                                        </div>
                                                        <div className="rev-author d-flex align-items-center">
                                                            <div className="author-thumb icon me-3">
                                                                <img src={review.author.image} alt={review.author.name} />
                                                            </div>
                                                            <div className="author-info">
                                                                <h3 className="mb-0 display-5">
                                                                    {review.author.name}
                                                                </h3>
                                                                <span>{review.author.position}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Review Section End */}
        </>
    );
}