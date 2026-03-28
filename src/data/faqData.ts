// Type definitions
export interface FaqItemType {
    id: number;
    question: string;
    answer: string;
    isOpen?: boolean;
}

export interface FreightOptionType {
    id: number;
    value: string;
    label: string;
}

// FAQ items data
export const faqData: FaqItemType[] = [
    {
        id: 1,
        question: "How can I track my shipment?",
        answer: "You can easily track your shipment by entering your Tracking ID into our online tracking tool. Once submitted, you'll receive real‑time updates on your shipment's location, delivery.",
        isOpen: true // First item open by default
    },
    {
        id: 2,
        question: "How do I get in touch with customer support?",
        answer: "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects are completed",
        isOpen: false
    },
    {
        id: 3,
        question: "What if my shipment is delayed or lost?",
        answer: "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects are completed",
        isOpen: false
    },
    {
        id: 4,
        question: "Can I schedule recurring shipments?",
        answer: "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects are completed",
        isOpen: false
    },
    {
        id: 5,
        question: "What is your pricing model?",
        answer: "Teachers play a central role in education. They impart knowledge, facilitate learning, and help students develop critical thinking skills. Teachers also contribute to the social and emotional development of students.",
        isOpen: false
    }
];

// Freight options for the appointment form
export const freightOptions: FreightOptionType[] = [
    {
        id: 1,
        value: "sky",
        label: "Freight Sky"
    },
    {
        id: 2,
        value: "ship",
        label: "Freight Ship"
    },
    {
        id: 3,
        value: "road",
        label: "Freight Road"
    },
    {
        id: 4,
        value: "rail",
        label: "Freight Rail"
    }
];