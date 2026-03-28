// Type definition
export interface ReviewType {
    id: number;
    text: string;
    author?: string;
    position?: string;
    company?: string;
}

// Reviews/Testimonials data
export const reviewsData: ReviewType[] = [
    {
        id: 1,
        text: "TransHub has transformed our supply chain with their reliable and efficient Logistics solutions. Their team is responsive and always goes the extra mile to ensure timely deliveries. Highly recommended!"
    },
    {
        id: 2,
        text: "Arki features minimal and stylish design. The theme is well crafted for all the modern architect and interior design website. With Arki, it makes your logistic website look even more attractive and impressive to"
    },
    {
        id: 3,
        text: "TransHub has transformed our supply chain with their reliable and efficient Logistics solutions. Their team is responsive and always goes the extra mile to ensure timely deliveries. Highly recommended!"
    }
];
