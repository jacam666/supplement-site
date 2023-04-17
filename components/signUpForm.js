import React, { useState } from 'react';
import Axios from 'axios';

const SignUpForm = () => {
  // State to track form data
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
    });

  // Function to handle form field changes
    const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        // Make a POST request to your server with the form data
        const response = await Axios.post('/api/signup', formData);
        console.log('Form submitted:', response.data);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    };

    return (
    <form className='signUp-form' onSubmit={handleFormSubmit}>
      {/* Render your sign-up form fields here */}
        <input className='input-name' type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} />
        <input className='input-email' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
        <input className='input-password' type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
        <button className='submit-button' type="submit">Submit</button>
    </form>
    );
};

export default SignUpForm;
