import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { brandsData } from "@/data/brandsData";
import BrandBg from "@/images/brand-bg.jpg";
import JarallaxSection from "@/components/elements/JarallaxSection";

export default function BrandsSec() {
    return (
        <>
            {/* Brands Section Start */}
            <JarallaxSection
                imgSrc={BrandBg}
                speed={0.4}
                className="brands-sec bg-cover"
            >
                <div className="container ct-container">
                    <div className="row" id="clientes">
                        <div className="col-lg-12">
                            <div className="sec-intro text-center mb-4">
                                <span className="sub-title fadeInUp">Clientes</span>
                                <h2 className="sec-title text-white">Confían en HiHub Global</h2>
                            </div>
                            <div className="brands-carousel">
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
            </JarallaxSection>
            {/* Brands Section End */}
        </>
    );
}