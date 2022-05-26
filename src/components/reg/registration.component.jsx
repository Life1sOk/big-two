import React from "react";

import './ragistration.style.scss';

import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const Registration = () => {

    const logInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <div className="registration-container">
                <p>Don't have an accaunt?</p>
                <p>Sign up with your email and password</p>
                {/* <input type='email'>name</input> */}
                <button onClick={logInWithGoogle}>Google</button>
            </div>
        </div>
    )
}

export default Registration;