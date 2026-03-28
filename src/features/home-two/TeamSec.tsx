import { Link } from "react-router-dom";
import { teamData } from "@/data/teamData";
import SlideSh1 from "@/images/slide-sh1.png";
import TextAnimation from "@/components/elements/TextAnimation";

export default function TeamSec() {
    // Get only the first 4 team members
    const featuredTeam = teamData.slice(0, 4);

    return (
        <>
            {/* Team Section Start */}
            <section className="team-sec sec-padding position-relative">
                <img
                    src={SlideSh1}
                    alt="icon"
                    className="abs-img d-none d-lg-block top-0 stat-0"
                />
                <div className="container">
                    <div className="sec-intro mx-auto text-center">
                        <span className="sub-title2 fadeInUp">
                            <TextAnimation animationStyle="style1">
                                Export / Import
                            </TextAnimation>
                        </span>
                        <h2 className="sec-title">
                            <TextAnimation animationStyle="style1">
                                Meet the Team Behind<br /> Your Operations in China
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="row gy-5">
                        {featuredTeam.map((member) => (
                            <div key={member.id} className="col-lg-3 col-sm-6">
                                <div className="team-card">
                                    <div className="team-thumb round overflow-hidden">
                                        <Link to={member.link}>
                                            <img src={member.image} alt={member.name} />
                                        </Link>
                                        <div className="team-share">
                                            <a
                                                className="icon link-icon rounded-circle"
                                                href="#"
                                            >
                                                <i className="fa-solid fa-link"></i>
                                            </a>
                                            <div className="social-share">
                                                {member.socialLinks.map((social, index) => (
                                                    <Link key={index} to={social.url}>
                                                        <i className={social.icon}></i>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h3 className="display-4 mb-0">
                                            <Link to={member.link}>
                                                {member.name}
                                            </Link>
                                        </h3>
                                        <span>{member.position}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Team Section End */}
        </>
    );
}