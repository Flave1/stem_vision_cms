import { Route, Routes } from "react-router-dom"
import { app_routes } from "./routes";
import Home from "../components/Landing-Page/home";
import SignIn from "../components/authentication/sign-in";
import FirstTimeLoginPassswordChange from "../components/authentication/change-password-on-login";
import SignUp from "../components/authentication/sign-up";



const IndexRouter = () => {
    return (
        <>
            <Routes>
                <Route path={app_routes.index} element={<Home />} />
                <Route path={app_routes.authentication.sign_in} element={<SignIn />} />
                <Route path={app_routes.authentication.firstTimeLogin} element={<FirstTimeLoginPassswordChange/>} />
                <Route path={app_routes.authentication.register} element={<SignUp />} />
            </Routes>
        </>
    );
}

export default IndexRouter;
