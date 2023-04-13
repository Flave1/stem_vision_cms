import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import IdleSessionTimeOutModal from "./idle-session-timeout-modal";
import { ShowTimeOutModal } from "../../store/actions/auth-actions";

const IdleSessionTimeOutHandler = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state ) => state);
  const {  showTimeOutModal } = state.auth;
  const [isLogout, setLogout] = useState(false);
  
  useEffect(() => {
    if (!showTimeOutModal) {
      setLogout(false);
    }
   
  }, [showTimeOutModal]);
  
 let timer = undefined;
  const events = ["click", "scroll", "load", "keydown"];
  const startTimer = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
        let lastInteractionTime = sessionStorage.getItem("lastInteractionTime");
        const diff = moment.duration(
          moment().diff(moment(lastInteractionTime))
        );
       
        let timeOutInterval = props.timeOutInterval
          ? props.timeOutInterval
          : 900000
        if (isLogout) {
          clearTimeout(timer);
        } else {
          if (diff._milliseconds < timeOutInterval) {
            startTimer();
            props.onActive();  
          } else {
            props.onIdle();
            ShowTimeOutModal(true)(dispatch);
          }
        }
      },
      props.timeOutInterval ? props.timeOutInterval : 900000
    );
  };

  const eventHandler = (eventType ) => {
    if (!isLogout) {
      sessionStorage.setItem("lastInteractionTime", moment());
      if (timer) {
        props.onActive();
        startTimer();
      }
    }
  };

  const addEvents = () => {
    events.forEach((eventName) => {
      window.addEventListener(eventName, eventHandler);
    });
    startTimer();
  };
  const removeEvents = () => {
    events.forEach((eventName) => {
      window.removeEventListener(eventName, eventHandler);
    });
  };

  useEffect(() => {
    addEvents();

    return () => {
      removeEvents();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <IdleSessionTimeOutModal
        removeEvents={removeEvents}
        timer={timer}
        setLogout={setLogout}
        startTimer={startTimer}
        isLoggedIn={props.isLoggedIn}
        setIsLoggedIn={props.setIsLoggedIn}
      />
    </div>
  );
};

export default IdleSessionTimeOutHandler;
