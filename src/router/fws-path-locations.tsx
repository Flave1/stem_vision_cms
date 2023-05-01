export const dashboard_routes = {
    dashboard: "/dashboard",
    productsLocations:{
        products: "/dashboard/products",
        userList:"/dashboard/user-list",
        userProductDetails: "/dashboard/user-product-details",
    },
     smsLocations:{
        sms: "/dashboard/smservices",
        createSms:"/dashboard/create-smservices",
        updateSms:"/dashboard/update-smservices",
    },
  locationLocations : {
        country: "/dashboard/list-country",
        state:"/dashboard/list-state",
        city:"/dashboard/list-city",
        addCountry: "/dashboard/add-country",
        addState: "/dashboard/add-state",
        addCity: "/dashboard/add-city",
        editCountry: "/dashboard/edit-country",
        editState: "/dashboard/edit-state",
        editCity: "/dashboard/edit-city",
      },
    documentation:{
            documentationProducts:"/dashboard/documentation-products",
            documentationList: "/dashboard/documentation-list",
            createDocumentation:"/dashboard/create-documentation",
            updateDocumentation:"/dashboard/update-documentation",
            previewDocumentation:"/dashboard/preview-documentation",
    }
 }

