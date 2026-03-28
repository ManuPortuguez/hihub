// Import client logos
import Aldi from "@/images/clients/aldi.png";
import Apris from "@/images/clients/apris.png";
import Auchan from "@/images/clients/auchan.png";
import Colitas from "@/images/clients/colitas.png";
import DogPaper from "@/images/clients/dogPaper.png";
import Ice from "@/images/clients/ice.png";
import Ilumex from "@/images/clients/ilumex.png";
import Inditex from "@/images/clients/inditex.png";
import Logo212 from "@/images/clients/logo212.png";
import Logo213 from "@/images/clients/logo213.png";
import Logo216 from "@/images/clients/logo216.png";
import Sikai from "@/images/clients/sikai.png";
import Taboga from "@/images/clients/taboga-new.png";

// Type definition
export interface Brand {
    id: number;
    image: string;
    alt: string;
    link: string;
}

// Clients data
export const brandsData: Brand[] = [
    {
        id: 1,
        image: Aldi,
        alt: "Aldi",
        link: "#"
    },
    {
        id: 2,
        image: Inditex,
        alt: "Inditex",
        link: "#"
    },
    {
        id: 3,
        image: Auchan,
        alt: "Auchan",
        link: "#"
    },
    {
        id: 4,
        image: Apris,
        alt: "Apris",
        link: "#"
    },
    {
        id: 5,
        image: Ilumex,
        alt: "Ilumex",
        link: "#"
    },
    {
        id: 6,
        image: Taboga,
        alt: "Taboga",
        link: "#"
    },
    {
        id: 7,
        image: Sikai,
        alt: "Sikai",
        link: "#"
    },
    {
        id: 8,
        image: Ice,
        alt: "Ice",
        link: "#"
    },
    {
        id: 9,
        image: Colitas,
        alt: "Colitas",
        link: "#"
    },
    {
        id: 10,
        image: DogPaper,
        alt: "Dog Paper",
        link: "#"
    },
    {
        id: 11,
        image: Logo212,
        alt: "Client",
        link: "#"
    },
    {
        id: 12,
        image: Logo213,
        alt: "Client",
        link: "#"
    },
    {
        id: 13,
        image: Logo216,
        alt: "Client",
        link: "#"
    }
];