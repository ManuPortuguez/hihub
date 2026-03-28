import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { brandsData } from "@/data/brandsData";

export default function BrandsSec() {
    return (
        <>
            {/* Brands Section End */}
            <div className="brands-sec3 overflow-hidden">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brands-carousel2 bg-dark">
                                    <Swiper
                                        modules={[Autoplay]}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false
                                        }}
                                        speed={600}
                                        spaceBetween={30}
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1
                                            },
                                            768: {
                                                slidesPerView: 4
                                            },
                                            992: {
                                                slidesPerView: 6
                                            }
                                        }}
                                    >
                                        {brandsData.map((brand) => (
                                            <SwiperSlide key={brand.id}>
                                                <Link to={brand.link}>
                                                    <img src={brand.image} alt={brand.alt} />
                                                </Link>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Brands Section Start */}
        </>
    );
}