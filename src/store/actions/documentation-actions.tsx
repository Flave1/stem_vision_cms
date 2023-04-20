import axiosInstance from "../../axios/axiosInstance";
import { Alert } from "../../utils/Alert";
import { actions } from "../action-types/documentation-action-types";
import { startSpining, stopSpining } from "./app-layout-actions";

export const GetDocProducts = () => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.get(`/fws/doc/api/v1/products`)
        .then((res) => {
            dispatch({
                type: actions.FETCH_DOCUMENTATION_PRODUCTS,
                payload: res.data.result,
            });


        })
        .catch((err) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
};

export const GetDocList = (docId: any, pageNumber: any) => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.get(`/fws/doc/api/v1/get?id=${docId}&pageNumber=${pageNumber}`)
        .then((res) => {
            dispatch({
                type: actions.FETCH_DOCUMENTATION_LIST,
                payload: res.data.result,
            });
        })
        .catch((err: any) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
};
export const getFeatures = () => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.get(`/fws/doc/api/v1/get-features`)
        .then((res) => {
            dispatch({ type: actions.GET_FEATURES, payload: res.data.result });
        })
        .catch((err: any) => {
            stopSpining()(dispatch);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
};

export const GetSingleDoc = (docId: any) => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.get(`/fws/doc/api/v1/get-doc?documentationId=${docId}`)
        .then((res) => {
            dispatch({
                type: actions.FETCH_SINGLE_DOCUMENTATION,
                payload: res.data.result,
            });
        })
        .catch((err: any) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
};

export const CreateDoc = (values: any, navigate: any) => (dispatch: any) => {
    startSpining()(dispatch);
    console.log('values', values);

    axiosInstance.post('/fws/doc/api/v1/create', values)
        .then((res) => {
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetDocList(values.id, 1)(dispatch);
            navigate(-1)
        }).catch((err: any) => {
            stopSpining()(dispatch);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}

export const DeleteDoc = (values: any) => (dispatch: any) => {
    startSpining()(dispatch);

    const payload = {
        id: values.selectedId
    }


    axiosInstance.post('/fws/doc/api/v1/delete', payload)
        .then((res) => {
            Alert.showSuccess(res.data.message.friendlyMessage)
            GetDocList(values.selectedId, 1)(dispatch);
            values.navigate(0);
        }).catch((err: any) => {
            stopSpining()(dispatch);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        });
}