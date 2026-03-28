import { Link } from "react-router-dom";
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import SlideSh1 from "@/images/slide-sh1.png";
import TranckV from "@/images/tranck-v.png";
import TextRotate from "@/images/text-rotate.png";
import Boomark from "@/images/icons/boomark.png";
import SlideM1 from "@/images/slide-m1.jpg";
import SlideM2 from "@/images/slide-m2.jpg";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";

export default function SliderSection() {
    const swiperRefProject = useRef<SwiperType | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    // Navigation handlers for slider
    const projectNextSlide = (): void => {
        swiperRefProject.current?.slideNext();
    };

    const projectPrevSlide = (): void => {
        swiperRefProject.current?.slidePrev();
    };

    return (
        <>
            {/* Header End */}
            <section className="slider-section position-relative">
                <img
                    src={SlideSh1}
                    className="abs-img top-0"
                    aria-hidden="true"
                />
                <img
                    src={TranckV}
                    alt="Truck delivery illustration"
                    className="anim-img moveXS bottom-0"
                />

                <div className="container-fluid p-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="hero-content position-relative">
                                <div className="trust-badge">
                                    <img
                                        className="abs-img"
                                        src={TextRotate}
                                        aria-hidden="true"
                                    />
                                    <div className="icon rounded-circle">
                                        <img
                                            src={Boomark}
                                            alt="Bookmark icon"
                                        />
                                    </div>
                                </div>

                                <FadeInAdvanced
                                    key={`sub-title-${activeSlide}`}
                                    variant="fadeInUp"
                                    delay={200}
                                    triggerOnce={false}
                                >
                                    <p className="sub-title h4">
                                        HiHub Global
                                    </p>
                                </FadeInAdvanced>

                                <FadeInAdvanced
                                    key={`main-title-${activeSlide}`}
                                    variant="fadeInUp"
                                    delay={400}
                                    triggerOnce={false}
                                >
                                    <h1 className="text-info fw-bold">
                                        Haciendo que China Funcione para tu Negocio.
                                    </h1>
                                </FadeInAdvanced>

                                <div className="slide-meta">
                                    <FadeInAdvanced
                                        key={`description-${activeSlide}`}
                                        variant="fadeInUp"
                                        delay={600}
                                        triggerOnce={false}
                                    >
                                        <p className="h6 text-info">
                                            ¡Trabajemos juntos para desbloquear todo el potencial de tu negocio en China!
                                        </p>
                                    </FadeInAdvanced>

                                    <FadeInAdvanced
                                        key={`cta-button-${activeSlide}`}
                                        variant="fadeInUp"
                                        delay={800}
                                        triggerOnce={false}
                                    >
                                        <Link
                                            to="/#contacto"
                                            className="btn btn-primary"
                                        >
                                            Contáctanos
                                            <i
                                                className="fa fa-arrow-right"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </FadeInAdvanced>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="hero-slider-wrap overflow-hidden position-relative">
                                <div className="hero-slider swiper">
                                    <Swiper
                                        onSwiper={(swiper) => {
                                            swiperRefProject.current = swiper;
                                        }}
                                        modules={[Navigation, Autoplay, EffectCreative]}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false
                                        }}
                                        loop={true}
                                        spaceBetween={0}
                                        effect="creative"
                                        speed={1500}
                                        creativeEffect={{
                                            prev: {
                                                scale: 1,
                                                opacity: 0,
                                                translate: [0, 0, 0]
                                            },
                                            next: {
                                                scale: 1.2,
                                                opacity: 0,
                                                translate: [0, 0, 0]
                                            }
                                        }}
                                        onSlideChange={(swiper) => {
                                            setActiveSlide(swiper.realIndex);
                                        }}
                                        className="swiper-wrapper"
                                    >
                                        <SwiperSlide>
                                            <div className="slide-img">
                                                <img
                                                    src={SlideM1}
                                                    alt="Logistics warehouse management"
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide-img">
                                                <img
                                                    src={SlideM2}
                                                    alt="Global shipping transport"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="custom-nav">
                                <div onClick={projectNextSlide} className="swiper-button-next"></div>
                                <div onClick={projectPrevSlide} className="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Slider Section End */}
        </>
    );
}