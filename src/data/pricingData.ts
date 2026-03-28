export interface PricingPlan {
    id: number;
    title: string;
    description: string;
    price: number;
    duration: string;
    features: string[];
    link: string;
}

export const monthlyPricingData: PricingPlan[] = [
    {
        id: 1,
        title: "Starter",
        description: "Essential tools for individuals and small teams just getting started.",
        price: 29,
        duration: "/month",
        features: [
            "Up to 3 team members",
            "5 GB cloud storage",
            "Basic analytics dashboard",
            "Email support (48hr response)",
            "Mobile app access",
            "Monthly performance reports",
            "Standard security features",
            "Community forum access",
        ],
        link: "#",
    },
    {
        id: 2,
        title: "Professional",
        description: "Advanced features for growing businesses ready to scale.",
        price: 79,
        duration: "/month",
        features: [
            "Up to 15 team members",
            "50 GB cloud storage",
            "Advanced analytics & reporting",
            "Priority email & chat support",
            "Custom branding options",
            "API access",
            "Automated workflows",
        ],
        link: "#",
    },
    {
        id: 3,
        title: "Enterprise",
        description: "Complete solution with dedicated support for large organizations.",
        price: 199,
        duration: "/month",
        features: [
            "Unlimited team members",
            "500 GB cloud storage",
            "Real-time analytics & insights",
            "24/7 phone & chat support",
            "White-label solutions",
            "Advanced API & integrations",
            "Dedicated account manager",
            "Custom SLA agreements",
        ],
        link: "#",
    },
];

export const yearlyPricingData: PricingPlan[] = [
    {
        id: 1,
        title: "Starter",
        description: "Essential tools for individuals and small teams just getting started.",
        price: 290,
        duration: "/year",
        features: [
            "Up to 3 team members",
            "5 GB cloud storage",
            "Basic analytics dashboard",
            "Email support (48hr response)",
            "Mobile app access",
            "Monthly performance reports",
            "Standard security features",
            "Community forum access",
        ],
        link: "#",
    },
    {
        id: 2,
        title: "Professional",
        description: "Advanced features for growing businesses ready to scale.",
        price: 790,
        duration: "/year",
        features: [
            "Up to 15 team members",
            "50 GB cloud storage",
            "Advanced analytics & reporting",
            "Priority email & chat support",
            "Custom branding options",
            "API access",
            "Automated workflows",
        ],
        link: "#",
    },
    {
        id: 3,
        title: "Enterprise",
        description: "Complete solution with dedicated support for large organizations.",
        price: 1990,
        duration: "/year",
        features: [
            "Unlimited team members",
            "500 GB cloud storage",
            "Real-time analytics & insights",
            "24/7 phone & chat support",
            "White-label solutions",
            "Advanced API & integrations",
            "Dedicated account manager",
            "Custom SLA agreements",
        ],
        link: "#",
    },
];