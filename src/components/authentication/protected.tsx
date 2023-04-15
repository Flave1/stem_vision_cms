import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { app_routes } from "../../router/routes";

const WrapperComponent = ({children}:any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const token = sessionStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
   token && setIsLoggedIn(true)
   if(!isLoggedIn){
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      navigate(app_routes.authentication.sign_in);
    }
  }, [isLoggedIn, token])
  

  return (
      <>
      {children}
      </>
 
  );
};
export default WrapperComponent;
