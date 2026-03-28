import { Link } from "react-router-dom";
import Promo from "@/images/promo.jpg";
import JarallaxSection from "@/components/elements/JarallaxSection";

interface PHProps {
    /** @default "Welcome" */
    title?: React.ReactNode;
    /** @default "Go To Home" */
    subtitle?: string;
}

export default function PageHeader({
    title = "Welcome",
    subtitle = "Go To Home",
}: PHProps) {
    return (
        <JarallaxSection
            className="promo-sec bg-cover"
            imgSrc={Promo}
            speed={0.4}
            overlayOpacity={.6}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="promo-wrap">
                            <h1 className="display-2 text-info">{title}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        {subtitle}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </JarallaxSection>
    );
}