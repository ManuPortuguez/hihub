import { useContext } from "react";
import ProjectContext from "@/components/context/ProjectContext";
import { Outlet } from "react-router-dom";
import SideBar from "@/components/elements/SideBar";
import SearchProp from "@/components/elements/SearchProp";
import ScrollToTop from "@/components/elements/ScrollToTop";
import ErrorBoundary from "@/components/elements/ErrorBoundary";


export default function App() {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context is null");
    const { isMobile, isSearch, setIsSearch, isSidebar, setIsSidebar } = context;
    return (
        <ErrorBoundary name="Main App">
            <div className={`custom-cursor ${isMobile ? "locked" : ""} ${isSearch ? "search-active" : ""}`}>
                <div onClick={() => {
                    setIsSidebar(false);
                    setIsSearch(false);
                }}
                    className={`main-overlay ${isSidebar || isSearch ? 'active' : ''}  `}>
                </div>
                <Outlet />
                <SideBar />
                <SearchProp />
                <ScrollToTop />
            </div>
        </ErrorBoundary >
    );
}
