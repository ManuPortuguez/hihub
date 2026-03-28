import JarallaxSection from "@/components/elements/JarallaxSection";
import YoutubeFrem from "@/components/elements/YoutubeFrem";
import Video1 from "@/images/video1.jpg";

export default function VideoSec3() {
    return (
        <>
            {/* Video Section Start */}
            <JarallaxSection className="video-sec3 sec-padding jarallax" imgSrc={Video1} overlayOpacity={.5} speed={.3}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="video-content">
                                <YoutubeFrem className="play-btn bg-info rounded-circle text-primary icon-xl" video="rbFoRH2deeY">
                                    <span>
                                        <i className="fa fa-play"></i>
                                    </span>
                                </YoutubeFrem>
                                <h2 className="display-1 fw-bold">
                                    Change the Experience of Transportation
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </JarallaxSection>
            {/* Video Section End */}
        </>
    );
}
