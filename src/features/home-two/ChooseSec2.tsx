import { Link } from "react-router-dom";
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { servicesData as servicesDataRaw } from "@/data/servicesData";
import TextAnimation from "@/components/elements/TextAnimation";
import ChooseMain from "@/images/choose-main-hihub.png";
import Water from "@/images/icons/water.svg";
import AirHeat from "@/images/icons/air-heat.svg";
import Fan from "@/images/icons/fan.svg";
import Celling from "@/images/icons/celling.svg";
import AcCond from "@/images/icons/ac-cond.svg";
import FloorHeat from "@/images/icons/floor-heat.svg";
import ChooseBg from "@/images/choose-bg.png";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";

export default function ChooseSec2() {
    const { t } = useTranslation();
    const swiperRefProject = useRef<SwiperType | null>(null);

    const servicesData = servicesDataRaw.map((s, i) => ({
        ...s,
        title: t(`svcCard.${i + 1}.title`),
        description: t(`svcCard.${i + 1}.desc`),
    }));

    // Navigation handlers for slider
    const projectNextSlide = (): void => {
        swiperRefProject.current?.slideNext();
    };

    const projectPrevSlide = (): void => {
        swiperRefProject.current?.slidePrev();
    };
    return (
        <>
            {/* Services Section Start */}
            <div
                className="services-sec2 sec-padding overflow-hidden"
                style={{ backgroundColor: '#020e28' }}
            >
                <div className="container ct-container p-0">
                    <div className="row align-items-center serv-header">
                        <div className="col-lg-8">
                            <div className="sec-intro">
                                <span className="sub-title2 fadeInUp single" style={{ color: '#FFC107' }}>
                                    {t('services2.subtitle')}
                                </span>
                                <h2 className="sec-title" style={{ color: '#FFC107' }}>
                                    {t('services2.title')}
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="header-slider-nav">
                                <div onClick={projectNextSlide} className="swiper-button-next"></div>
                                <div onClick={projectPrevSlide} className="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-slider2 swiper">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        onSwiper={(swiper) => {
                                            swiperRefProject.current = swiper;
                                        }}
                                        modules={[Navigation, Autoplay, Pagination]}
                                        loop={true}
                                        spaceBetween={30}
                                        speed={600}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false
                                        }}
                                        pagination={{
                                            el: ".ct-pagination .swiper-pagination",
                                            clickable: true
                                        }}
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            992: {
                                                slidesPerView: 3
                                            },
                                            1400: {
                                                slidesPerView: "auto"
                                            }
                                        }}
                                    >
                                        {servicesData.map((service, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-slide">
                                                    <div className="service-card2 round bg-info">
                                                        <div
                                                            className="serv-thumb"
                                                            style={{
                                                                backgroundImage: `url(${service.backgroundImage})`,
                                                            }}
                                                        >
                                                            <span className="icon round-2">
                                                                <img src={service.icon} />
                                                            </span>
                                                        </div>
                                                        <h3 className="display-4">
                                                            <Link to={service.link}>
                                                                {service.title}
                                                            </Link>
                                                        </h3>
                                                        <p>{service.description}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services Section End */}
            {/* Choose Section Start */}
            <section
                className="choose-sec2 bg-cover sec-padding"
                style={{ backgroundImage: `url(${ChooseBg})`, backgroundColor: '#020e28' }}
            >
                <div className="container">
                    <div className="sec-intro mx-auto text-center">
                        <span className="sub-title2 fadeInUp" style={{ color: '#FFC107' }}>
                            {t('services2.choose.subtitle')}
                        </span>
                        <h2 className="sec-title" style={{ color: '#FFC107' }}>
                            <TextAnimation animationStyle="style1">
                                {t('services2.choose.title')}
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="row g-1">
                        <div className="col-lg-3 col-sm-6">
                            <FadeInAdvanced className="single-choose fadeInUp" variant="fadeInUp">
                                <h3 className="display-6 fw-bold">
                                    {t('services2.seaFreight')}
                                </h3>
                                <span className="icon bg-primary">
                                    <img src={Water} alt="Fan" />
                                </span>
                            </FadeInAdvanced>
                            <FadeInAdvanced className="single-choose fadeInUp" variant="fadeInUp">
                                <h3 className="display-6 fw-bold">
                                    {t('services2.airShipping')}
                                </h3>
                                <span className="icon bg-primary">
                                    <img src={AirHeat} alt="Fan" />
                                </span>
                            </FadeInAdvanced>
                            <FadeInAdvanced className="single-choose fadeInUp" variant="fadeInUp">
                                <h3 className="display-6 fw-bold">
                                    {t('services2.landTransport')}
                                </h3>
                                <span className="icon bg-primary">
                                    <img src={Fan} alt="Fan" />
                                </span>
                            </FadeInAdvanced>
                        </div>
                        <div className="col-lg-6 d-sm-none d-lg-block">
                            <div className="choose-media">
                                <img src={ChooseMain} className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 reverse-choose">
                            <FadeInAdvanced delay={100} className="single-choose fadeInUp" variant="fadeInUp">
                                <h3 className="display-6 fw-bold">
                                    {t('services2.airConsulting')}
                                </h3>
                                <span className="icon bg-primary">
                                    <img src={Celling} alt="Fan" />
                                </span>
                            </FadeInAdvanced>
                            <FadeInAdvanced delay={100} className="single-choose fadeInUp" variant="fadeInUp">
                                <h3 className="display-6 fw-bold">
                                    {t('services2.packingHandling')}
                                </h3>
                                <span className="icon bg-primary">
                                    <img src={AcCond} alt="Fan" />
                                </span>
                            </FadeInAdvanced>
                            <FadeInAdvanced delay={100} className="single-choose fadeInUp" variant="fadeInUp">
                                <h3 className="display-6 fw-bold">
                                    {t('services2.floorPlanning')}
                                </h3>
                                <span className="icon bg-primary">
                                    <img src={FloorHeat} alt="Fan" />
                                </span>
                            </FadeInAdvanced>
                        </div>
                    </div>
                </div>
            </section>
            {/* Choose Section End */}
        </>
    );
}
