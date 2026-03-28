import Port1 from "@/images/port1.jpg";
import Port2 from "@/images/port2.jpg";
import Port4 from "@/images/port4.jpg";
import Port5 from "@/images/port5.jpg";
import Port6 from "@/images/port6.jpg";
import Port7 from "@/images/port7.jpg";
import Port8 from "@/images/port8.jpg";
// Data2
import Sv1 from "@/images/sv1.png";
import Sv2 from "@/images/sv2.png";
import Sv3 from "@/images/sv3.png";
import Sv4 from "@/images/sv4.png";
import Serv5 from "@/images/serv5.jpg";
import Serv6 from "@/images/serv6.jpg";
import Serv7 from "@/images/serv7.jpg";
import Serv8 from "@/images/serv8.jpg";

// Type definitions
export interface ProjectType {
    id: number;
    title: string;
    category: string;
    categoryClass: string;
    image: string;
    link: string;
}
// Type definition
export interface Service3Type {
    id: number;
    title: string;
    description: string;
    backgroundImage: string;
    icon: string;
    link: string;
}
export interface FilterCategoryType {
    id: number;
    label: string;
    filter: string;
}

// Filter categories for portfolio menu
export const filterCategories: FilterCategoryType[] = [
    {
        id: 1,
        label: "All",
        filter: "*"
    },
    {
        id: 2,
        label: "Ocean Freight",
        filter: ".ocean"
    },
    {
        id: 3,
        label: "Air Freight",
        filter: ".air"
    },
    {
        id: 4,
        label: "WareHouse",
        filter: ".warehouse"
    },
    {
        id: 5,
        label: "Road Freight",
        filter: ".road"
    }
];

// Portfolio/Project data
export const projectsData: ProjectType[] = [
    {
        id: 1,
        title: "TransHub Company",
        category: "Wirehouse",
        categoryClass: "warehouse",
        image: Port2,
        link: "/single-casestudy"
    },
    {
        id: 2,
        title: "TransHub Company",
        category: "Wirehouse",
        categoryClass: "ocean",
        image: Port1,
        link: "/single-casestudy"
    },
    {
        id: 3,
        title: "Air Freight Solution",
        category: "Wirehouse",
        categoryClass: "warehouse",
        image: Port2,
        link: "/single-casestudy"
    },
    {
        id: 4,
        title: "Security For Cargo",
        category: "Transport",
        categoryClass: "road",
        image: Port7,
        link: "/single-casestudy"
    },
    {
        id: 5,
        title: "Warehouse Inventory",
        category: "Wirehouse",
        categoryClass: "warehouse",
        image: Port4,
        link: "/single-casestudy"
    },
    {
        id: 6,
        title: "Ocean Inventory",
        category: "Ocean",
        categoryClass: "ocean",
        image: Port5,
        link: "/single-casestudy"
    },
    {
        id: 7,
        title: "Warehouse Inventory",
        category: "Wirehouse",
        categoryClass: "air",
        image: Port6,
        link: "/single-casestudy"
    },
    {
        id: 8,
        title: "Warehouse Inventory",
        category: "Wirehouse",
        categoryClass: "air",
        image: Port8,
        link: "/single-casestudy"
    }
];

export const services3Data: Service3Type[] = [
    {
        id: 1,
        title: "Sea Transport",
        description: "Lorain Air freight service deliver Logistic knowledge opportunity optimize every mile on every lane. Get full-service",
        backgroundImage: Serv5,
        icon: Sv1,
        link: "/single-service"
    },
    {
        id: 2,
        title: "Road Flight",
        description: "Lorain Air freight service deliver Logistic knowledge opportunity optimize every mile on every lane. Get full-service",
        backgroundImage: Serv6,
        icon: Sv2,
        link: "/single-service"
    },
    {
        id: 3,
        title: "Skyline Express",
        description: "Lorain Air freight service deliver Logistic knowledge opportunity optimize every mile on every lane. Get full-service",
        backgroundImage: Serv7,
        icon: Sv3,
        link: "/single-service"
    },
    {
        id: 4,
        title: "Railway Logistic",
        description: "Lorain Air freight service deliver Logistic knowledge opportunity optimize every mile on every lane. Get full-service",
        backgroundImage: Serv8,
        icon: Sv4,
        link: "/single-service"
    },
    {
        id: 5,
        title: "Sea Transport",
        description: "Lorain Air freight service deliver Logistic knowledge opportunity optimize every mile on every lane. Get full-service",
        backgroundImage: Serv5,
        icon: Sv1,
        link: "/single-service"
    },
    {
        id: 6,
        title: "Road Flight",
        description: "Lorain Air freight service deliver Logistic knowledge opportunity optimize every mile on every lane. Get full-service",
        backgroundImage: Serv6,
        icon: Sv2,
        link: "/single-service"
    }
];
