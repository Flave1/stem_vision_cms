import { Route, Routes, useNavigate } from "react-router-dom"
import { app_routes } from "./routes";
import Home from "../components/Landing-Page/home";
import SignIn from "../components/authentication/sign-in";
import FirstTimeLoginPassswordChange from "../components/authentication/change-password-on-login";
import SignUp from "../components/authentication/sign-up";
import Index from "../components/dashboard";
import { dashboard_routes } from "./fws-path-locations";
import Products from "../components/fws-admin/fws-product-list";
import UserProducts from "../components/fws-admin/fws-user-product-list";
import ContactUs from "../components/Landing-Page/contactus";
import AboutUs from "../components/Landing-Page/aboutus";
import HomeHeader from "../components/Landing-Page/header";
import HomeFooter from "../components/Landing-Page/footer";



const IndexRouter = () => {

    const navigate = useNavigate();
    return (
        <>
            {/* <WrapperComponent> */}

            <HomeHeader />
            <Routes>
                <Route path={app_routes.index} element={<Home navigate={navigate} />} />
                <Route path={app_routes.authentication.sign_in} element={<SignIn />} />
                <Route path={app_routes.contact_us} element={<ContactUs navigate={navigate} />} />
                <Route path={app_routes.contact_us} element={<AboutUs />} />
                <Route path={app_routes.authentication.firstTimeLogin} element={<FirstTimeLoginPassswordChange />} />
                <Route path={app_routes.authentication.register} element={<SignUp />} />
                <Route path={dashboard_routes.dashboard} element={<Index />} />
                <Route path={dashboard_routes.productsLocations.products} element={<Products />} />
                <Route path={dashboard_routes.productsLocations.userProductDetails} element={<UserProducts />} />
            </Routes>
            <HomeFooter />

            {/* </WrapperComponent> */}
        </>
    );
}

export default IndexRouter;
