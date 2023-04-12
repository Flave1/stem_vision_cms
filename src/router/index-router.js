import { Route, Routes } from "react-router-dom"
import { app_routes } from "./routes";
import Home from "../components/Landing-Page/home";
import SignIn from "../components/auth/sign-in";
import FirstTimeLoginPassswordChange from "../components/auth/change-password-on-login";
import Register from "../components/auth/register-user";



const IndexRouter = () => {
    return (
        <>
            <Routes>
                <Route path={app_routes.index} element={<Home />} />
                <Route path={app_routes.authentication.sign_in} element={<SignIn />} />
                <Route path={app_routes.authentication.firstTimeLogin} element={<FirstTimeLoginPassswordChange/>} />
                <Route path={app_routes.authentication.register} element={<Register />} />
            </Routes>
        </>
    );
}

export default IndexRouter;
