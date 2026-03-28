import Rv1 from "@/images/rv1.png";
import Aut2 from "@/images/aut2.png";
import Aut3 from "@/images/aut3.png";

// Type definitions
export interface Review3Type {
    id: number;
    text: string;
    rating: number; // Out of 5 (e.g., 4.5)
    author: {
        name: string;
        position: string;
        image: string;
    };
}

// Helper function to generate star icons based on rating
export const getStarIcons = (rating: number): { full: number; half: number; empty: number } => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return { full, half, empty };
};

// Client reviews data
export const reviews3Data: Review3Type[] = [
    {
        id: 1,
        text: '"The transport company provides reliable service and delivers on time. Vehicles are well maintained and staff behavior is professional. A good experience.Customer support is helpful, though response time faster."',
        rating: 4.5,
        author: {
            name: "Sarah Williams",
            position: "Marketing Manager",
            image: Rv1
        }
    },
    {
        id: 2,
        text: '"Good transport company with safe handling of goods and timely delivery. Vehicles are well maintained and staff behavior is professional. They were incredibly helpful and a available to answer my questions."',
        rating: 4.5,
        author: {
            name: "Bessie Cooper",
            position: "Marketing Manager",
            image: Aut2
        }
    },
    {
        id: 3,
        text: '"I was initially hesitant about switching jui logistics providers, but Transhub customer support team made the transition logistic seamless. They were incredibly helpful and a available to answer my questions."',
        rating: 4.5,
        author: {
            name: "Jacob Jones",
            position: "Marketing Manager",
            image: Aut3
        }
    },
    {
        id: 4,
        text: '"I was initially hesitant about switching jui logistics providers, but Transhub customer support team made the transition logistic seamless. They were incredibly helpful and a available to answer my questions."',
        rating: 4.5,
        author: {
            name: "Jacob Jones",
            position: "Marketing Manager",
            image: Rv1
        }
    }
];