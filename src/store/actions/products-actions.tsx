import axiosInstance from "../../axios/axiosInstance";
import { Alert } from "../../utils/Alert";
import { actions } from "../action-types/products-action-types";
import { startSpining, stopSpining } from "./app-layout-actions";

export const GetAllProducts = () => (dispatch: any) => {
    startSpining()(dispatch);
   
    axiosInstance.get(`/fws/products/api/v1/get-all-products`)
        .then((res) => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.FETCH_PRODUCTS,
                payload: res.data.result,
            });
          
            
        })
        .catch((err) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
};

export const GetSingleProduct = (productId:any) => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.get(`/fws/products/api/v1/get-single-product?productId=${productId}`)
        .then((res) => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.FETCH_SINGLE_PRODUCT,
                payload: res.data.result,
            });
        })
        .catch((err : any)  => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
};

export const GetAllUserProducts = (userId:any) => (dispatch: any) => {
    startSpining()(dispatch); 

    axiosInstance.get(`/fws/products/api/v1/get-user-products?userId=${userId}`)
        .then((res) => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.FETCH_USER_PRODUCTS,
                payload: res.data.result,
            });
        })
        .catch((err : any)  => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
};

export const GetSingleUserProduct = (userProductId:any) => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.get(`/fws/products/api/v1/get-single/user-product?userProductId=${userProductId}`)
        .then((res) => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.FETCH_SINGLE_USER_PRODUCT,
                payload: res.data.result,
            });
        })
        .catch((err : any)  => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
};


export const GetClientUsers = (pageNumber:any) => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.get(`fws/usermanager/api/v1/get-client-users?pageNumber=${pageNumber}`)
        .then((res) => {
            stopSpining()(dispatch);
            dispatch({
                type: actions.FETCH_CLIENT_USERS,
                payload: res.data.result,
            });
        })
        .catch((err : any)  => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
};