import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

import HomeOneLayout from "@/layouts/multipage/HomeOneLayout";
import HomeOne from "@/home/HomeOne";
import HomeTwoLayout from "@/layouts/multipage/HomeTwoLayout";
import HomeTwo from "@/home/HomeTwo";
import HomeThreeLayout from "@/layouts/multipage/HomeThreeLayout";
import HomeThree from "@/home/HomeThree";
import Services from "@/pages/Services";
import Services2 from "@/pages/Services2";
import SingleService from "@/pages/SingleService";
import About from "@/pages/About";
import Quote from "@/pages/Quote";
import Tracking from "@/pages/Tracking";
import Team from "@/pages/Team";
import SingleTeam from "@/pages/SingleTeam";
import Shop from "@/pages/Shop";
import SingleProduct from "@/pages/SingleProduct";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Pricing from "@/pages/Pricing";
import Faq from "@/pages/Faq";
import Error404 from "@/pages/Error404";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudies2 from "@/pages/CaseStudies2";
import SingleCasestudy from "@/pages/SingleCasestudy";
import Blog from "@/pages/Blog";
import Blog2 from "@/pages/Blog2";
import BlogClassic from "@/pages/BlogClassic";
import SinglePost from "@/pages/SinglePost";
import SinglePost2 from "@/pages/SinglePost2";
import Contact from "@/pages/Contact";
import DefaultLayout from "@/layouts/DefaultLayout";

const ROUTER = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <HomeTwoLayout />,
                children: [
                    {
                        path: "/",
                        element: <HomeTwo />,
                    },
                    {
                        path: "/index-2",
                        element: <HomeTwo />,
                    },
                ],
            },
            {
                element: <HomeOneLayout />,
                children: [
                    {
                        path: "/index-1",
                        element: <HomeOne />,
                    },
                ],
            },
            {
                element: <HomeThreeLayout />,
                children: [
                    {
                        path: "/index-3",
                        element: <HomeThree />,
                    },
                ],
            },
            {
                element: <DefaultLayout />,
                children: [
                    {
                        path: "/services",
                        element: <Services />,
                    },
                    {
                        path: "/services-2",
                        element: <Services2 />,
                    },
                    {
                        path: "/single-service",
                        element: <SingleService />,
                    },
                    {
                        path: "/about",
                        element: <About />,
                    },
                    {
                        path: "/quote",
                        element: <Quote />,
                    },
                    {
                        path: "/tracking",
                        element: <Tracking />,
                    },
                    {
                        path: "/team",
                        element: <Team />,
                    },
                    {
                        path: "/single-team",
                        element: <SingleTeam />,
                    },
                    {
                        path: "/shop",
                        element: <Shop />,
                    },
                    {
                        path: "/single-product",
                        element: <SingleProduct />,
                    },
                    {
                        path: "/cart",
                        element: <Cart />,
                    },
                    {
                        path: "/checkout",
                        element: <Checkout />,
                    },
                    {
                        path: "/login",
                        element: <Login />,
                    },
                    {
                        path: "/register",
                        element: <Register />,
                    },
                    {
                        path: "/pricing",
                        element: <Pricing />,
                    },
                    {
                        path: "/faq",
                        element: <Faq />,
                    },
                    {
                        path: "/404",
                        element: <Error404 />,
                    },
                    {
                        path: "/case-studies",
                        element: <CaseStudies />,
                    },
                    {
                        path: "/case-studies-2",
                        element: <CaseStudies2 />,
                    },
                    {
                        path: "/single-casestudy",
                        element: <SingleCasestudy />,
                    },
                    {
                        path: "/blog",
                        element: <Blog />,
                    },
                    {
                        path: "/blog-2",
                        element: <Blog2 />,
                    },
                    {
                        path: "/blog-classic",
                        element: <BlogClassic />,
                    },
                    {
                        path: "/single-post",
                        element: <SinglePost />,
                    },
                    {
                        path: "/single-post-2",
                        element: <SinglePost2 />,
                    },
                    {
                        path: "/contact",
                        element: <Contact />,
                    },
                    {
                        path: "*",
                        element: <Error404 />,
                    },
                ],
            },
        ],
    },
]);

export default ROUTER;
