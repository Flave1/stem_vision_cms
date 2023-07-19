
import axiosInstance from "../../axios/axiosInstance";
import { Alert } from "../../utils/Alert";
import { actions } from "../action-types/smservice-action-types";
import { startSpining, stopSpining } from "./app-layout-actions";

export const GetAllSms = () => (dispatch: any) => {
    startSpining()(dispatch);
    
    axiosInstance.get(`/fws/products/api/v1/get-all-products`)
        .then((res) => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.FETCH_SMS,
                payload: res.data.result,
            });
        })
        .catch((err :any) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
};


export const AddSms = (formData: any,navigate:any) => (dispatch: any) => {
    startSpining()(dispatch);
                
    axiosInstance.post('/fws/sms/api/v1/create-sms-ii',  formData)
        .then((res) => {
            stopSpining()(dispatch);
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetAllSms()(dispatch);
            navigate(-1)
        }).catch((err :any) => {
            stopSpining()(dispatch);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}

export const UpdateSmservice = (formData: any,navigate:any) => (dispatch: any) => {
    startSpining()(dispatch);
                
    axiosInstance.post('/fws/sms/api/v1/update-sms',  formData)
        .then((res) => {
            stopSpining()(dispatch);
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetAllSms()(dispatch);
            navigate(-1)
        }).catch((err : any)  => {
            stopSpining()(dispatch);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}

export const ExportPins = (numberOfPins: number,clientId :string) => (dispatch: any) => {
    startSpining()(dispatch);
                
 const payload={
    numberOfPins,
    clientId
 }

 
    axiosInstance.post('fws/sms/api/v1/export-pins',  payload)
        .then((res) => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.EXPORT_PINS,
                payload: res.data.result
            });
         
        }).catch((err :any) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}



export const ValidateBaseUrlSuffix = (suffix: any) => (dispatch: any) => {
    startSpining()(dispatch);
                
const payload={
    suffix
}
    axiosInstance.post(`fws/sms/api/v1/validate-baseurl-suffix`,payload)
        .then(response => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.VALIDATE_BASE_URL_SUFFIX,
                payload: response.data.result
            });

        }).catch((err :any) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
})
}

export const GetCountries = () => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.get(`/fws/lookups/api/v1/get/country-select`)
        .then(response => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.FETCH_COUNTRY,
                payload: response.data.result
            });
        }).catch((err :any) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
            });
        
}

export const GetStates = (country: any) => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.get(`/fws/lookups/api/v1/get/state-select?country=${country}`)
        .then(response => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.FETCH_STATE,
                payload: response.data.result
            });

        }).catch((err :any) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
            });
     
}
