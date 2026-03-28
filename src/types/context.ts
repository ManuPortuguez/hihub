import type { Dispatch, SetStateAction, MouseEvent } from "react";

export interface contextType {
    isMobile: boolean;
    setIsMobile: Dispatch<SetStateAction<boolean>>;
    isSidebar: boolean;
    setIsSidebar: Dispatch<SetStateAction<boolean>>;
    isSearch: boolean;
    setIsSearch: Dispatch<SetStateAction<boolean>>;
    showVideoPopup: boolean;
    setShowVideoPopup: Dispatch<SetStateAction<boolean>>;
    currentVideoUrl: string;
    setCurrentVideoUrl: Dispatch<SetStateAction<string>>;
    handleVideoClick: (e: MouseEvent<HTMLAnchorElement>, videoUrl?: string) => void;
    cartCount: number;
    setCartCount: Dispatch<SetStateAction<number>>; 

}