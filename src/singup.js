import React, { useState } from 'react';
import './signup.css';

const SignupForm = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(formData);
    };

    return (
        <center>
            <form onSubmit={handleSubmit} className='form-signUp'>
                <center>
                    <h1>Signup</h1>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder='username' />
                    <br />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' />
                    <br />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' />
                    <br />
                    <button type="submit" className='signup-btn'>Sign Up</button><br></br>
                    <button className='button' onClick={() => props.onFormSwitch('login')}>Already have an account? Signup</button>
                </center>
            </form>
        </center>
    );
};

export default SignupForm;
