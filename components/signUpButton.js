import React, { useState } from 'react';
import SignUpForm from './signUpForm';

const SignUpButton = () => {
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    const handleSignUpClick = () => {
    setShowSignUpForm(!showSignUpForm);
    };

    const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    // will add my sign-up form details here later
    };

    return (
    <div>
        <button className='signup-button' onClick={handleSignUpClick}>Sign Up</button>
        {showSignUpForm && (
        <SignUpForm />
        )}
    </div>
    );
};

export default SignUpButton;

