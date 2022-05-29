import React from "react";
import { useState, useContext } from "react";

import FormInput from "../form-input/form.input.component";
import Button from '../button/button.component';
import { UserContext } from "../../contexts/user.context";

import './sign-in.style.scss';

import { 
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthWithEmailAndPassword
} from '../../utils/firebase/firebase.utils.js';

const defaultSubmitObject = {
    email: "",
    password: ""
}

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultSubmitObject);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    const handleSignIn = async (event) => {
        event.preventDefault();
        
        try {
           const { user } =  await signInAuthWithEmailAndPassword(email, password);
           setCurrentUser(user)
        } catch(error) {
            if(error.code === "auth/wrong-password") {
                alert('Wrong password')
            } else if(error.code === "auth/user-not-found") {
                alert('Email not found')
            } else {
                console.log('ooops, error', error)
            }
        }
    }

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        <div>
            <div className="registration-container">
                <h2>Already have an accaunt?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSignIn}>

                    <FormInput label='Email' type='email' required onChange={changeHandler} name="email" value={email} />

                    <FormInput label='Password' type='password' required onChange={changeHandler} name="password" value={password} />
                    <div className='sign-in-buttons'>
                        <Button type="submit">Sign Up</Button>
                        <Button buttonType='google' onClick={signInWithGoogle}>Google</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn;