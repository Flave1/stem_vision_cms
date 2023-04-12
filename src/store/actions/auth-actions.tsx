import axiosInstance from "../../axios/axiosInstance";
import { actions } from "../action-types/auth-action-types";
import { errorModal } from "./alert-actions";
import { startSpining, stopSpining } from "./app-layout-actions";

export const loginUser = ({ userName, password }: any) => (dispatch : any) => {
  startSpining()(dispatch); 
    const payload = {
        userName,
        password
    }

    axiosInstance.post('fws/user/api/v1/login', payload)
        .then((res:any) => {
            dispatch({
                type: actions.LOGIN_USER_SUCCESS,
                payload: res.data.result
            });
            
        }).catch((err : any) => {
            stopSpining()(dispatch) 
            errorModal(err?.response.data.message?.friendlyMessage)
        })
}

export const loginOutUser = () => {
    return {
        type: actions.LOG_OUT_USER
    }
}

export const registerUser = ({  email , password  } : any) => (dispatch : any) => {
    startSpining()(dispatch); 
    const payload = {
        email,
        password
    }

    axiosInstance.post('/fws/user/api/v1/register', payload)
        .then((res:any) => {
            dispatch({
                type: actions.REGISTER_USER_SUCCESS,
                payload: res.data.result
            });
            
        }).catch((err : any)  => {
            stopSpining()(dispatch); 
            errorModal(err?.response.data.message?.friendlyMessage)
        })
}


export const generatePasswordResetLink = ({ resetOption, resetOptionValue, userType }: any) => (dispatch : any) => {
    startSpining()(dispatch); 
  
    const payload = {
        resetOption,
        resetOptionValue,
        userType
    }

    axiosInstance.post('/user/api/v1/generate/reset-link', payload)
        .then((res:any) => {
            dispatch({
                type: actions.GENERATE_PASSWORD_RESET_LINK_SUCCESS,
                payload: res.data.result
            });
        }).catch((err : any)  => {
            stopSpining()(dispatch); 
            errorModal(err?.response.data.message?.friendlyMessage)
        })
}

export const ResetPassword = ({ userId, password, resetToken } : any) => (dispatch : any) => {
    startSpining()(dispatch); 
    const payload = {
        userId,
        password,
        resetToken
    }

    axiosInstance.post('/user/api/v1/reset/password', payload)
        .then((res:any) => {
            dispatch({
                type: actions.RESET_PASSWORD_SUCCESS,
                payload: res.data.result
            });
        }).catch((err : any)  => {
            stopSpining()(dispatch); 
            errorModal(err?.response.data.message?.friendlyMessage)
        })
}

export const changeMyPassword = ({ userId, oldPassword, newPassword }: any) => (dispatch : any) => {
   
    startSpining()(dispatch); 
    const payload = {
        userId,
        oldPassword,
        newPassword
    }

    axiosInstance.post('user/api/v1/first-time/change-password', payload)
        .then((res : any) => {
            dispatch({
                type: actions.LOGIN_USER_SUCCESS,
                payload: res.data.result
            });
        }).catch((err : any)  => {
            stopSpining()(dispatch); 
            errorModal(err?.response.data.message?.friendlyMessage)
        })
}
