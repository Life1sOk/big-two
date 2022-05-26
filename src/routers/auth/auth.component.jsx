import React from "react";

import Registration from "../../components/reg/registration.component";
import SignIn from "../../components/sign-in/sign-in.component";

import './auth.style.scss';

const Auth = () => {
    return(
        <div className="auth-container">
            <SignIn />
            <Registration />
        </div>
    )
}

export default Auth;