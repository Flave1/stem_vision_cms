import { AuthenticationResponse } from "../Models/AuthState";
import { actions } from "../action-types/auth-action-types";
import { _state } from "../states/auth-state";
import jwt from 'jwt-decode'

export const authReducer = (state : AuthenticationResponse = _state, { type, payload }: any) => {
    switch (type) {
        case actions.SHOW_TIME_OUT_MODAL:{
            return {
                ...state,
                showTimeOutModal: payload
            }
        }
        
        case actions.LOGIN_USER: {
            sessionStorage.removeItem('token');
            const decodedToken = jwt<AuthenticationResponse>(payload.authResult.token);
            sessionStorage.setItem('token', payload.authResult.token);
            sessionStorage.setItem('user', JSON.stringify(decodedToken));
           
            return {
                ...state,
                token: payload.authResult.token,
                refreshToken: payload.authResult.refreshToken,
                message: '',
            }
        }

        case actions.LOG_OUT_USER: {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('permissions');
            sessionStorage.removeItem('userDetail');
            return {
                message: '',
                token: '',
                refreshToken: '',
            }
        }


        case actions.REGISTER_USER: {
            sessionStorage.removeItem('token');
            const decodedToken = jwt<AuthenticationResponse>(payload.authResult.token);
            sessionStorage.setItem('token', payload.authResult.token);
            sessionStorage.setItem('user', JSON.stringify(decodedToken));
            
            return {
                ...state,
                token: payload.authResult.token,
                refreshToken: payload.authResult.refreshToken,
                message: '',
            }
        }


        // case actions.GENERATE_PASSWORD_RESET_LINK:
        //     return {
        //         ...state,
        //         loading: false,
        //         message: payload,
        //         isSuccessful: true,
        //     }
        
        // case actions.RESET_PASSWORD:
        //     sessionStorage.removeItem('token');
        //     sessionStorage.setItem('token', payload.authResult.token);
        //     return {
        //         ...state,
        //         token: payload.authResult.token,
        //         refreshToken: payload.authResult.refreshToken,
        //         message: 'Password change successful',
        //     }
        
        default:
            return state
    }
}