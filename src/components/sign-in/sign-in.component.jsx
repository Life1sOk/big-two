import React from "react";

import './sign-in.style.scss';

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    
    const logInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <div className="sign-in">Sign in</div>
            <button onClick={logInWithGoogle}>Google</button>
        </div>
    )
}

export default SignIn;