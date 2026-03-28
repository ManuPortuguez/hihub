import Shop1 from "@/images/shop1.jpg";
import Shop8 from "@/images/shop8.jpg";
import Shop2 from "@/images/shop2.jpg";
import Shop5 from "@/images/shop5.jpg";
import Shop4 from "@/images/shop4.jpg";
import Shop6 from "@/images/shop6.jpg";
import Shop7 from "@/images/shop7.jpg";
import Shop9 from "@/images/shop9.jpg";
import Shop3 from "@/images/shop3.jpg";

export interface ShopItem {
    id: number;
    image: string;
    title: string;
    price: number;
    oldPrice: number;
    badge?: string;
}

export const shopData: ShopItem[] = [
    {
        id: 1,
        image: Shop1,
        title: "A Design Manifesto",
        price: 27.00,
        oldPrice: 45.24,
        badge: "New"
    },
    {
        id: 2,
        image: Shop8,
        title: "Clean Water safe life",
        price: 27.00,
        oldPrice: 45.24
    },
    {
        id: 3,
        image: Shop2,
        title: "3d Dinning Table Pro",
        price: 27.00,
        oldPrice: 45.24
    },
    {
        id: 4,
        image: Shop5,
        title: "Vintage Canvas Travel Backpack",
        price: 27.00,
        oldPrice: 45.24
    },
    {
        id: 5,
        image: Shop4,
        title: "Turf Shoe Nike Mercurial Vapor",
        price: 27.00,
        oldPrice: 45.24,
        badge: "Top"
    },
    {
        id: 6,
        image: Shop6,
        title: "Ultra-Soft Knitted Throw Blanket",
        price: 27.00,
        oldPrice: 45.24
    },
    {
        id: 7,
        image: Shop7,
        title: "Elegant Stainless Steel Wristwatch",
        price: 27.00,
        oldPrice: 45.24,
        badge: "New"
    },
    {
        id: 8,
        image: Shop9,
        title: "Natural Glow Hydrating Face Cream",
        price: 27.00,
        oldPrice: 45.24,
        badge: "New"
    },
    {
        id: 9,
        image: Shop1,
        title: "Handmade Ceramic Coffee Mug",
        price: 27.00,
        oldPrice: 45.24
    },
    {
        id: 10,
        image: Shop2,
        title: "Wireless Noise-Cancelling Headphones",
        price: 27.00,
        oldPrice: 45.24
    },
    {
        id: 11,
        image: Shop3,
        title: "Modern Minimalist Leather Wallet",
        price: 27.00,
        oldPrice: 45.24,
        badge: "Popular"
    },
    {
        id: 12,
        image: Shop4,
        title: "Classic Cotton Crewneck T-Shirt",
        price: 27.00,
        oldPrice: 45.24,
        badge: "New"
    },
    {
        id: 13,
        image: Shop2,
        title: "3d Dinning Table Pro",
        price: 27.00,
        oldPrice: 45.24
    },
    {
        id: 14,
        image: Shop5,
        title: "Vintage Canvas Travel Backpack",
        price: 27.00,
        oldPrice: 45.24
    },
    {
        id: 15,
        image: Shop4,
        title: "Turf Shoe Nike Mercurial Vapor",
        price: 27.00,
        oldPrice: 45.24,
        badge: "Top"
    },
    {
        id: 16,
        image: Shop6,
        title: "Ultra-Soft Knitted Throw Blanket",
        price: 27.00,
        oldPrice: 45.24
    },
    {
        id: 17,
        image: Shop7,
        title: "Elegant Stainless Steel Wristwatch",
        price: 27.00,
        oldPrice: 45.24,
        badge: "New"
    },
    {
        id: 18,
        image: Shop9,
        title: "Natural Glow Hydrating Face Cream",
        price: 27.00,
        oldPrice: 45.24,
        badge: "New"
    },
];
