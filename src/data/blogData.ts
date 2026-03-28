// Blog data types
export interface BlogEntry {
    id: number;
    image: string;
    author: string;
    date: string;
    title: string;
    excerpt?: string;
    category?: string;
}

// Blog images - import paths
export const blogImages = {
    blog1: "@/images/blog1.jpg",
    blog2: "@/images/blog2.jpg",
    blog3: "@/images/blog3.jpg",
    blogN1: "@/images/blog-n1.jpg",
    blogN2: "@/images/blog-n2.jpg",
    blogN3: "@/images/blog-n3.jpg",
    blog4: "@/images/blog4.jpg",
    blog5: "@/images/blog5.jpg",
    blog6: "@/images/blog6.jpg",
    blLg1: "@/images/bl-lg1.jpg",
    blLg2: "@/images/bl-lg2.jpg",
    blLg3: "@/images/bl-lg3.jpg",
    ls1: "@/images/ls1.png",
    ls2: "@/images/ls2.png",
    ls3: "@/images/ls3.png",
};

// Blog entries for grid layout (Document 1)
export const blogGridData: BlogEntry[] = [
    {
        id: 1,
        image: blogImages.blog1,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 2,
        image: blogImages.blog2,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "Creating innovative strategies for secured Transport",
    },
    {
        id: 3,
        image: blogImages.blog3,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "Innovations Shaping the Future of Freight and Logistics",
    },
    {
        id: 4,
        image: blogImages.blogN1,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 5,
        image: blogImages.blogN2,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "Creating innovative strategies for secured Transport",
    },
    {
        id: 6,
        image: blogImages.blogN3,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "Innovations Shaping the Future of Freight and Logistics",
    },
    {
        id: 7,
        image: blogImages.blog1,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 8,
        image: blogImages.blog2,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "Creating innovative strategies for secured Transport",
    },
    {
        id: 9,
        image: blogImages.blog3,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "Innovations Shaping the Future of Freight and Logistics",
    },
    {
        id: 10,
        image: blogImages.blogN2,
        author: "Adam Smith",
        date: "05 Dec 2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
];

// Blog entries for card layout (Document 2)
export const blogCardData: BlogEntry[] = [
    {
        id: 1,
        image: blogImages.blog4,
        author: "Adam Smith",
        date: "07 Nov,2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 2,
        image: blogImages.blog5,
        author: "Adam Smith",
        date: "07 Nov,2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 3,
        image: blogImages.blog6,
        author: "Adam Smith",
        date: "07 Nov,2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 4,
        image: blogImages.blog4,
        author: "Adam Smith",
        date: "07 Nov,2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 5,
        image: blogImages.blog5,
        author: "Adam Smith",
        date: "07 Nov,2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 6,
        image: blogImages.blog6,
        author: "Adam Smith",
        date: "07 Nov,2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 7,
        image: blogImages.blog4,
        author: "Adam Smith",
        date: "07 Nov,2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 8,
        image: blogImages.blog5,
        author: "Adam Smith",
        date: "07 Nov,2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 9,
        image: blogImages.blog6,
        author: "Adam Smith",
        date: "07 Nov,2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
    {
        id: 10,
        image: blogImages.blog4,
        author: "Adam Smith",
        date: "07 Nov,2025",
        title: "TranHub Named a Finalist For Year' 25 Best Choice Award",
    },
];

// Blog entries for standard layout (Document 3)
export const blogStandardData: BlogEntry[] = [
    {
        id: 1,
        image: blogImages.blLg1,
        author: "admin",
        date: "08 October, 2025",
        title: "Focus logistics secure new landmark Contracts",
        excerpt:
            "Air freight is the transportation of goods by aircraft. It's a mode of shipping that prioritizes speed and efficiency, making it ideal for time-sensitive and high-value cargo. While it is generally more expensive than ocean freight, the rapid delivery time often justifies the cost for many businesses.",
        category: "Air Fright",
    },
    {
        id: 2,
        image: blogImages.blLg2,
        author: "admin",
        date: "08 October, 2025",
        title: "Green Logistics Solutions for a Greener Future",
        excerpt:
            "Air freight is the transportation of goods by aircraft. It's a mode of shipping that prioritizes speed and efficiency, making it ideal for time-sensitive and high-value cargo. While it is generally more expensive than ocean freight, the rapid delivery time often justifies the cost for many businesses.",
        category: "Air Fright",
    },
    {
        id: 3,
        image: blogImages.blLg3,
        author: "admin",
        date: "08 October, 2025",
        title: "The Future of Logistics Emb racing Technology",
        excerpt:
            "Air freight is the transportation of goods by aircraft. It's a mode of shipping that prioritizes speed and efficiency, making it ideal for time-sensitive and high-value cargo. While it is generally more expensive than ocean freight, the rapid delivery time often justifies the cost for many businesses.",
        category: "Air Fright",
    },
    {
        id: 4,
        image: blogImages.blLg1,
        author: "admin",
        date: "08 October, 2025",
        title: "Focus logistics secure new landmark Contracts",
        excerpt:
            "Air freight is the transportation of goods by aircraft. It's a mode of shipping that prioritizes speed and efficiency, making it ideal for time-sensitive and high-value cargo. While it is generally more expensive than ocean freight, the rapid delivery time often justifies the cost for many businesses.",
        category: "Air Fright",
    },
    {
        id: 5,
        image: blogImages.blLg2,
        author: "admin",
        date: "08 October, 2025",
        title: "Green Logistics Solutions for a Greener Future",
        excerpt:
            "Air freight is the transportation of goods by aircraft. It's a mode of shipping that prioritizes speed and efficiency, making it ideal for time-sensitive and high-value cargo. While it is generally more expensive than ocean freight, the rapid delivery time often justifies the cost for many businesses.",
        category: "Air Fright",
    },
];

// Latest blog entries for sidebar
export const latestBlogData: BlogEntry[] = [
    {
        id: 1,
        image: blogImages.ls1,
        date: "22 Oct, 2025",
        title: "TranHub Embraces AI for Optimized Route",
        author: "",
    },
    {
        id: 2,
        image: blogImages.ls2,
        date: "22 Oct, 2025",
        title: "How is Adapting to Meet Growing Demand",
        author: "",
    },
    {
        id: 3,
        image: blogImages.ls3,
        date: "22 Oct, 2025",
        title: "TransHub Commitment to Eco-Friendly",
        author: "",
    },
];

// Categories data
export const blogCategories = [
    { name: "Air Freight", count: 18 },
    { name: "Road Transport", count: 2 },
    { name: "Rail Transport", count: 12 },
    { name: "Cargo Services", count: 14 },
    { name: "Warehouse", count: 19 },
    { name: "Ocean Freight", count: 18 },
];

// Tags/Keywords data
export const blogTags = [
    "Logistics Services",
    "Warehouse",
    "air fright",
    "Ocean Freight",
    "Global",
    "community",
];