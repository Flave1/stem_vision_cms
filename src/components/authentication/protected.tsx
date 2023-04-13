import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import jwt from 'jwt-decode'
import axiosInstance from "../../axios/axiosInstance";
import { app_routes } from "../../router/routes";
import { AuthenticationResponse } from "../../store/Models/AuthState";
import IdleSessionTimeOutHandler from "./idle-session-timeout-handle";

const WrapperComponent = (props : any) => {
  const [isActive, setIsActive] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const token = sessionStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    const decodedToken : any = token && jwt<AuthenticationResponse>(token);
   //token && axiosInstance.get(`/api/v1/base/is-authenticated/${decodedToken.smsClientId}`).then(res => setIsLoggedIn(res.data.result))
   token && setIsLoggedIn(true)
   if(!isLoggedIn){
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      navigate(app_routes.authentication.sign_in);
    }
  }, [isLoggedIn, token])
  

  return (
    isLoggedIn === true ?
      <>
        <IdleSessionTimeOutHandler
          onActive={() => {
            setIsActive(true);
          }}
          onIdle={() => {
            setIsActive(false);
          }}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        {props.children}
      </>
      : null
  );
};
export default WrapperComponent;
