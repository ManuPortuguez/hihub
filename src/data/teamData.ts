import Tm1 from "@/images/tm1.jpg";
import Tm2 from "@/images/tm2.jpg";
import Tm3 from "@/images/tm3.jpg";
import Tm4 from "@/images/tm4.jpg";

// Type definitions
export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface TeamMemberType {
    id: number;
    name: string;
    position: string;
    image: string;
    link: string;
    socialLinks: SocialLink[];
}

// Default social links (can be customized per team member if needed)
const defaultSocialLinks: SocialLink[] = [
    {
        platform: "facebook",
        url: "#",
        icon: "fab fa-facebook-f"
    },
    {
        platform: "twitter",
        url: "#",
        icon: "fab fa-x-twitter"
    },
    {
        platform: "instagram",
        url: "#",
        icon: "fab fa-instagram"
    },
    {
        platform: "linkedin",
        url: "#",
        icon: "fab fa-linkedin-in"
    }
];

// Team members data
export const teamData: TeamMemberType[] = [
    {
        id: 1,
        name: "Jenny Noah",
        position: "Head of operations",
        image: Tm1,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 2,
        name: "Jenny Mache",
        position: "Head of operations",
        image: Tm2,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 3,
        name: "Sofia Melisa",
        position: "Project Manager",
        image: Tm3,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 4,
        name: "Shane Darren",
        position: "Head of operations",
        image: Tm4,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 5,
        name: "Jenny Noah",
        position: "Head of operations",
        image: Tm4,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 6,
        name: "Jenny Mache",
        position: "Head of operations",
        image: Tm3,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 7,
        name: "Sofia Melisa",
        position: "Project Manager",
        image: Tm2,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    },
    {
        id: 8,
        name: "Shane Darren",
        position: "Head of operations",
        image: Tm1,
        link: "/single-team",
        socialLinks: defaultSocialLinks
    }
];