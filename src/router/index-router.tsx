import { Route, Routes, useNavigate } from "react-router-dom"
import { app_routes } from "./routes";
import Home from "../components/Landing-Page/home";
import SignIn from "../components/authentication/sign-in";
import FirstTimeLoginPassswordChange from "../components/authentication/change-password-on-login";
import SignUp from "../components/authentication/sign-up";


import ContactUs from "../components/Landing-Page/contactus";
import AboutUs from "../components/Landing-Page/aboutus";
import ExportedPreviewDocumentation from "../components/fws-admin/documentation/exported-preview-documentation";
import DetailedExportedPreviewDocumentation from "../components/fws-admin/documentation/detailed-exported-preview-documentation";



const IndexRouter = () => {

    const navigate = useNavigate();
    return (
        <>
           
            <Routes >
                <Route path={app_routes.index} element={<Home navigate={navigate} />} />
                <Route path={app_routes.authentication.sign_in} element={<SignIn navigate={navigate}/>} />
                <Route path={app_routes.contact_us} element={<ContactUs navigate={navigate} />} />
                <Route path={app_routes.about_us} element={<AboutUs />} />
                <Route path={app_routes.authentication.firstTimeLogin} element={<FirstTimeLoginPassswordChange />} />
                <Route path={app_routes.authentication.register} element={<SignUp />} />
                <Route path={app_routes.documentation} element={<ExportedPreviewDocumentation />} />
                <Route path={app_routes.detailedDocumentation} element={<DetailedExportedPreviewDocumentation />} />
            </Routes>
      
        </>
    );
}

export default IndexRouter;
