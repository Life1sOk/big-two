import React from "react";
import { useState } from "react";

import FormInput from "../form-input/form.input.component";
import Button from "../button/button.component";

import { createAuthWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js';

import './ragistration.style.scss';


const defaultSubmitObject = {
    displayName: "",
    email: "",
    password: "",
    confirmePassword: "",
}

const Registration = () => {

    const [formFields, setFormFields] = useState(defaultSubmitObject);
    const { displayName, email, password, confirmePassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmePassword) {
            alert('Your passwords do not match!')
            return;
        }
        
        try {
            const { user } = await createAuthWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('email already in use')
            } else {
                console.log('error 123123', error)
            }
        }
    }

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        <div className="registration-container">
            <h2>Don't have an accaunt?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Name' type='text' required onChange={changeHandler} name="displayName" value={displayName} />

                <FormInput label='Email' type='email' required onChange={changeHandler} name="email" value={email} />

                <FormInput label='Password' type='password' required onChange={changeHandler} name="password" value={password} />

                <FormInput label='Confirm Password' type='password' required onChange={changeHandler} name="confirmePassword" value={confirmePassword} />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default Registration;