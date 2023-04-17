import { Route, Routes, useNavigate } from "react-router-dom"
import { app_routes } from "./routes";
import Home from "../components/Landing-Page/home";
import SignIn from "../components/authentication/sign-in";
import FirstTimeLoginPassswordChange from "../components/authentication/change-password-on-login";
import SignUp from "../components/authentication/sign-up";


import ContactUs from "../components/Landing-Page/contactus";
import AboutUs from "../components/Landing-Page/aboutus";
import HomeHeader from "../components/Landing-Page/header";
import HomeFooter from "../components/Landing-Page/footer";



const IndexRouter = () => {

    const navigate = useNavigate();
    return (
        <>
            <HomeHeader />
            <Routes >
                <Route path={app_routes.index} element={<Home navigate={navigate} />} />
                <Route path={app_routes.authentication.sign_in} element={<SignIn navigate={navigate}/>} />
                <Route path={app_routes.contact_us} element={<ContactUs navigate={navigate} />} />
                <Route path={app_routes.about_us} element={<AboutUs />} />
                <Route path={app_routes.authentication.firstTimeLogin} element={<FirstTimeLoginPassswordChange />} />
                <Route path={app_routes.authentication.register} element={<SignUp />} />
            </Routes>
            <HomeFooter />
        </>
    );
}

export default IndexRouter;
