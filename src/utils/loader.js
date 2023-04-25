import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./loader.scss"
const Loader = () => {

    const state = useSelector((state) => state);
    const { loading: loading1 } = state.layout;

    const [show, setShow] = useState(false);

    React.useEffect(() => {

        if (loading1) {
            setShow(true);
        } else {
            setShow(false);
        }

    }, [loading1])

    return (
        <>
            <div className={show ? `overlay show` : `overlay`}></div>
            <div className={show ? `spanner show` : `spanner`}>
                <div className="loader"></div>
            </div>
        </>
    )
}

export default Loader;