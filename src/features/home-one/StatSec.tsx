import Stat1 from "@/images/stat1.png";
import Sta2 from "@/images/sta2.png";
import Stat3 from "@/images/stat3.png";
import Stat4 from "@/images/stat4.png";
import StatBg from "@/images/stat-bg.jpg";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import CounterUp from "@/components/elements/CounterUp";

export default function StatSec() {
    return (
        <>
            {/* Stat Section End */}
            <section
                className="stat-sec"
                style={{ backgroundImage: `url(${StatBg})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <FadeInAdvanced variant="fadeInUp" delay={200}>
                                <div
                                    className="single-stat fadeInUp"
                                >
                                    <img src={Stat1} alt="Stat" />
                                    <div className="stat-info">
                                        <h3 className="display-3 text-white">
                                            <span className=" purecounter">
                                                <CounterUp ending={1000} />
                                            </span>
                                            +
                                        </h3>
                                        <p>Clientes</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <FadeInAdvanced variant="fadeInUp" delay={400}>
                                <div
                                    className="single-stat fadeInUp"
                                    data-delay=".4"
                                >
                                    <img src={Sta2} alt="Stat" />
                                    <div className="stat-info">
                                        <h3 className="display-3 text-white">
                                            <span className=" purecounter">
                                                <CounterUp ending={98} />
                                            </span>
                                            %
                                        </h3>
                                        <p>Satisfacción del Cliente</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <FadeInAdvanced variant="fadeInUp" delay={600}>
                                <div
                                    className="single-stat fadeInUp"
                                >
                                    <img src={Stat3} alt="Stat" />
                                    <div className="stat-info">
                                        <h3 className="display-3 text-white">
                                            <span className=" purecounter">
                                                <CounterUp ending={10} />
                                            </span>
                                            +
                                        </h3>
                                        <p>Años de Experiencia</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <FadeInAdvanced variant="fadeInUp" delay={800}>
                                <div
                                    className="single-stat fadeInUp"
                                    data-delay=".8"
                                >
                                    <img src={Stat4} alt="Stat" />
                                    <div className="stat-info">
                                        <h3 className="display-3 text-white">
                                            <span className=" purecounter">
                                                <CounterUp ending={1} />
                                            </span>
                                        </h3>
                                        <p>Oficina en China sobre el Terreno</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>

                        </div>
                    </div>
                </div>
            </section>
            {/* Stat Section Start */}
        </>
    );
}
