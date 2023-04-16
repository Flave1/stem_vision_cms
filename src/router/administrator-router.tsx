import { Route, Routes} from "react-router-dom"
import { dashboard_routes } from "./fws-path-locations";
import Products from "../components/fws-admin/fws-product-list";
import UserProducts from "../components/fws-admin/fws-user-product-list";



const AdminRouter = () => {
    return (
        <>
        {/* <WrapperComponent> */}
            <Routes>
                <Route path={dashboard_routes.productsLocations.products} element={<Products />} />
                <Route path={dashboard_routes.productsLocations.userProductDetails} element={<UserProducts />} />
            </Routes>
        {/* </WrapperComponent> */}
        </>
    );
}

export default AdminRouter;
