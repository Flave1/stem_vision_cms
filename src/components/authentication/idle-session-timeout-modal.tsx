import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ShowTimeOutModal, logOut } from "../../store/actions/auth-actions";
import { app_routes } from "../../router/routes";
import { useDispatch, useSelector } from "react-redux";

const IdleSessionTimeOutModal = (props :any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state :any) => state);
  const { showTimeOutModal } = state.auth;
  const [counter, setCounter] = useState(30);
let count:any = undefined;
  useEffect(() => {
    if(showTimeOutModal){
    count = 30;
    const countdown = setInterval(() => {
      setCounter((counter) => count - 1);
      count--
      if (count === 0) {
        dispatch(logOut());
       props.setIsLoggedIn(false);
      navigate(app_routes.authentication.sign_in);       
      }
    }, 1000);
    
   return () => clearInterval(countdown);
}
 }, [count,showTimeOutModal]);

  return (
    <>
     <Modal show={showTimeOutModal} onHide={() =>{
             ShowTimeOutModal(false)(dispatch)
            }
        }
            id="viewModal"
            centered
        >
            <Modal.Header closeButton >
                <div>
                <div className="d-flex"><h5>You Have Been Idle!</h5> <h6  className="mx-1 mt-1">{" "} You will be logged out in <span className="text-danger">{counter}</span></h6></div>  
                </div>
            </Modal.Header>
            <Modal.Body>
        <h5 className="my-4 text-center">
          Your session is <span className="text-danger">Timed Out.</span> Do you
          want to stay?
        </h5>
        <div className="d-flex justify-content-end mt-5">
          <Button
            variant="danger"
            className="mx-2"
            onClick={() => {
              props.removeEvents();
              clearTimeout(props.timer);
              props.setLogout(true);
              ShowTimeOutModal(false)(dispatch);
              dispatch(logOut());
              props.setIsLoggedIn(false);
              navigate(app_routes.authentication.sign_in);   
            }}
          >
            Logout
          </Button>
          <Button
            variant="primary"
            className=""
            onClick={() => {
              ShowTimeOutModal(false)(dispatch);
              props.startTimer();
            }}
          >
            Continue Session
          </Button>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default IdleSessionTimeOutModal;
