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
import CreateDocumentation from "../components/fws-admin/documentation/create-documentation";
import UpdateDocumentation from "../components/fws-admin/documentation/update-documentation";
import ClientUserList from "../components/fws-admin/SMS/fws-user-list";
import ListCountry from "../components/fws-admin/location-lookup/country-location-lookpup/list-country";
import ListState from "../components/fws-admin/location-lookup/state-location-lookup/list-state";
import AddCountry from "../components/fws-admin/location-lookup/country-location-lookpup/add-country";
import AddState from "../components/fws-admin/location-lookup/state-location-lookup/add-state";
import EditCity from "../components/fws-admin/location-lookup/city-location-lookup/edit-city";
import EditState from "../components/fws-admin/location-lookup/state-location-lookup/edit-state";
import EditCountry from "../components/fws-admin/location-lookup/country-location-lookpup/edit-country";
import ListCity from "../components/fws-admin/location-lookup/city-location-lookup/list-city";
import AddCity from "../components/fws-admin/location-lookup/city-location-lookup/add-city";



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
      <Route path={dashboard_routes.productsLocations.userList} element={< ClientUserList/>} />
       {/* documentation */}
       <Route path={dashboard_routes.documentation.documentationList} element={< DocumentationList />} />
       <Route path={dashboard_routes.documentation.documentationProducts} element={< DocumentationProducts />} />
       <Route path={dashboard_routes.documentation.createDocumentation} element={< CreateDocumentation />} />
       <Route path={dashboard_routes.documentation.updateDocumentation} element={< UpdateDocumentation />} />
       <Route path={dashboard_routes.documentation.previewDocumentation} element={< PreviewDocumentation />} />
   {/* location */}
       <Route path={dashboard_routes.locationLocations.country} element={<ListCountry/>}></Route>
        <Route path={dashboard_routes.locationLocations.state} element={<ListState/>}></Route>
        <Route path={dashboard_routes.locationLocations.city} element={<ListCity/>}></Route>
        <Route path={dashboard_routes.locationLocations.addCountry} element={<AddCountry/>}></Route>
        <Route path={dashboard_routes.locationLocations.addState} element={<AddState/>}></Route>
        <Route path={dashboard_routes.locationLocations.addCity} element={<AddCity/>}></Route>
        <Route path={dashboard_routes.locationLocations.editCountry} element={<EditCountry/>}></Route>
        <Route path={dashboard_routes.locationLocations.editState} element={<EditState/>}></Route>
        <Route path={dashboard_routes.locationLocations.editCity} element={<EditCity/>}></Route>    
    </Routes>
  );
}

export default AdminRouter;
