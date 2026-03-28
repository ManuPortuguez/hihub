import { useCallback, useMemo, useState } from "react";
import ProjectContext from "./ProjectContext";
import type { contextType } from "@/types/context";

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [showVideoPopup, setShowVideoPopup] = useState<boolean>(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");
    const [cartCount, setCartCount] = useState<number>(3);

    const handleVideoClick = useCallback((
        e: React.MouseEvent<HTMLAnchorElement>,
        videoUrl: string = "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1",
    ): void => {
        e.preventDefault();
        setCurrentVideoUrl(videoUrl);
        setShowVideoPopup(true);
    }, [setCurrentVideoUrl, setShowVideoPopup]);

    const info: contextType = useMemo(() => ({
        isMobile,
        setIsMobile,
        isSidebar,
        setIsSidebar,
        isSearch,
        setIsSearch,
        showVideoPopup,
        setShowVideoPopup,
        currentVideoUrl,
        setCurrentVideoUrl,
        handleVideoClick,
        cartCount,
        setCartCount
    }), [
        isMobile,
        setIsMobile,
        isSidebar,
        setIsSidebar,
        isSearch,
        setIsSearch,
        showVideoPopup,
        setShowVideoPopup,
        currentVideoUrl,
        setCurrentVideoUrl,
        handleVideoClick,
        cartCount,
        setCartCount
    ]);

    return (
        <ProjectContext.Provider value={info}>{children}</ProjectContext.Provider>
    );
};

export default ContextProvider;