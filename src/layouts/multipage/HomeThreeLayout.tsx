import { Outlet } from "react-router-dom";
import Header from "@/components/headers/header-three/Header";
import Footer from "@/components/footers/Footer";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
export default function HomeThreeLayout() {
    return (
        <SuspenseWrapper>
            <Header />
            <Outlet />
            <Footer />
        </SuspenseWrapper>
    );
}
