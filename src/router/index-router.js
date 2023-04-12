import { Route, Routes } from "react-router-dom"
import { app_routes } from "./routes";
import Home from "../components/Landing-Page/home";



const IndexRouter = () => {
    return (
        <>
            <Routes>
                <Route path={app_routes.index} element={<Home />} />
            </Routes>
        </>
    );
}

export default IndexRouter;
