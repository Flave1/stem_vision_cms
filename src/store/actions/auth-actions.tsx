import axiosInstance from "../../axios/axiosInstance";
import { UserDetail } from "../../components/Models/auth/UserDetail";
import { app_routes } from "../../router/routes";
import { Alert } from "../../utils/Alert";
import { AuthenticationResponse } from "../Models/AuthState";
import { actions } from "../action-types/auth-action-types";
import { startSpining, stopSpining } from "./app-layout-actions";
import jwt from 'jwt-decode'

export const Login = ({ userName, password }: any, navigate: any) => (dispatch: any) => {
    startSpining()(dispatch);
    const payload = {
        userName,
        password
    }

    axiosInstance.post('fws/user/api/v1/login', payload)
        .then((res: any) => {
            dispatch({ type: actions.LOGIN_USER, payload: res.data.result });
            debugger
            const decodedToken = jwt<AuthenticationResponse>(res.data.result.authResult.token);
            const stringValue = JSON.stringify(decodedToken);
            const user = JSON.parse(stringValue) as UserDetail;

            if (user.userType === '0') {
                navigate(app_routes.index)
            } else {
                navigate(app_routes.index)
            }
        }).catch((err: any) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        })
}

export const loginOutUser = () => {
    return { type: actions.LOG_OUT_USER }
}

export const registerUser = ({ email, password }: any) => (dispatch: any) => {
    startSpining()(dispatch);
    const payload = {
        email,
        password
    }

    axiosInstance.post('/fws/user/api/v1/register', payload)
        .then((res: any) => {
            dispatch({ type: actions.REGISTER_USER, payload: res.data.result });
        }).catch((err: any) => {
            stopSpining()(dispatch);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        })
}


export const generatePasswordResetLink = ({ resetOption, resetOptionValue, userType }: any) => (dispatch: any) => {
    startSpining()(dispatch);

    const payload = {
        resetOption,
        resetOptionValue,
        userType
    }

    axiosInstance.post('/user/api/v1/generate/reset-link', payload)
        .then((res: any) => {
            dispatch({ type: actions.GENERATE_PASSWORD_RESET_LINK, payload: res.data.result });
        }).catch((err: any) => {
            stopSpining()(dispatch);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        })
}

export const ResetPassword = ({ userId, password, resetToken }: any) => (dispatch: any) => {
    startSpining()(dispatch);
    const payload = {
        userId,
        password,
        resetToken
    }

    axiosInstance.post('/user/api/v1/reset/password', payload)
        .then((res: any) => {
            dispatch({ type: actions.RESET_PASSWORD, payload: res.data.result });
        }).catch((err: any) => {
            stopSpining()(dispatch);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        })
}

export const changeMyPassword = ({ userId, oldPassword, newPassword }: any) => (dispatch: any) => {

    startSpining()(dispatch);
    const payload = {
        userId,
        oldPassword,
        newPassword
    }

    axiosInstance.post('user/api/v1/first-time/change-password', payload)
        .then((res: any) => {
            dispatch({ type: actions.LOGIN_USER, payload: res.data.result });
        }).catch((err: any) => {
            stopSpining()(dispatch);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        })
}

