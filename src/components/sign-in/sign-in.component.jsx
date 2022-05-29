import React from "react";
import { useState } from "react";

import FormInput from "../form-input/form.input.component";
import Button from '../button/button.component';

import './sign-in.style.scss';

import { 
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

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSignIn = async (event) => {
        event.preventDefault();
        
        try {
           await signInAuthWithEmailAndPassword(email, password);
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