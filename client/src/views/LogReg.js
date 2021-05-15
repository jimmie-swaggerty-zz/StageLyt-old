import React from "react";
import Login from "../components/Login";
import RegisterUser from "../components/RegisterUser";

const LogReg = (props) => {
    const {updateStatus} = props
    return (
        <div className="container-flex">
            <Login updateStatus={updateStatus} />
            <hr />
            <RegisterUser />
        </div>
    );
};

export default LogReg;