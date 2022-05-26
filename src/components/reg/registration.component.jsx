import React from "react";
import { useState } from "react";

import './ragistration.style.scss';

import { createAuthWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js';

const defaultSubmitObject = {
    displayName: "",
    email: "",
    password: "",
    confirmePassword: "",
}

const Registration = () => {

    const [formFields, setFormFields] = useState(defaultSubmitObject);
    const { displayName, email, password, confirmePassword } = formFields;

    console.log(formFields)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmePassword) {
            alert('Your passwords do not match!')
            return;
        }
        
        try {
            const response = await createAuthWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(response.user, { displayName })
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
        <div>
            <div className="registration-container">
                <p>Don't have an accaunt?</p>
                <p>Sign up with your email and password</p>
                <form onSubmit={handleSubmit}>
                    <label>Display Name</label>
                    <input type='text' required onChange={changeHandler} name="displayName" value={displayName} />

                    <label>E-mail</label>
                    <input type='email' required onChange={changeHandler} name="email" value={email} />

                    <label>Password</label>
                    <input type='password' required onChange={changeHandler} name="password" value={password} />

                    <label>Confirme Password</label>
                    <input type='password' required onChange={changeHandler} name="confirmePassword" value={confirmePassword} />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Registration;