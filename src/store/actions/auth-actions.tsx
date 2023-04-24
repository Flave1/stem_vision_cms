import axiosInstance from "../../axios/axiosInstance";
import { UserDetail } from "../../components/Models/auth/UserDetail";
import { dashboard_routes } from "../../router/fws-path-locations";
import { app_routes } from "../../router/routes";
import { Alert } from "../../utils/Alert";
import { AuthenticationResponse } from "../Models/AuthState";
import { actions } from "../action-types/auth-action-types";
import { startSpining, stopSpining } from "./app-layout-actions";
import jwt from 'jwt-decode'


export const ShowTimeOutModal = (status:Boolean) => (dispatch: any) => {
    dispatch({ type: actions.SHOW_TIME_OUT_MODAL,payload:status})
}


export const Login = (payload: any, navigate: any) => (dispatch: any) => {
    startSpining()(dispatch);
   
    axiosInstance.post('fws/user/api/v1/login', payload)
        .then((res: any) => {
            stopSpining()(dispatch);
            dispatch({ type: actions.LOGIN_USER, payload: res.data.result });
            const decodedToken = jwt<AuthenticationResponse>(res.data.result.authResult.token);
            const stringValue = JSON.stringify(decodedToken);
            const user = JSON.parse(stringValue) as UserDetail;

            // if (user.userType === '0') {
            //     navigate(dashboard_routes.dashboard)
            // } else {
            //     navigate(dashboard_routes.dashboard)
            // }
            navigate(dashboard_routes.dashboard)
        }).catch((err: any) => {
            stopSpining()(dispatch);
            console.log('err', err);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        })
}

export const logOut = () => {
    return { type: actions.LOG_OUT_USER }
}

export const Register = (payload: any,navigate:any) => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.post('/fws/user/api/v1/register', payload)
        .then((res: any) => {
            stopSpining()(dispatch);
            dispatch({ type: actions.REGISTER_USER, payload: res.data.result });
            const decodedToken = jwt<AuthenticationResponse>(res.data.result.authResult.token);
            const stringValue = JSON.stringify(decodedToken);
            const user = JSON.parse(stringValue) as UserDetail;
            
            if (user.userType === '0') {
                navigate(dashboard_routes.dashboard)
            } else {
                navigate(app_routes.index)
            }
        }).catch((err: any) => {
            stopSpining()(dispatch);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        })
}

export const ChangePassword = (payload: any,navigate : any) => (dispatch: any) => {
    startSpining()(dispatch);

    axiosInstance.post('user/api/v1/first-time/change-password', payload)
        .then((res: any) => {
            stopSpining()(dispatch);
            dispatch({ type: actions.LOGIN_USER, payload: res.data.result });
            const decodedToken = jwt<AuthenticationResponse>(res.data.result.authResult.token);
            const stringValue = JSON.stringify(decodedToken);
            const user = JSON.parse(stringValue) as UserDetail;

            if (user.userType === '0') {
                navigate(dashboard_routes.dashboard)
            } else {
                navigate(app_routes.index)
            }

        }).catch((err: any) => {
            stopSpining()(dispatch);
            Alert.showError(err?.response?.data?.message?.friendlyMessage)
        })
}
  




