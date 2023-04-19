import axiosInstance from "../../axios/axiosInstance"
import { Alert } from "../../utils/Alert"
import { actions } from "../action-types/app-layout-aciton-types"

export const startSpining = () => (dispatch: any) => {
    dispatch({ type: actions.START_SPINNING })
}

export const stopSpining = () => (dispatch: any) => {
    dispatch({ type: actions.STOP_SPINNING })
}


export const contactUs = ({ name, email, message }: any) => (dispatch: any) => {
    startSpining()(dispatch);
    const payload = { name, email, message };
    axiosInstance.post('/fws/contact/api/v1/create/update', payload)
        .then((res: any) => {
            stopSpining()(dispatch);
            Alert.showSuccess(res?.data?.message?.friendlyMessage)
        }).catch((err: any) => {
            stopSpining()(dispatch);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        })
}
   export const respondDialog = (value: any) => (dispatch: any)=> {
    dispatch({
        type: actions.RESPOND_DECISION_DIALOG,
        payload: value
    })
}
