import { Route, Routes} from "react-router-dom"
import { app_routes } from "./routes";
import Home from "../components/Landing-Page/home";
import SignIn from "../components/authentication/sign-in";
import FirstTimeLoginPassswordChange from "../components/authentication/change-password-on-login";
import SignUp from "../components/authentication/sign-up";
import WrapperComponent from "../components/authentication/protected";
import Index from "../components/dashboard";
import Products from "../components/fws-admin/fws-product-list";
import SmsDescription from "../components/fws-admin/SMS/fws-sms-description";
import CreateSms from "../components/fws-admin/SMS/fws-install-sms";
import UpdateSms from "../components/fws-admin/SMS/fws-update-sms";
import UserProducts from "../components/fws-admin/fws-user-product-list";
import { dashboard_routes } from "./fws-path-locations";




const IndexRouter = () => {
   const user :any = sessionStorage.getItem('user');
   const userDetail = JSON.parse(user)||""
   
    return (
        <>
        {/* <WrapperComponent> */}
            <Routes>
                <Route path={app_routes.index} element={<Home />} />
                <Route path={app_routes.authentication.sign_in} element={<SignIn />} />
                <Route path={app_routes.authentication.firstTimeLogin} element={<FirstTimeLoginPassswordChange/>} />
                <Route path={app_routes.authentication.register} element={<SignUp />} />

                {/* Admin router */}
                <Route path={userDetail?.userType == '0' ? dashboard_routes.dashboard : dashboard_routes.dashboard} element={userDetail?.userType == '0' ?  <Index /> : <Index />} >
                   {/* product */}
                   <Route path={dashboard_routes.productsLocations.products} element={<Products />} />
                   <Route path={dashboard_routes.productsLocations.userProductDetails} element={<UserProducts />} />
                   {/* smservice */}
                   <Route path={dashboard_routes.smsLocations.sms} element={<SmsDescription/>}/>
                    <Route path={dashboard_routes.smsLocations.createSms} element={<CreateSms/>}/>
                    <Route path={dashboard_routes.smsLocations.updateSms}  element={<UpdateSms/>}/>
               </Route>
            </Routes>
        {/* </WrapperComponent> */}
        </>
    );
}

export default IndexRouter;
