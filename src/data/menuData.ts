export interface MenuItem {
    label: string;
    path?: string;
    key: string;
    children?: MenuItem[];
    isHeader?: boolean;
    badge?: string;
    // For path matching logic
    matchPaths?: string[];
}

export const menuData: MenuItem[] = [
    {
        label: "Home",
        key: "home",
        path: "/",
        matchPaths: ["/", "/index-2"],
    },
    {
        label: "Services",
        key: "services",
        path: "/#services",
    },
    {
        label: "Clients",
        key: "clients",
        path: "/#clients",
    },
    {
        label: "Contact",
        key: "contact",
        path: "/#contact",
    },
    ];
