import { Outlet } from "react-router-dom";
import Header from "@/components/headers/header-one/Header";
import Footer from "@/components/footers/Footer";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />

            <Footer />
        </>
    );
}
