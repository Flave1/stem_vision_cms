import { Route, Routes } from "react-router-dom"
import { dashboard_routes } from "./fws-path-locations";
import AdministrationIndex from "../components/dashboard";
import Products from "../components/fws-admin/fws-product-list";
import SmsDescription from "../components/fws-admin/SMS/fws-sms-description";
import CreateSms from "../components/fws-admin/SMS/fws-install-sms";
import UpdateSms from "../components/fws-admin/SMS/fws-update-sms";
import UserProducts from "../components/fws-admin/fws-user-product-list";
import Dashboard from "../components/dashboard/dashboard";
import UserProductDetails from "../components/fws-admin/SMS/fws-user-product-details";
import DocumentationProducts from "../components/fws-admin/documentation/documentation-products";
import DocumentationList from "../components/fws-admin/documentation/documentation-list";
import PreviewDocumentation from "../components/fws-admin/documentation/preview-documentation";



const AdminRouter = () => {

  return (

    <Routes>
      <Route  path={dashboard_routes.dashboard} element={<Dashboard />} />
      <Route path={dashboard_routes.productsLocations.userProductDetails} element={< UserProductDetails />} />
      {/* smservice */}
      <Route path={dashboard_routes.smsLocations.sms} element={<SmsDescription />} />
      <Route path={dashboard_routes.smsLocations.createSms} element={<CreateSms />} />
      <Route path={dashboard_routes.smsLocations.updateSms} element={<UpdateSms />} />
      {/* product */}
      <Route path={dashboard_routes.productsLocations.products} element={< Products />} />
       {/* documentation */}
       <Route path={dashboard_routes.documentation.documentationList} element={< DocumentationList />} />
       <Route path={dashboard_routes.documentation.documentationProducts} element={< DocumentationProducts />} />
       <Route path={dashboard_routes.documentation.createDocumentation} element={< Products />} />
       <Route path={dashboard_routes.documentation.updateDocumentation} element={< Products />} />
       <Route path={dashboard_routes.documentation.previewDocumentation} element={< PreviewDocumentation />} />
    </Routes>
  );
}

export default AdminRouter;
