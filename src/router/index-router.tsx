import { Route, Routes} from "react-router-dom"
import { app_routes } from "./routes";
import Home from "../components/Landing-Page/home";
import SignIn from "../components/authentication/sign-in";
import FirstTimeLoginPassswordChange from "../components/authentication/change-password-on-login";
import SignUp from "../components/authentication/sign-up";
import WrapperComponent from "../components/authentication/protected";
import Index from "../components/dashboard";
import { dashboard_routes } from "./fws-path-locations";
import Products from "../components/fws-admin/fws-product-list";
import UserProducts from "../components/fws-admin/fws-user-product-list";



const IndexRouter = () => {
   const user :any = sessionStorage.getItem('user');
   const userDetails = JSON.parse(user)||""
    return (
        <>
        {/* <WrapperComponent> */}
            <Routes>
                <Route path={app_routes.index} element={<Home />} />
                <Route path={app_routes.authentication.sign_in} element={<SignIn />} />
                <Route path={app_routes.authentication.firstTimeLogin} element={<FirstTimeLoginPassswordChange/>} />
                <Route path={app_routes.authentication.register} element={<SignUp />} />
                <Route path={dashboard_routes.dashboard} element={userDetails?.userType == 'Candidate' ? <Index /> : <Index />} />
            </Routes>
        {/* </WrapperComponent> */}
        </>
    );
}

export default IndexRouter;
