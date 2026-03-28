import { Outlet } from "react-router-dom";
import Header from "@/components/headers/header-two/Header";
import Footer from "@/components/footers/Footer";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
export default function HomeTwoLayout() {
    return (
        <SuspenseWrapper>
            <Header />
            <Outlet />
            <Footer />
        </SuspenseWrapper>
    );
}
