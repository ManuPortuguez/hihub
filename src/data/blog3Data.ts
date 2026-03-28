import BlS1 from "@/images/bl-s1.png";
import BlS2 from "@/images/bl-s2.png";
import BlS3 from "@/images/bl-s3.png";
import FBlog from "@/images/f-blog.jpg";

// Type definition
export interface BlogPost3Type {
    id: number;
    title: string;
    author: string;
    authorLink: string;
    date: string;
    dateLink: string;
    image: string;
    link: string;
    featured?: boolean; // For the main featured post
}

// Blog posts data
export const blog3Data: BlogPost3Type[] = [
    {
        id: 1,
        title: "Offered Coverage Flexibility in logistic Exports & Imports",
        author: "Adam Smith",
        authorLink: "#",
        date: "07 Nov,2025",
        dateLink: "#",
        image: FBlog,
        link: "/single-post",
        featured: true
    },
    {
        id: 2,
        title: "Offered Coverage Flexibility in logistic Exports & Imports",
        author: "Adam Smith",
        authorLink: "#",
        date: "07 Nov,2025",
        dateLink: "#",
        image: BlS1,
        link: "/single-post"
    },
    {
        id: 3,
        title: "The Advantages of a Digital Supply Strategy",
        author: "Adam Smith",
        authorLink: "#",
        date: "07 Nov,2025",
        dateLink: "#",
        image: BlS2,
        link: "/single-post"
    },
    {
        id: 4,
        title: "How To Get Hired In Supply Chain & Logistics?",
        author: "Adam Smith",
        authorLink: "#",
        date: "07 Nov,2025",
        dateLink: "#",
        image: BlS3,
        link: "/single-post"
    }
];

// Get featured post (first one marked as featured)
export const getFeaturedPost = () => blog3Data.find(post => post.featured);

// Get regular posts (non-featured)
export const getRegularPosts = () => blog3Data.filter(post => !post.featured);